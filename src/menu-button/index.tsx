import {
	type MenuProps as RACMenuProps,
	MenuTrigger as RACMenuTrigger,
	type MenuTriggerProps as RACMenuTriggerProps,
} from "react-aria-components";
import { type IterableMenuItem, Menu } from "../__DONE__menu";
import { Popover, PopoverProps } from "../__DONE__popover/popover";

export type MenuButtonProps<TItemId extends string = string> =
	RACMenuTriggerProps &
		RACMenuProps<IterableMenuItem<TItemId>> & {
			placement?: PopoverProps["placement"];
		};

export function MenuButton<TItemId extends string = string>({
	children,
	...props
}: MenuButtonProps<TItemId>) {
	return (
		<RACMenuTrigger {...props}>
			{children}
			<Popover placement={props.placement}>
				<Menu {...props} />
			</Popover>
		</RACMenuTrigger>
	);
}
