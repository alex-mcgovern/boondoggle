import {
	type MenuProps as ReactAriaMenuProps,
	MenuTrigger as ReactAriaMenuTrigger,
	type MenuTriggerProps as ReactAriaMenuTriggerProps,
	Popover as ReactAriaPopover,
	type PopoverProps as ReactAriaPopoverProps,
} from "react-aria-components";
import { Button, type ButtonProps } from "../v2-button";
import { type IterableMenuItem, Menu } from "../v2-menu";
import { popoverCSS } from "./styles.css";

export type MenuButtonProps<TItemId extends string = string> = {
	buttonProps?: ButtonProps;
	menuProps?: ReactAriaMenuProps<IterableMenuItem<TItemId>>;
	menuTriggerProps?: ReactAriaMenuTriggerProps;
	popoverProps?: ReactAriaPopoverProps;
};

export function MenuButton<TItemId extends string = string>({
	buttonProps,
	menuProps,
	menuTriggerProps,
	popoverProps,
}: MenuButtonProps<TItemId>) {
	return (
		<ReactAriaMenuTrigger {...menuTriggerProps}>
			<Button {...buttonProps} aria-label="Menu" />
			<ReactAriaPopover className={popoverCSS} {...popoverProps}>
				<Menu {...menuProps} />
			</ReactAriaPopover>
		</ReactAriaMenuTrigger>
	);
}
