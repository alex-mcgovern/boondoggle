import clsx from "clsx";
import * as React from "react";
import {
	Popover as RACPopover,
	type PopoverProps as RACPopoverProps,
} from "react-aria-components";
import { popoverCSS } from "./styles.css";

export type PopoverProps = RACPopoverProps;

export const Popover = React.forwardRef<HTMLDivElement, PopoverProps>(
	(props, ref) => (
		<RACPopover
			{...props}
			ref={ref}
			className={clsx(props.className, popoverCSS)}
		/>
	),
);
