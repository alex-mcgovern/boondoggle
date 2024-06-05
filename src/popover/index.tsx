import type {
    OverlayArrowProps as AriaOverlayArrowProps,
    PopoverProps as AriaPopoverProps,
} from "react-aria-components";

import clsx from "clsx";
import {
    OverlayArrow as AriaOverlayArrow,
    Popover as AriaPopover,
} from "react-aria-components";

import "./styles.css";

/**
 * A `PopoverOverlayArrow` component, for use with a `Popover` component. [Built with React Aria PopoverOverlayArrow component](https://react-spectrum.adobe.com/react-aria/Popover.html#overlayarrow)
 */
export function PopoverOverlayArrow({ ...props }: AriaOverlayArrowProps) {
    return (
        <AriaOverlayArrow
            className={clsx(props.className, "overlay-arrow")}
            {...props}
        >
            <svg
                height={12}
                viewBox="0 0 12 12"
                width={12}
            >
                <path d="M0 0 L6 6 L12 0" />
            </svg>
        </AriaOverlayArrow>
    );
}

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
 * import { Popover } from "boondoggle";
 * ```
 */
export function Popover({ ...props }: AriaPopoverProps) {
    return (
        <AriaPopover
            {...props}
            className={clsx(props.className, "popover")}
            offset={4}
        />
    );
}
