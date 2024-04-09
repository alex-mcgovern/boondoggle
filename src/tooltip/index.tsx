import type {
    ButtonProps as RACButtonProps,
    TooltipProps as RACTooltipProps,
    TooltipTriggerComponentProps as RACTooltipTriggerComponentProps,
} from "react-aria-components";

import { faInfoCircle } from "@fortawesome/pro-solid-svg-icons/faInfoCircle";
import clsx from "clsx";
import { forwardRef } from "react";
import {
    Button as RACButton,
    OverlayArrow as RACOverlayArrow,
    Tooltip as RACTooltip,
    TooltipTrigger as RACTooltipTrigger,
} from "react-aria-components";

import { Icon } from "../icon";
import {
    overlayArrowCSS,
    overlayArrowSvgCSS,
    tooltipCSS,
    tooltipTriggerButtonCSS,
} from "./styles.css";

export type TooltipTriggerButtonProps = RACButtonProps;

export const TooltipTriggerButton = forwardRef<
    HTMLButtonElement,
    TooltipTriggerButtonProps
>((props: Omit<RACButtonProps, "children">, ref) => {
    return (
        <RACButton
            slot="clear"
            {...props}
            className={(renderProps) =>
                clsx(props.className, tooltipTriggerButtonCSS(renderProps))
            }
            excludeFromTabOrder
            ref={ref}
        >
            <Icon icon={faInfoCircle} />
        </RACButton>
    );
});

export type TooltipTriggerProps = RACTooltipTriggerComponentProps;

export function TooltipTrigger({
    closeDelay = 0,
    delay = 0,
    ...props
}: TooltipTriggerProps) {
    return (
        <RACTooltipTrigger
            {...props}
            closeDelay={closeDelay}
            delay={delay}
        >
            {props.children}
        </RACTooltipTrigger>
    );
}

export type TooltipProps = RACTooltipProps;

/**
 * A tooltip displays a description of an element on hover or focus.
 *
 * > [Built with React Aria Tooltip](https://react-spectrum.adobe.com/react-aria/Tooltip.html)
 */
export function Tooltip(props: TooltipProps) {
    return (
        <RACTooltip
            {...props}
            className={({ isEntering, isExiting, placement }) =>
                clsx(
                    tooltipCSS({
                        isEntering,
                        isExiting,
                        placement,
                    }),
                )
            }
            offset={6}
        >
            {(renderProps) => {
                return (
                    <>
                        <RACOverlayArrow className={clsx(overlayArrowCSS)}>
                            {(renderProps) => {
                                return (
                                    <svg
                                        className={overlayArrowSvgCSS(
                                            renderProps,
                                        )}
                                        height={8}
                                        viewBox="0 0 8 8"
                                        width={8}
                                    >
                                        <path d="M0 0 L4 4 L8 0" />
                                    </svg>
                                );
                            }}
                        </RACOverlayArrow>

                        {typeof props.children === "function"
                            ? props.children(renderProps)
                            : props.children}
                    </>
                );
            }}
        </RACTooltip>
    );
}
