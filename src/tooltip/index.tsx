import type { ForwardedRef } from "react";
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

/**
 * The TooltipTriggerButton component is a default button with an info icon that can be composed with a TooltipTrigger to show a tooltip.
 */
export function TooltipTriggerButton({
    ref,
    ...props
}: Omit<AriaButtonProps, "children"> & {
    ref?: ForwardedRef<HTMLButtonElement>;
}) {
    return (
        <AriaButton
            slot="clear"
            {...props}
            className={clsx(props.className, "tooltip-trigger-btn")}
            excludeFromTabOrder
            ref={ref}
        >
            <Icon icon={faInfoCircle} />
        </AriaButton>
    );
}

/**
 * The TooltipTrigger component does not render any DOM elements itself, but instead triggers a tooltip to appear when hovered or focused.
 * [Built with React Aria Tooltip](https://react-spectrum.adobe.com/react-aria/TooltipTrigger.html)
 */
export function TooltipTrigger({
    closeDelay,
    delay,
    ...props
}: AriaTooltipTriggerProps) {
    return (
        <AriaTooltipTrigger
            {...props}
            closeDelay={closeDelay}
            delay={delay}
        >
            {props.children}
        </AriaTooltipTrigger>
    );
}

/**
 * A tooltip displays a description of an element on hover or focus. [Built with React Aria Tooltip](https://react-spectrum.adobe.com/react-aria/Tooltip.html)
 *
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 * ## Usage
 *
 * ```ts
 * import { Tooltip, TooltipTriggerButton, TooltipTrigger, type TooltipProps } from "boondoggle/tooltip"
 * ```
 */
export function Tooltip(props: AriaTooltipProps) {
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
