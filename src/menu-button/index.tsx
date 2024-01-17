import type { MenuProps as RACMenuProps } from "react-aria-components";

import type { IterableMenuItem } from "../menu";
import type { MenuTriggerProps } from "../menu-trigger";
import type { PopoverProps } from "../popover";

import { DynamicMenu } from "../menu";
import { MenuTrigger } from "../menu-trigger";
import { PopoverOverlayArrow } from "../popover";
import { Popover } from "../popover";

export type MenuButtonProps<TItemId extends string = string> =
    MenuTriggerProps &
        RACMenuProps<IterableMenuItem<TItemId>> & {
            placement?: PopoverProps["placement"];
        };

export function MenuButton<TItemId extends string = string>({
    children,
    ...props
}: MenuButtonProps<TItemId>) {
    return (
        <MenuTrigger {...props}>
            {children}
            <Popover placement={props.placement}>
                <PopoverOverlayArrow />
                <DynamicMenu {...props} />
            </Popover>
        </MenuTrigger>
    );
}
