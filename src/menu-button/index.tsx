import type { ComponentProps } from "react";
import type { MenuProps as AriaMenuProps } from "react-aria-components";

import type { IterableMenuItem } from "../menu";

import { DynamicMenu } from "../menu";
import { MenuTrigger } from "../menu-trigger";
import { Popover } from "../popover";

/**
 * A `MenuButton` component, for use with a `Menu` component. [Built with React Aria MenuButton component](https://react-spectrum.adobe.com/react-aria/Menu.html)
 */
export function MenuButton<TItemId extends string = string>({
    children,
    ...props
}: ComponentProps<typeof MenuTrigger> &
    AriaMenuProps<IterableMenuItem<TItemId>> & {
        /**
         * The placement of the menu popover.
         */
        placement?: ComponentProps<typeof Popover>["placement"];
    }) {
    return (
        <MenuTrigger {...props}>
            {children}
            <Popover placement={props.placement}>
                <DynamicMenu {...props} />
            </Popover>
        </MenuTrigger>
    );
}
