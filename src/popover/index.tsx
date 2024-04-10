import type {
    OverlayArrowProps as RACOverlayArrowProps,
    PopoverProps as RACPopoverProps,
} from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import {
    OverlayArrow as RACOverlayArrow,
    Popover as RACPopover,
} from "react-aria-components";

import { overlayArrowCSS, overlayArrowSvgCSS, popoverCSS } from "./styles.css";

export type PopoverOverlayArrowProps = RACOverlayArrowProps;

/**
 * A `PopoverOverlayArrow` component, for use with a `Popover` component. [Built with React Aria PopoverOverlayArrow component](https://react-spectrum.adobe.com/react-aria/Popover.html#overlayarrow)
 */
export const PopoverOverlayArrow = forwardRef<
    HTMLDivElement,
    PopoverOverlayArrowProps
>((props, ref) => {
    return (
        <RACOverlayArrow
            className={clsx(props.className, overlayArrowCSS)}
            {...props}
            ref={ref}
        >
            {(renderProps) => {
                return (
                    <svg
                        className={overlayArrowSvgCSS({ ...renderProps })}
                        height={12}
                        viewBox="0 0 12 12"
                        width={12}
                    >
                        <path d="M0 0 L6 6 L12 0" />
                    </svg>
                );
            }}
        </RACOverlayArrow>
    );
});

export type PopoverProps = RACPopoverProps;

/**
 * A popover is an overlay element positioned relative to a trigger. [Built with React Aria Popover component](https://react-spectrum.adobe.com/react-aria/Popover.html)
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
 * import { Popover, type PopoverProps } from "boondoggle/popover"
 * ```
 */
export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
    (props, ref) => (
        <RACPopover
            {...props}
            className={({ isEntering, isExiting, placement, trigger }) =>
                clsx(
                    props.className,
                    popoverCSS({
                        isEntering,
                        isExiting,
                        placement,
                        trigger: trigger || undefined,
                    }),
                )
            }
            ref={ref}
        />
    ),
);
