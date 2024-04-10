import type { MenuProps as RACMenuProps } from "react-aria-components";

import type { IterableMenuItem } from "../menu";
import type { MenuTriggerProps } from "../menu-trigger";
import type { PopoverProps } from "../popover";

import { DynamicMenu } from "../menu";
import { MenuTrigger } from "../menu-trigger";
import { Popover } from "../popover";

export type MenuButtonProps<TItemId extends string = string> =
    MenuTriggerProps &
        RACMenuProps<IterableMenuItem<TItemId>> & {
            /**
             * The placement of the menu popover.
             */
            placement?: PopoverProps["placement"];
        };

/**
 * A `MenuButton` component, for use with a `Menu` component. [Built with React Aria MenuButton component](https://react-spectrum.adobe.com/react-aria/Menu.html)
 */
export function MenuButton<TItemId extends string = string>({
    children,
    ...props
}: MenuButtonProps<TItemId>) {
    return (
        <MenuTrigger {...props}>
            {children}
            <Popover placement={props.placement}>
                <DynamicMenu {...props} />
            </Popover>
        </MenuTrigger>
    );
}
