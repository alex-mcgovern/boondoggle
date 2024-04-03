import type { AnchorHTMLAttributes, ForwardedRef, ReactNode } from "react";
import type {
    MenuItemProps as RACMenuItemProps,
    MenuProps as RACMenuProps,
} from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import {
    Collection as RACCollection,
    Header as RACHeader,
    Menu as RACMenu,
    MenuItem as RACMenuItem,
} from "react-aria-components";

import type { ColorOverlay } from "../index.css";

import { menuHeaderCSS } from "../_css/menu.css";
import { Checkbox } from "../checkbox";
import { Section } from "../section";
import { menuCSS, menuItemCSS } from "./styles.css";

/** -----------------------------------------------------------------------------
 * IterableMenuItem
 * ------------------------------------------------------------------------------- */

type SingleMenuItem<TItemId extends string = string> =
    AnchorHTMLAttributes<HTMLAnchorElement> & {
        children?: never;
        /**
         * Color overlay, used to convey semantic meaning.
         * -   `amber`: To indicate caution, or warning actions
         * -   `blue`: To indicate information, or neutral actions
         * -   `green`: To indicate success, or confirmatory actions
         * -   `grey`: When a subtle, neutral color is needed
         * -   `red`: To warn of potentially destructive actions
         * -   `default`: To reset the color overlay if inherited from a parent
         */
        colorOverlay?: ColorOverlay;
        description?: string;
        href?: string;
        id: TItemId;
        name: string;
        slotLeft?: ReactNode;
        tags?: Array<string>;
        type?: never;
    };

export type IterableMenuItem<TItemId extends string = string> =
    | {
          children: Array<SingleMenuItem<TItemId>>;
          colorOverlay?: never;
          href?: never;
          id: string;
          name?: string;
          slotLeft?: never;
          tags?: never;
          type?: never;
      }
    | SingleMenuItem<TItemId>;

/** -----------------------------------------------------------------------------
 * Menu
 * ------------------------------------------------------------------------------- */

export type MenuProps<TItem extends object = object> = RACMenuProps<TItem>;

function _Menu<TItem extends object = object>(
    props: MenuProps<TItem>,
    ref: ForwardedRef<HTMLDivElement>,
) {
    return (
        <RACMenu<TItem>
            className={clsx(props.className, menuCSS)}
            ref={ref}
            {...props}
        />
    );
}

export const Menu = forwardRef(_Menu);

/** -----------------------------------------------------------------------------
 * MenuItem
 * ------------------------------------------------------------------------------- */

export type MenuItemProps<TItem extends object> = RACMenuItemProps<TItem> & {
    /**
     * Color overlay, used to convey semantic meaning.
     * -   `amber`: To indicate caution, or warning actions
     * -   `blue`: To indicate information, or neutral actions
     * -   `green`: To indicate success, or confirmatory actions
     * -   `grey`: When a subtle, neutral color is needed
     * -   `red`: To warn of potentially destructive actions
     * -   `default`: To reset the color overlay if inherited from a parent
     */
    colorOverlay?: ColorOverlay;
    icon?: ReactNode;
};

function _MenuItem<TItem extends object>(
    props: MenuItemProps<TItem>,
    ref: ForwardedRef<HTMLDivElement>,
) {
    return (
        <RACMenuItem
            {...props}
            className={({
                allowsDragging,
                isDisabled,
                isDragging,
                isDropTarget,
                isFocused,
                isFocusVisible,
                isHovered,
                isPressed,
                isSelected,
                selectionBehavior,
                selectionMode,
            }) =>
                clsx(
                    props.className,
                    menuItemCSS({
                        allowsDragging: allowsDragging ? "true" : "false",
                        colorOverlay: props.colorOverlay,
                        hasIcon: props.icon ? "true" : "false",
                        isDisabled: isDisabled ? "true" : "false",
                        isDragging: isDragging ? "true" : "false",
                        isDropTarget: isDropTarget ? "true" : "false",
                        isFocused: isFocused ? "true" : "false",
                        isFocusVisible: isFocusVisible ? "true" : "false",
                        isHovered: isHovered ? "true" : "false",
                        isPressed: isPressed ? "true" : "false",
                        isSelected: isSelected ? "true" : "false",
                        selectionBehavior,
                        selectionMode,
                    }),
                )
            }
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
                                isIndeterminate
                                isSelected={renderProps.isSelected}
                            />
                        ) : null}
                    </>
                );
            }}
        </RACMenuItem>
    );
}

export const MenuItem = forwardRef(_MenuItem);

/** -----------------------------------------------------------------------------
 * DynamicMenu
 * ------------------------------------------------------------------------------- */

export type DynamicMenuProps<TItemId extends string = string> = RACMenuProps<
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
                            <RACHeader className={menuHeaderCSS}>
                                {item.name}
                            </RACHeader>
                        ) : null}

                        <RACCollection items={item.children}>
                            {(childItem) => (
                                <MenuItem<IterableMenuItem<TItemId>>
                                    {...childItem}
                                    icon={childItem.slotLeft}
                                    value={item}
                                >
                                    {childItem.name}
                                </MenuItem>
                            )}
                        </RACCollection>
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

export const DynamicMenu = forwardRef(_DynamicMenu);
