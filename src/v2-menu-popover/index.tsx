import { ForwardedRef, forwardRef } from "react";
import {
	Popover as ReactAriaPopover,
	type PopoverProps as ReactAriaPopoverProps,
} from "react-aria-components";
import { popoverCSS } from "./styles.css";

export const MenuPopover = forwardRef(
	(props: ReactAriaPopoverProps, ref: ForwardedRef<HTMLElement>) => {
		return <ReactAriaPopover ref={ref} className={popoverCSS} {...props} />;
	},
);
