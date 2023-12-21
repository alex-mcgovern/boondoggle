import {
	type MenuProps as ReactAriaMenuProps,
	MenuTrigger as ReactAriaMenuTrigger,
	type MenuTriggerProps as ReactAriaMenuTriggerProps,
	type PopoverProps as ReactAriaPopoverProps,
} from "react-aria-components";
import { Button, type ButtonProps } from "../v2-button";
import { type IterableMenuItem, Menu } from "../v2-menu";
import { MenuPopover } from "../v2-menu-popover";

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
			<MenuPopover {...popoverProps}>
				<Menu {...menuProps} />
			</MenuPopover>
		</ReactAriaMenuTrigger>
	);
}
