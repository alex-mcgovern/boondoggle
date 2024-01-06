import clsx from "clsx";
import { forwardRef } from "react";
import {
    Popover as RACPopover,
    type PopoverProps as RACPopoverProps,
} from "react-aria-components";

import { popoverCSS } from "./styles.css";

export type PopoverProps = RACPopoverProps;

export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
    (props, ref) => (
        <RACPopover
            {...props}
            className={clsx(props.className, popoverCSS)}
            ref={ref}
        />
    ),
);
