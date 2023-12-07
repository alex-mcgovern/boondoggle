import { faCircleCheck } from "@fortawesome/pro-solid-svg-icons/faCircleCheck";
import { faExclamationCircle } from "@fortawesome/pro-solid-svg-icons/faExclamationCircle";
import { faInfoCircle } from "@fortawesome/pro-solid-svg-icons/faInfoCircle";
import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import { faWarning } from "@fortawesome/pro-solid-svg-icons/faWarning";
import type { AriaToastRegionProps } from "@react-aria/toast";
import { useToastRegion } from "@react-aria/toast";
import type { AriaToastProps } from "@react-aria/toast";
import { useToast } from "@react-aria/toast";
import { useToastState } from "@react-stately/toast";
import type { ToastState } from "@react-stately/toast";
import * as React from "react";
import { Button as ReactAriaButton } from "react-aria-components";
import { exhaustiveSwitchGuard } from "../_lib/exhaustive-switch-guard";
import { variantColorOverlay } from "../index.css";
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
	level: "info" | "success" | "warning" | "error";
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
				<Toast key={toast.content.title} toast={toast} state={state} />
			))}
		</div>
	);
}

const getToastIcon = (level: Required<ToastContent["level"]>) => {
	switch (level) {
		case "info":
			return (
				<Icon
					className={variantColorOverlay.blue}
					color="focus_ring"
					icon={faInfoCircle}
				/>
			);
		case "success":
			return (
				<Icon
					className={variantColorOverlay.green}
					color="focus_ring"
					icon={faCircleCheck}
				/>
			);
		case "warning":
			return (
				<Icon
					className={variantColorOverlay.amber}
					color="focus_ring"
					icon={faWarning}
				/>
			);
		case "error":
			return (
				<Icon
					className={variantColorOverlay.red}
					color="focus_ring"
					icon={faExclamationCircle}
				/>
			);

		default: {
			return exhaustiveSwitchGuard(level);
		}
	}
};

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
			{getToastIcon(props.toast.content.level)}
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
			<ReactAriaButton
				type="button"
				name="close_toast"
				className={toastCloseButtonCSS}
				{...closeButtonProps}
			>
				<Icon icon={faTimes} />
			</ReactAriaButton>
		</div>
	);
}

export function ToastProvider({
	children,
	...props
}: AriaToastRegionProps & { children?: React.ReactNode }) {
	const state = useToastState<ToastContent>({
		maxVisibleToasts: 3,
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
