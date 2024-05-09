import type { AnchorHTMLAttributes, ForwardedRef, ReactNode } from "react";
import type {
    MenuItemProps as AriaMenuItemProps,
    MenuProps as AriaMenuProps,
    SectionProps as AriaSectionProps,
} from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import {
    Collection as AriaCollection,
    Header as AriaHeader,
    Menu as AriaMenu,
    MenuItem as AriaMenuItem,
    Section as AriaSection,
} from "react-aria-components";

import "../../styles/dropdown-menu.css";
import { Checkbox } from "../checkbox";

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

export type MenuProps<TItem extends object = object> = AriaMenuProps<TItem>;

function _Menu<TItem extends object = object>(
    props: MenuProps<TItem>,
    ref: ForwardedRef<HTMLDivElement>,
) {
    return (
        <AriaMenu<TItem>
            className={clsx(props.className, "dropdown-menu")}
            ref={ref}
            {...props}
        />
    );
}

/**
 * A menu displays a list of actions or options that a user can choose. [Built with React Aria Menu component](https://react-spectrum.adobe.com/react-aria/Menu.html)
 */
export const Menu = forwardRef(_Menu);

export type MenuItemProps<TItem extends object> = AriaMenuItemProps<TItem> & {
    /**
     * The icon to display on the left side of the menu item.
     */
    icon?: ReactNode;
};

function _MenuItem<TItem extends object>(
    props: MenuItemProps<TItem>,
    ref: ForwardedRef<HTMLDivElement>,
) {
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
 * A menu item represents an action or option that a user can choose. [Built with React Aria MenuItem component](https://react-spectrum.adobe.com/react-aria/Menu.html#menuitem)
 */
export const MenuItem = forwardRef(_MenuItem);

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

export type DynamicMenuProps<TItemId extends string = string> = AriaMenuProps<
    IterableMenuItem<TItemId>
>;

function _DynamicMenu<TItemId extends string = string>(
    props: DynamicMenuProps<TItemId>,
    ref: ForwardedRef<HTMLDivElement>,
) {
    return (
        <Menu<IterableMenuItem<TItemId>>
            ref={ref}
            {...props}
        >
            {(item) => {
                return item.children ? (
                    <Section>
                        {item.name ? (
                            <AriaHeader className="dropdown-menu-section-header">
                                {item.name}
                            </AriaHeader>
                        ) : null}

                        <AriaCollection items={item.children}>
                            {(childItem) => (
                                <MenuItem<IterableMenuItem<TItemId>>
                                    {...childItem}
                                    icon={childItem.slotLeft}
                                    value={item}
                                >
                                    {childItem.name}
                                </MenuItem>
                            )}
                        </AriaCollection>
                    </Section>
                ) : (
                    <MenuItem<IterableMenuItem<TItemId>>
                        {...item}
                        icon={item.slotLeft}
                        value={item}
                    >
                        {item.name}
                    </MenuItem>
                );
            }}
        </Menu>
    );
}

/**
 * A DynamicMenu displays a list of actions or options that a user can choose. [Built with React Aria Menu component](https://react-spectrum.adobe.com/react-aria/Menu.html)
 *
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 * ## Usage
 *
 * ```ts
 * import { DynamicMenu, type DynamicMenuProps } from "boondoggle/DynamicMenu"
 * ```
 */
export const DynamicMenu = forwardRef(_DynamicMenu);
