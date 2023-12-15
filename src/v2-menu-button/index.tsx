import {
	type MenuProps as ReactAriaMenuProps,
	MenuTrigger as ReactAriaMenuTrigger,
	type MenuTriggerProps as ReactAriaMenuTriggerProps,
	Popover as ReactAriaPopover,
	type PopoverProps as ReactAriaPopoverProps,
} from "react-aria-components";
import { WithSize } from "../types";
import { Button } from "../v2-button";
import { IterableMenuItem, Menu } from "../v2-menu";

export type MenuButtonProps<TItemId extends string = string> = WithSize & {
	buttonProps?: React.ComponentProps<typeof Button>;
	menuProps?: ReactAriaMenuProps<IterableMenuItem<TItemId>>;
	menuTriggerProps?: ReactAriaMenuTriggerProps;
	popoverProps?: ReactAriaPopoverProps;
};

export function MenuButton<TItemId extends string = string>({
	buttonProps,
	menuProps,
	menuTriggerProps,
	popoverProps,
	size,
}: MenuButtonProps<TItemId>) {
	return (
		<ReactAriaMenuTrigger {...menuTriggerProps}>
			<Button {...buttonProps} aria-label="Menu" />
			<ReactAriaPopover {...popoverProps}>
				<Menu {...menuProps} size={size} />
			</ReactAriaPopover>
		</ReactAriaMenuTrigger>
	);
}
