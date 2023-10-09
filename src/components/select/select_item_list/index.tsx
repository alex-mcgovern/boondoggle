import clsx from "clsx";
import * as React from "react";

import { arrayHasLength } from "../../../lib/array_has_length";
import { Box } from "../../box";
import { SlotWrapper } from "../../slot_wrapper";
import {
    getSelectItemListStyles,
    getSelectItemStyles,
    isHighlightedStyle,
    selectItemListInner,
} from "./styles.css";

import type {
    WithColorOverlay,
    WithSize,
    WithSlots,
} from "../../../common-types";
import type { BoxProps } from "../../box";
import type { SelectItemShape } from "../types";
import type {
    UseComboboxPropGetters,
    UseMultipleSelectionGetSelectedItemPropsOptions,
    UseSelectPropGetters,
} from "downshift";
import type { CSSProperties, ForwardedRef, Ref } from "react";

export type SelectItemProps = BoxProps &
    WithColorOverlay &
    WithSize &
    Omit<WithSlots, "slotRight"> & {
        /**
         * The description for the item.
         */
        description: string | undefined;

        /**
         * Whether the item is highlighted.
         */
        isHighlighted: boolean | undefined;

        /**
         * Whether the parent component allows multiple selection or not.
         */
        isMulti: boolean | undefined;

        /**
         * Whether the item is selected.
         */
        isSelected?: boolean;

        /**
         * The label to display for the item.
         */
        label: string;

        /**
         * The value of the item.
         */
        value: string;
    };

export const SelectItem = React.forwardRef(
    (
        {
            as = "li",
            colorOverlay,
            description,
            isHighlighted,
            isMulti,
            isSelected,
            label,
            size,
            slotLeft,
            ...rest
        }: SelectItemProps,
        ref: Ref<HTMLDivElement>
    ) => {
        return (
            <SlotWrapper
                as={as}
                className={clsx(
                    getSelectItemStyles({
                        colorOverlay,
                        size,
                    }),
                    {
                        [isHighlightedStyle]: isHighlighted,
                    }
                )}
                id={label}
                ref={ref}
                size={size}
                slotLeft={slotLeft}
                {...rest}
            >
                <Box flexShrink="0">
                    <Box
                        color="text_high_contrast"
                        fontStyle="bodyMd"
                    >
                        {label}
                    </Box>
                    <Box
                        color="text_low_contrast"
                        fontStyle="bodySm"
                    >
                        {description}
                    </Box>
                </Box>
                {isMulti && (
                    <Box
                        as="input"
                        checked={isSelected}
                        marginLeft="auto"
                        readOnly
                        tabIndex={-1}
                        type="checkbox"
                    />
                )}
            </SlotWrapper>
        );
    }
);

/**
 * Renders a dropdown menu for use with `SelectSingle` or `SelectMulti`
 */
export type SelectItemListProps<
    TValue extends string = string,
    TItemData extends Record<string, unknown> = Record<string, unknown>
> = WithSize & {
    /**
     * Function provided by Downshift to check whether an item is selected
     */
    getIsItemSelected:
        | ((item: SelectItemShape<TValue, TItemData>) => boolean)
        | undefined;

    /**
     * Function provided by Downshift to get props for an individual item.
     */
    getItemProps:
        | UseComboboxPropGetters<
              SelectItemShape<TValue, TItemData>
          >["getItemProps"]
        | UseSelectPropGetters<
              SelectItemShape<TValue, TItemData>
          >["getItemProps"];

    /**
     * Function provided by Downshift to get props for the outer menu element.
     */
    getMenuProps:
        | UseComboboxPropGetters<
              SelectItemShape<TValue, TItemData>
          >["getMenuProps"]
        | UseSelectPropGetters<
              SelectItemShape<TValue, TItemData>
          >["getMenuProps"];

    /**
     * Function provided by Downshift to get props for the currently selected item.
     */
    getSelectedItemProps:
        | ((
              options: UseMultipleSelectionGetSelectedItemPropsOptions<
                  SelectItemShape<TValue, TItemData>
              >
          ) => {
              [key: string]: unknown;
          })
        | undefined;

    /**
     * The index of the currently highlighted item.
     */
    highlightedIndex: number | undefined;

    /**
     * Whether the parent component allows multiple selection or not.
     */
    isMulti: boolean | undefined;

    /**
     * Whether the menu is open.
     */
    isOpen: boolean | undefined;

    /**
     * The items to render in the list.
     */
    items: Array<SelectItemShape<TValue, TItemData>>;

    /**
     * The style to apply to the outer menu element. Used by floating-ui to position the menu.
     */
    style: CSSProperties;
};

/**
 * Renders a dropdown menu for use with `SelectSingle` or `SelectMulti`
 * @note This is a base component that should be wrapped with `ForwardRef`.
 */
function SelectItemListBase<
    TValue extends string = string,
    TItemData extends Record<string, unknown> = Record<string, unknown>
>(
    {
        getIsItemSelected,
        getItemProps,
        getMenuProps,
        getSelectedItemProps,
        highlightedIndex,
        isMulti,
        isOpen,
        items,
        size = "md",
        ...rest
    }: SelectItemListProps<TValue, TItemData>,
    ref: ForwardedRef<HTMLDivElement>
) {
    return (
        <Box
            {...getMenuProps?.({
                className: getSelectItemListStyles({ isOpen }),
                ref,
                ...rest,
            })}
        >
            <Box className={selectItemListInner}>
                {arrayHasLength(items) &&
                    items.map((item, index) => {
                        if (!item.label) {
                            return null;
                        }

                        const {
                            as,
                            colorOverlay,
                            description,
                            isSelected: initIsSelected,
                            label,
                            onClick,
                            slotLeft,
                            value,
                            ...otherItemProps
                        } = item;

                        const isHighlighted = highlightedIndex === index;

                        const isSelected =
                            initIsSelected || getIsItemSelected?.(item);

                        return (
                            <SelectItem
                                as={as}
                                colorOverlay={colorOverlay}
                                description={description}
                                isMulti={isMulti}
                                key={`${item.label}-${item.value}`}
                                size={size}
                                {...otherItemProps}
                                {...getItemProps({
                                    isHighlighted,
                                    isSelected,
                                    item,
                                    label,
                                    onClick,
                                    slotLeft,
                                    value,
                                    ...(isSelected &&
                                        getSelectedItemProps?.({
                                            selectedItem: item,
                                        })),
                                })}
                            />
                        );
                    })}

                {/* Show a fallback list item when there are no items to display */}

                {Array.isArray(items) && items.length === 0 && (
                    <SelectItem
                        as="button"
                        colorOverlay={undefined}
                        description={undefined}
                        disabled
                        isHighlighted={false}
                        isMulti={false}
                        label="No results"
                        size={size}
                        value=""
                    />
                )}
            </Box>
        </Box>
    );
}

export const SelectItemList = React.forwardRef(SelectItemListBase);
