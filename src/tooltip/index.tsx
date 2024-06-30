import type {
	ButtonProps as AriaButtonProps,
	TooltipProps as AriaTooltipProps,
	TooltipTriggerComponentProps as AriaTooltipTriggerProps,
} from "react-aria-components";

import { faInfoCircle } from "@fortawesome/pro-solid-svg-icons/faInfoCircle";
import clsx from "clsx";
import {
	Button as AriaButton,
	OverlayArrow as AriaOverlayArrow,
	Tooltip as AriaTooltip,
	TooltipTrigger as AriaTooltipTrigger,
} from "react-aria-components";

import { Icon } from "../icon";
import "./styles.css";

export function TooltipInfoButton(props: Omit<AriaButtonProps, "children">) {
	return (
		<AriaButton
			slot="clear"
			{...props}
			className={clsx(props.className, "tooltip-trigger-btn")}
			excludeFromTabOrder
		>
			<Icon icon={faInfoCircle} />
		</AriaButton>
	);
}

export function TooltipRoot(props: AriaTooltipTriggerProps) {
	return <AriaTooltipTrigger {...props}>{props.children}</AriaTooltipTrigger>;
}

export function TooltipBody(props: AriaTooltipProps) {
	return (
		<AriaTooltip
			{...props}
			className="tooltip"
			offset={6}
		>
			{(renderProps) => {
				return (
					<>
						<AriaOverlayArrow className="overlay-arrow">
							<svg
								height={8}
								viewBox="0 0 8 8"
								width={8}
							>
								<path d="M0 0 L4 4 L8 0" />
							</svg>
						</AriaOverlayArrow>

						{typeof props.children === "function"
							? props.children(renderProps)
							: props.children}
					</>
				);
			}}
		</AriaTooltip>
	);
}

/**
 * A tooltip displays a description of an element on hover or focus. [Built with
 * React Aria Tooltip](https://react-spectrum.adobe.com/react-aria/Tooltip.html)
 *
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 * ## Usage
 *
 * The `Tooltip` namespace comprises several components, designed to be composed together
 * to create a tooltip.
 * - `Tooltip.Root` is the root component that handles triggering the tooltip.
 *   It wraps the target element and the tooltip body.
 * - `Tooltip.Body` is the component that "pops over" the target element and
 *   contains the content shown when the tooltip is active.
 * - `Tooltip.InfoButton` is an _optional_ button with a relevant icon that can
 *   be used to trigger the tooltip. Note that other elements can be used to
 *   trigger the tooltip as well, e.g. a link or button.
 *
 * ```tsx
 * import { Tooltip } from "boondoggle";
 *
 * <Tooltip.Root>
 *  <Tooltip.InfoButton />
 *  <Tooltip.Body>
 *      <p>Some helpful information</p>
 *  </Tooltip.Body>
 * </Tooltip.Root>
 * ```
 */
export const Tooltip = {
	Root: TooltipRoot,
	Body: TooltipBody,
	InfoButton: TooltipInfoButton,
};
