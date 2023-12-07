import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import type { AriaToastRegionProps } from "@react-aria/toast";
import { useToastRegion } from "@react-aria/toast";
import type { AriaToastProps } from "@react-aria/toast";
import { useToast } from "@react-aria/toast";
import { useToastState } from "@react-stately/toast";
import type { ToastState } from "@react-stately/toast";
import * as React from "react";
import { Icon } from "../v2-icon";
import {
	toastCSS,
	toastCloseButtonCSS,
	toastDescriptionCSS,
	toastRegionCSS,
	toastTitleCSS,
} from "./styles.css";

type ToastContent = {
	title: string;
	description?: string;
	icon?: React.ReactNode;
};

const ToastContext = React.createContext<ToastState<ToastContent> | null>(null);

export const useToastContext = () => {
	const context = React.useContext(ToastContext);
	if (!context) {
		throw new Error(
			"Toast components must be rendered within a ToastProvider.",
		);
	}
	return context;
};

function ToastRegion({
	state,
	...props
}: AriaToastRegionProps & {
	state: ToastState<ToastContent>;
}) {
	const ref = React.useRef(null);
	const { regionProps } = useToastRegion(props, state, ref);

	return (
		<div {...regionProps} ref={ref} className={toastRegionCSS}>
			{state.visibleToasts.map((toast) => (
				<Toast key={toast.key} toast={toast} state={state} />
			))}
		</div>
	);
}

function Toast({
	state,
	...props
}: AriaToastProps<ToastContent> & {
	state: ToastState<ToastContent>;
}) {
	const ref = React.useRef(null);
	const { toastProps, titleProps, descriptionProps, closeButtonProps } =
		useToast(props, state, ref);

	return (
		<div
			className={toastCSS}
			{...toastProps}
			data-animation={props.toast.animation}
			onAnimationEnd={() => {
				// Remove the toast when the exiting animation completes.
				if (props.toast.animation === "exiting") {
					state.remove(props.toast.key);
				}
			}}
			ref={ref}
		>
			{props.toast.content.icon ? props.toast.content.icon : null}
			<div>
				{props.toast.content.title ? (
					<div className={toastTitleCSS} {...titleProps}>
						{props.toast.content.title}
					</div>
				) : null}

				{props.toast.content.description ? (
					<div className={toastDescriptionCSS} {...descriptionProps}>
						{props.toast.content.description}
					</div>
				) : null}
			</div>
			<button
				type="button"
				name="close_toast"
				className={toastCloseButtonCSS}
				{...closeButtonProps}
			>
				<Icon icon={faTimes} />
			</button>
		</div>
	);
}

export function ToastProvider({
	children,
	...props
}: AriaToastRegionProps & { children?: React.ReactNode }) {
	const state = useToastState<ToastContent>({
		maxVisibleToasts: 5,
		hasExitAnimation: true,
	});

	return (
		<ToastContext.Provider value={state}>
			{children}
			{state.visibleToasts.length > 0 && (
				<ToastRegion {...props} state={state} />
			)}
		</ToastContext.Provider>
	);
}
