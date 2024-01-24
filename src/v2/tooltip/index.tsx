import type {
    TooltipProps as RACTooltipProps,
    TooltipTriggerComponentProps as RACTooltipTriggerComponentProps,
} from "react-aria-components";
import type { ButtonProps as RACButtonProps } from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import {
    OverlayArrow as RACOverlayArrow,
    Tooltip as RACTooltip,
    TooltipTrigger as RACTooltipTrigger,
} from "react-aria-components";
import { Button as RACButton } from "react-aria-components";

import { overlayArrowCSS } from "../../popover/styles.css";
import {
    overlayArrowSvgCSS,
    tooltipCSS,
    tooltipFieldButtonCSS,
} from "./styles.css";

/** ---------------------------------------------
 * Trigger Button
 * ----------------------------------------------- */

export type TriggerButtonProps = RACButtonProps;

/**
 * A field button is a button that is intended to be used inside a `Group` component
 * to add additional functionality to a field. The `slot` prop is used to connect the
 * button to the field.
 */
export const TooltipFieldButton = forwardRef<
    HTMLButtonElement,
    TriggerButtonProps
>((props: RACButtonProps, ref) => {
    return (
        <RACButton
            {...props}
            className={clsx(props.className, tooltipFieldButtonCSS)}
            excludeFromTabOrder
            ref={ref}
        />
    );
});

/** ---------------------------------------------
 * Tooltip
 * ----------------------------------------------- */

export type TooltipProps = RACTooltipTriggerComponentProps & {
    placement?: RACTooltipProps["placement"];
    tooltipContent: React.ReactNode;
};

export const Tooltip = (props: TooltipProps) => {
    return (
        <RACTooltipTrigger {...props}>
            {props.children}
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
                offset={10}
                placement={props.placement}
            >
                <RACOverlayArrow className={clsx(overlayArrowCSS)}>
                    {(renderProps) => {
                        return (
                            <svg
                                className={overlayArrowSvgCSS({
                                    ...renderProps,
                                })}
                                height={12}
                                viewBox="0 0 8 8"
                                width={12}
                            >
                                <path d="M2 0 L4 5 L6 0" />
                            </svg>
                        );
                    }}
                </RACOverlayArrow>

                {props.tooltipContent}
            </RACTooltip>
        </RACTooltipTrigger>
    );
};
