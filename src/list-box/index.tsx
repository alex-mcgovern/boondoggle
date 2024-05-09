import type { ForwardedRef, ReactNode } from "react";
import type {
    ListBoxItemProps as ReactAriaListBoxItemProps,
    ListBoxProps as ReactAriaListBoxProps,
    SectionProps as ReactAriaSectionProps,
} from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import {
    Header as AriaHeader,
    Collection as ReactAriaCollection,
    ListBox as ReactAriaListBox,
    ListBoxItem as ReactAriaListBoxItem,
    Section as ReactAriaSection,
    Text as ReactAriaText,
} from "react-aria-components";

import "../../styles/dropdown-menu.css";
import { i18n } from "../_i18n";
import { Checkbox } from "../checkbox";

type SingleListBoxItem<TItemId extends string = string> = {
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

/**
 * A <Section> defines the child items for a section within a <ListBox>.
 * It may also contain an optional <Header> element.
 * If there is no header, then an aria-label must be provided to identify the section to assistive technologies.
 */
function Section<TItem extends object = object>(
    props: ReactAriaSectionProps<TItem>,
) {
    return (
        <ReactAriaSection
            className="dropdown-menu-section"
            {...props}
        />
    );
}

export type ListBoxItemProps<TItemId extends string = string> =
    ReactAriaListBoxItemProps<SingleListBoxItem<TItemId>> & {
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
            className={clsx(props.className, "dropdown-menu-item", {
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
                                className="dropdown-menu-item-name"
                                slot="label"
                            >
                                {value?.name}
                            </ReactAriaText>
                            <ReactAriaText
                                className="dropdown-menu-item-description"
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
            className="dropdown-menu"
            ref={ref}
            renderEmptyState={() => <div>{i18n.no_results}</div>}
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

                        <ReactAriaCollection items={item.children}>
                            {(i) => (
                                <ListBoxItem
                                    icon={i.slotLeft}
                                    textValue={i.name}
                                    value={i}
                                />
                            )}
                        </ReactAriaCollection>
                    </Section>
                ) : (
                    <ListBoxItem
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
