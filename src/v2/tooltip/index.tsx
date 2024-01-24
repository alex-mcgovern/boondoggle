import type {
    TooltipProps as RACTooltipProps,
    TooltipTriggerComponentProps as RACTooltipTriggerComponentProps} from "react-aria-components";

import clsx from "clsx";
import {
    OverlayArrow as RACOverlayArrow,
    Tooltip as RACTooltip,
    TooltipTrigger as RACTooltipTrigger
} from "react-aria-components";

import { overlayArrowCSS } from "../../popover/styles.css";
import { overlayArrowSvgCSS, tooltipCSS } from "./styles.css";

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
