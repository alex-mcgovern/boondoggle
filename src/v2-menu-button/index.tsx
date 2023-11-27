import {
	Button as ReactAriaButton,
	type ButtonProps as ReactAriaButtonProps,
	type MenuProps as ReactAriaMenuProps,
	MenuTrigger as ReactAriaMenuTrigger,
	type MenuTriggerProps as ReactAriaMenuTriggerProps,
	Popover as ReactAriaPopover,
	type PopoverProps as ReactAriaPopoverProps,
} from "react-aria-components";
import { WithSize, WithSlotSide } from "../types";
import { IterableMenuItem, Menu } from "../v2-menu";
import { menuButtonCSS } from "./styles.css";

export function MenuButton<TItemId extends string = string>({
	buttonProps,
	menuProps,
	menuTriggerProps,
	popoverProps,
	size,
}: WithSize & {
	buttonProps?: WithSlotSide & ReactAriaButtonProps;
	menuProps?: ReactAriaMenuProps<IterableMenuItem<TItemId>>;
	menuTriggerProps?: ReactAriaMenuTriggerProps;
	popoverProps?: ReactAriaPopoverProps;
}) {
	return (
		<ReactAriaMenuTrigger {...menuTriggerProps}>
			<ReactAriaButton
				className={menuButtonCSS({ size })}
				{...buttonProps}
				aria-label="Menu"
			/>
			<ReactAriaPopover {...popoverProps}>
				<Menu {...menuProps} size={size} />
			</ReactAriaPopover>
		</ReactAriaMenuTrigger>
	);
}
