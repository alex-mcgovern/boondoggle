import type { PopoverProps as RACPopoverProps } from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { Popover as RACPopover } from "react-aria-components";

import { popoverCSS } from "./styles.css";

export type PopoverProps = RACPopoverProps;

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
