import type { ForwardedRef, ReactNode } from "react";
import type {
    ListBoxItemProps as ReactAriaListBoxItemProps,
    ListBoxProps as ReactAriaListBoxProps,
} from "react-aria-components";

import { faCheck } from "@fortawesome/pro-solid-svg-icons";
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
    menuCSS,
    menuHeaderCSS,
    menuItemCSS,
    menuItemDescriptionCSS,
    menuItemNameCSS,
} from "../_css/menu.css";
import { Icon } from "../icon";
import { Section } from "../section";

type SingleListBoxItem<TItemId extends string = string> = {
    children?: never;
    colorOverlay?: ColorOverlay;
    description?: string;
    href?: string;
    id: TItemId;
    name: string;
    slotLeft?: ReactNode;
    // tags?: Array<string>;
    type?: never;
};

export type IterableListBoxItem<TItemId extends string = string> =
    | {
          children: Array<SingleListBoxItem<TItemId>>;
          colorOverlay?: never;
          href?: never;
          id: string;
          name?: string;
          slotLeft?: never;
          //   tags?: never;
          type?: never;
      }
    | SingleListBoxItem<TItemId>;

function ListBoxItem<TItemId extends string = string>({
    value,
    ...props
}: ReactAriaListBoxItemProps<SingleListBoxItem<TItemId>>) {
    return (
        <ReactAriaListBoxItem
            className={menuItemCSS({
                colorOverlay: value?.colorOverlay,
            })}
            href={value?.href}
            {...props}
        >
            {({ isSelected }) => (
                <>
                    {value?.slotLeft}
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
                    {isSelected ? (
                        <Icon
                            color="text_low_contrast"
                            icon={faCheck}
                            marginLeft="auto"
                            marginRight="space_1"
                        />
                    ) : null}
                </>
            )}
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
            className={menuCSS}
            ref={ref}
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
                                    textValue={i.name}
                                    value={i}
                                />
                            )}
                        </ReactAriaCollection>
                    </Section>
                ) : (
                    <ListBoxItem
                        textValue={item.name}
                        value={item}
                    />
                );
            }}
        </ReactAriaListBox>
    );
}

export const ListBox = forwardRef(BaseListBox);
