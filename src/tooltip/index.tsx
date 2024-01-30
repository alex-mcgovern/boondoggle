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

/** ---------------------------------------------
 * Trigger Button
 * ----------------------------------------------- */

export type TooltipTriggerButtonProps = RACButtonProps;

/**
 * A field button is a button that is intended to be used inside a `Group` component
 * to add additional functionality to a field. The `slot` prop is used to connect the
 * button to the field.
 */
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

/** ---------------------------------------------
 * Tooltip
 * ----------------------------------------------- */

export type TooltipProps = RACTooltipTriggerComponentProps & {
    placement?: RACTooltipProps["placement"];
    tooltipContent: React.ReactNode;
};

export const Tooltip = ({
    closeDelay = 0,
    delay = 0,
    placement = "top",
    ...props
}: TooltipProps) => {
    return (
        <RACTooltipTrigger
            {...props}
            closeDelay={closeDelay}
            delay={delay}
        >
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
                offset={6}
                placement={placement}
            >
                <RACOverlayArrow className={clsx(overlayArrowCSS)}>
                    {(renderProps) => {
                        return (
                            <svg
                                className={overlayArrowSvgCSS({
                                    ...renderProps,
                                })}
                                height={8}
                                viewBox="0 0 8 8"
                                width={8}
                            >
                                <path d="M0 0 L4 4 L8 0" />
                            </svg>
                        );
                    }}
                </RACOverlayArrow>

                {props.tooltipContent}
            </RACTooltip>
        </RACTooltipTrigger>
    );
};
