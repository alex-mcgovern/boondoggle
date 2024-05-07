import type { ForwardedRef, ReactNode } from "react";
import type {
    ListBoxItemProps as ReactAriaListBoxItemProps,
    ListBoxProps as ReactAriaListBoxProps,
} from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import {
    Collection as ReactAriaCollection,
    Header as ReactAriaHeader,
    ListBox as ReactAriaListBox,
    ListBoxItem as ReactAriaListBoxItem,
    Text as ReactAriaText,
} from "react-aria-components";

import type { ColorOverlay } from "../index.css";

import {
    menuHeaderCSS,
    menuItemDescriptionCSS,
    menuItemNameCSS,
} from "../_css/menu.css";
import { i18n } from "../_i18n";
import { Box } from "../box";
import { Checkbox } from "../checkbox";
import { Section } from "../section";
import "./styles.css";

type SingleListBoxItem<TItemId extends string = string> = {
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

export type IterableListBoxItem<TItemId extends string = string> =
    | {
          /**
           * The children of the menu item. If this is present, the item is considered a section.
           */
          children: Array<SingleListBoxItem<TItemId>>;
          /**
           * Color overlay, used to convey semantic meaning.
           * -   `amber`: To indicate caution, or warning actions
           * -   `blue`: To indicate information, or neutral actions
           * -   `green`: To indicate success, or confirmatory actions
           * -   `grey`: When a subtle, neutral color is needed
           * -   `red`: To warn of potentially destructive actions
           * -   `default`: To reset the color overlay if inherited from a parent
           */
          colorOverlay?: never;
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
    | SingleListBoxItem<TItemId>;

export type ListBoxItemProps<TItemId extends string = string> =
    ReactAriaListBoxItemProps<SingleListBoxItem<TItemId>> & {
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
        /**
         * The icon to display on the left side of the menu item.
         */
        icon?: ReactNode;
    };

function ListBoxItem<TItemId extends string = string>({
    value,
    ...props
}: ListBoxItemProps<TItemId>) {
    return (
        <ReactAriaListBoxItem
            className={clsx(props.className, "list-box-item", {
                "has-icon": !!props.icon,
            })}
            href={value?.href}
            {...props}
        >
            {(renderProps) => {
                return (
                    <>
                        {props.icon}
                        <div>
                            <ReactAriaText
                                className={menuItemNameCSS}
                                slot="label"
                            >
                                {value?.name}
                            </ReactAriaText>
                            <ReactAriaText
                                className={menuItemDescriptionCSS}
                                slot="description"
                            >
                                {value?.description}
                            </ReactAriaText>
                        </div>
                        {renderProps.selectionMode === "multiple" ? (
                            <Checkbox
                                isIndeterminate
                                isSelected={renderProps.isSelected}
                            />
                        ) : null}
                    </>
                );
            }}
        </ReactAriaListBoxItem>
    );
}

export type ListBoxProps<TItemId extends string = string> =
    ReactAriaListBoxProps<IterableListBoxItem<TItemId>>;

function BaseListBox<TItemId extends string = string>(
    props: ListBoxProps<TItemId>,
    ref: ForwardedRef<HTMLDivElement>,
) {
    return (
        <ReactAriaListBox<IterableListBoxItem<TItemId>>
            className="list-box"
            ref={ref}
            renderEmptyState={() => (
                <Box
                    color="text_low_contrast"
                    display="flex"
                    fontStyle="bodySm"
                    placeItems="center"
                    whiteSpace="nowrap"
                >
                    {i18n.no_results}
                </Box>
            )}
            {...props}
        >
            {(item) => {
                return item.children ? (
                    <Section>
                        {item.name ? (
                            <ReactAriaHeader className={menuHeaderCSS}>
                                {item.name}
                            </ReactAriaHeader>
                        ) : null}

                        <ReactAriaCollection items={item.children}>
                            {(i) => (
                                <ListBoxItem
                                    colorOverlay={i.colorOverlay}
                                    icon={i.slotLeft}
                                    textValue={i.name}
                                    value={i}
                                />
                            )}
                        </ReactAriaCollection>
                    </Section>
                ) : (
                    <ListBoxItem
                        colorOverlay={item.colorOverlay}
                        icon={item.slotLeft}
                        textValue={item.name}
                        value={item}
                    />
                );
            }}
        </ReactAriaListBox>
    );
}

/**
 * A listbox displays a list of options and allows a user to select one or more of them. [Built with React Aria ListBox component](https://react-spectrum.adobe.com/react-aria/ListBox.html)
 */
export const ListBox = forwardRef(BaseListBox);
