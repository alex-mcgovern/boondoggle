import type {
    ButtonProps as RACButtonProps,
    TooltipProps as RACTooltipProps,
    TooltipTriggerComponentProps as RACTooltipTriggerComponentProps,
} from "react-aria-components";

import { faQuestionCircle } from "@fortawesome/pro-duotone-svg-icons/faQuestionCircle";
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
    tooltipFieldButtonCSS,
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
            {...props}
            className={clsx(props.className, tooltipFieldButtonCSS)}
            excludeFromTabOrder
            ref={ref}
        >
            <Icon icon={faQuestionCircle} />
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

export const Tooltip = ({ delay = 0, ...props }: TooltipProps) => {
    return (
        <RACTooltipTrigger
            {...props}
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
                                <path d="M2 0 L4 4 L6 0" />
                            </svg>
                        );
                    }}
                </RACOverlayArrow>

                {props.tooltipContent}
            </RACTooltip>
        </RACTooltipTrigger>
    );
};
