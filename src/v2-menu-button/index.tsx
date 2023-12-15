import {
	type MenuProps as ReactAriaMenuProps,
	MenuTrigger as ReactAriaMenuTrigger,
	type MenuTriggerProps as ReactAriaMenuTriggerProps,
	Popover as ReactAriaPopover,
	type PopoverProps as ReactAriaPopoverProps,
} from "react-aria-components";
import { exhaustiveSwitchGuard } from "../_lib/exhaustive-switch-guard";
import { Button, type ButtonProps } from "../v2-button";
import { type IterableMenuItem, Menu, type MenuProps } from "../v2-menu";

const getMenuSize = (size: ButtonProps["size"]): MenuProps["size"] => {
	switch (size) {
		case "square_lg":
		case "lg": {
			return "lg";
		}
		case undefined:
		case "square_md":
		case "md": {
			return "md";
		}
		case "square_sm":
		case "xs":
		case "sm": {
			return "sm";
		}

		default: {
			return exhaustiveSwitchGuard(size);
		}
	}
};

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
			<ReactAriaPopover {...popoverProps}>
				<Menu {...menuProps} size={getMenuSize(buttonProps?.size)} />
			</ReactAriaPopover>
		</ReactAriaMenuTrigger>
	);
}
