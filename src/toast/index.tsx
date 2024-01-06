import type { AriaToastRegionProps } from "@react-aria/toast";
import type { AriaToastProps } from "@react-aria/toast";
import type { ToastState } from "@react-stately/toast";
import type { ReactNode } from "react";

import { faCircleCheck } from "@fortawesome/pro-solid-svg-icons/faCircleCheck";
import { faExclamationCircle } from "@fortawesome/pro-solid-svg-icons/faExclamationCircle";
import { faInfoCircle } from "@fortawesome/pro-solid-svg-icons/faInfoCircle";
import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import { faWarning } from "@fortawesome/pro-solid-svg-icons/faWarning";
import { useToastRegion } from "@react-aria/toast";
import { useToast } from "@react-aria/toast";
import { useToastState } from "@react-stately/toast";
import { createContext, useContext, useRef } from "react";
import { Button as ReactAriaButton } from "react-aria-components";

import { exhaustiveSwitchGuard } from "../_lib/exhaustive-switch-guard";
import { Icon } from "../icon";
import { variantColorOverlay } from "../index.css";
import {
	toastCSS,
	toastCloseButtonCSS,
	toastDescriptionCSS,
	toastRegionCSS,
	toastTitleCSS,
} from "./styles.css";

/** -----------------------------------------------------------------------------
 * @type ToastContent
 * ------------------------------------------------------------------------------- */

export type ToastContent = {
	description?: string;
	level: "error" | "info" | "success" | "warning";
	title: string;
};

/** -----------------------------------------------------------------------------
 * @context Toast context
 * ------------------------------------------------------------------------------- */

const ToastContext = createContext<ToastState<ToastContent> | null>(null);

export const useToastContext = () => {
	const context = useContext(ToastContext);
	if (!context) {
		throw new Error(
			"Toast components must be rendered within a ToastProvider.",
		);
	}
	return context;
};

export function ToastProvider({
	children,
	...props
}: AriaToastRegionProps & { children?: ReactNode }) {
	const state = useToastState<ToastContent>({
		hasExitAnimation: true,
		maxVisibleToasts: 3,
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

/** -----------------------------------------------------------------------------
 * @component ToastRegion
 * ------------------------------------------------------------------------------- */

function ToastRegion({
	state,
	...props
}: AriaToastRegionProps & {
	state: ToastState<ToastContent>;
}) {
	const ref = useRef(null);
	const { regionProps } = useToastRegion(props, state, ref);

	return (
		<div {...regionProps} className={toastRegionCSS} ref={ref}>
			{state.visibleToasts.map((toast, index) => (
				<Toast
					key={`${toast.key}-${index}`}
					state={state}
					toast={toast}
				/>
			))}
		</div>
	);
}

/** -----------------------------------------------------------------------------
 * @util getToastIcon
 * ------------------------------------------------------------------------------- */

const getToastIcon = (level: Required<ToastContent["level"]>) => {
	switch (level) {
		case "info":
			return (
				<Icon
					className={variantColorOverlay.blue}
					color="toast_icon"
					icon={faInfoCircle}
				/>
			);
		case "success":
			return (
				<Icon
					className={variantColorOverlay.green}
					color="toast_icon"
					icon={faCircleCheck}
				/>
			);
		case "warning":
			return (
				<Icon
					className={variantColorOverlay.amber}
					color="toast_icon"
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

/** -----------------------------------------------------------------------------
 * @component Toast
 * ------------------------------------------------------------------------------- */

function Toast({
	state,
	...props
}: AriaToastProps<ToastContent> & {
	state: ToastState<ToastContent>;
}) {
	const ref = useRef(null);
	const { closeButtonProps, descriptionProps, titleProps, toastProps } =
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
				className={toastCloseButtonCSS}
				name="close_toast"
				type="button"
				{...closeButtonProps}
			>
				<Icon icon={faTimes} />
			</ReactAriaButton>
		</div>
	);
}
