import type { AnchorHTMLAttributes, ForwardedRef, ReactNode } from "react";
import type {
    MenuItemProps as AriaMenuItemProps,
    MenuProps as AriaMenuProps,
    MenuTriggerProps as AriaMenuTriggerProps,
    SubmenuTriggerProps as AriaSubMenuTriggerProps,
    SectionProps as AriaSectionProps,
} from "react-aria-components";

import clsx from "clsx";
import {
    Header as AriaHeader,
    Menu as AriaMenu,
    MenuItem as AriaMenuItem,
    SubmenuTrigger as AriaSubMenuTrigger,
    MenuTrigger as AriaMenuTrigger,
    Section as AriaSection,
} from "react-aria-components";

import "../../styles/dropdown-menu.css";
import { Checkbox } from "../checkbox";

/**
 * A `Trigger` component, for use with a `Menu` component. [Built with React Aria Trigger component](https://react-spectrum.adobe.com/react-aria/Menu.html#menutrigger)
 */
function Trigger(props: AriaMenuTriggerProps) {
    return <AriaMenuTrigger {...props} />;
}

/**
 * A `Trigger` component, for use with a `Menu` component. [Built with React Aria Trigger component](https://react-spectrum.adobe.com/react-aria/Menu.html#menutrigger)
 */
function SubMenuTrigger(props: AriaSubMenuTriggerProps) {
    return <AriaSubMenuTrigger {...props} />;
}

type SingleMenuItem<TItemId extends string = string> =
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        children?: never;
        /**
         * A description of the menu item, that is shown in the UI to the user.
         */
        description?: string;
        /**
         * A href to navigate to when the item is clicked.
         */
        href?: string;
        /**
         * The unique identifier for the menu item.
         */
        id: TItemId;
        /**
         * The name of the menu item, that is shown in the UI to the user.
         */
        name: string;
        /**
         * The icon to display on the left side of the menu item.
         */
        slotLeft?: ReactNode;
        /**
         * Tags used to filter the menu items.
         */
        tags?: Array<string>;
        /**
         * @deprecated
         */
        type?: never;
    };

export type IterableMenuItem<TItemId extends string = string> =
    | {
          /**
           * The children of the menu item. If this is present, the item is considered a section.
           */
          children: Array<SingleMenuItem<TItemId>>;
          /**
           * A href to navigate to when the item is clicked.
           */
          href?: never;
          /**
           * The unique identifier for the menu item.
           */
          id: string;
          /**
           * The name of the menu item, that is shown in the UI to the user.
           */
          name?: string;
          /**
           * The icon to display on the left side of the menu item.
           */
          slotLeft?: never;
          /**
           * Tags used to filter the menu items.
           */
          tags?: never;
          /**
           * @deprecated
           */
          type?: never;
      }
    | SingleMenuItem<TItemId>;

/**
 * A menu displays a list of actions or options that a user can choose. [Built with React Aria Menu component](https://react-spectrum.adobe.com/react-aria/Menu.html)
 */
function DropdownMenu<TItem extends object = object>({
    ref,
    ...props
}: AriaMenuProps<TItem> & {
    ref?: ForwardedRef<HTMLDivElement>;
}) {
    return (
        <AriaMenu<TItem>
            className={clsx(props.className, "dropdown-menu")}
            ref={ref}
            {...props}
        />
    );
}

/**
 * A menu item represents an action or option that a user can choose. [Built with React Aria MenuItem component](https://react-spectrum.adobe.com/react-aria/Menu.html#menuitem)
 */
function Item<TItem extends object>({
    ref,
    ...props
}: AriaMenuItemProps<TItem> & {
    /**
     * The icon to display on the left side of the menu item.
     */
    icon?: ReactNode;

    /**
     * React ref to the Item element.
     */
    ref?: ForwardedRef<HTMLDivElement>;
}) {
    return (
        <AriaMenuItem
            {...props}
            className={clsx(props.className, "dropdown-menu-item", {
                "has-icon": !!props.icon,
            })}
            ref={ref}
        >
            {(renderProps) => {
                return (
                    <>
                        {props.icon}
                        {typeof props.children === "function"
                            ? props.children(renderProps)
                            : props.children}
                        {renderProps.selectionMode === "multiple" ? (
                            <Checkbox
                                // isIndeterminate
                                isSelected={renderProps.isSelected}
                            />
                        ) : null}
                    </>
                );
            }}
        </AriaMenuItem>
    );
}

/**
 * A <Section> defines the child items for a section within a <ListBox>.
 * It may also contain an optional <Header> element.
 * If there is no header, then an aria-label must be provided to identify the section to assistive technologies.
 */
function Section<TItem extends object = object>(
    props: AriaSectionProps<TItem>,
) {
    return (
        <AriaSection
            className="dropdown-menu-section"
            {...props}
        />
    );
}

function SectionHeader({ children }: { children: ReactNode }) {
    return (
        <AriaHeader className="dropdown-menu-section-header">
            {children}
        </AriaHeader>
    );
}

/**
 *
 */
export const Menu = {
    DropdownMenu,
    Item,
    Section,
    SectionHeader,
    SubMenuTrigger,
    Trigger,
};
