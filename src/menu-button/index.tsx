import type {
    MenuProps as RACMenuProps,
    MenuTriggerProps as RACMenuTriggerProps,
} from "react-aria-components";

import { MenuTrigger as RACMenuTrigger } from "react-aria-components";

import type { IterableMenuItem } from "../menu";
import type { PopoverProps } from "../popover";

import { Menu } from "../menu";
import { Popover } from "../popover";

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
