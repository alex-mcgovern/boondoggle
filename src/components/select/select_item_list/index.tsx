import clsx from "clsx";
import { forwardRef } from "react";

import { arrayHasLength } from "../../../lib/array_has_length";
import { Box } from "../../box";
import { SlotWrapper } from "../../slot_wrapper";
import {
    getSelectItemListStyles,
    getSelectItemStyles,
    isHighlightedStyle,
    selectItemListInner,
} from "./styles.css";

import type { ElementSizeEnum } from "../../../../dist";
import type { WithSize } from "../../../common-types";
import type { ColorOverlay } from "../../../styles/color_palette.css";
import type { BoxProps } from "../../box";
import type { SelectItemShape } from "../types";
import type {
    UseComboboxPropGetters,
    UseMultipleSelectionGetSelectedItemPropsOptions,
    UseSelectPropGetters,
} from "downshift";
import type { CSSProperties, ReactNode, Ref } from "react";

export type SelectItemProps = BoxProps & {
    /**
     * An optional color overlay to apply to the item.
     */
    colorOverlay: ColorOverlay | undefined;

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
     * Consistent size option shared across multiple components.
     */
    size?: ElementSizeEnum;

    /**
     * React node(s) rendered on the left-hand side.
     */
    slotLeft?: [ReactNode?, ReactNode?, ReactNode?];

    /**
     * The value of the item.
     */
    value: string;
};

export const SelectItem = forwardRef(
    (
        {
            as = "li",
            colorOverlay,
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
                size={size}
                slotLeft={slotLeft}
                {...rest}
                ref={ref}
            >
                <Box flexShrink="0">{label}</Box>
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
export type SelectItemListProps = WithSize & {
    /**
     * Function provided by Downshift to check whether an item is selected
     */
    getIsItemSelected: ((item: SelectItemShape) => boolean) | undefined;

    /**
     * Function provided by Downshift to get props for an individual item.
     */
    getItemProps:
        | UseComboboxPropGetters<SelectItemShape>["getItemProps"]
        | UseSelectPropGetters<SelectItemShape>["getItemProps"];

    /**
     * Function provided by Downshift to get props for the outer menu element.
     */
    getMenuProps:
        | UseComboboxPropGetters<SelectItemShape>["getMenuProps"]
        | UseSelectPropGetters<SelectItemShape>["getMenuProps"];

    /**
     * Function provided by Downshift to get props for the currently selected item.
     */
    getSelectedItemProps:
        | ((options: UseMultipleSelectionGetSelectedItemPropsOptions<SelectItemShape>) => {
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
    items: Array<SelectItemShape>;

    /**
     * The style to apply to the outer menu element. Used by floating-ui to position the menu.
     */
    style: CSSProperties;
};

export const SelectItemList = forwardRef<HTMLDivElement, SelectItemListProps>(
    (
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
        },
        ref
    ) => {
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
                                isSelected: initIsSelected,
                                label,
                                onClick,
                                slotLeft,
                                value,
                                ...otherItemProps
                            } = item;

                            const isHighlighted = highlightedIndex === index;

                            const isSelected = initIsSelected || getIsItemSelected?.(item);

                            return (
                                <SelectItem
                                    as={as}
                                    colorOverlay={colorOverlay}
                                    isMulti={isMulti}
                                    size={size}
                                    {...otherItemProps}
                                    {...getItemProps({
                                        isHighlighted,
                                        isSelected,
                                        item,
                                        key: `${item.label}-${item.value}`,
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
                            disabled
                            label="No results"
                            size={size}
                            value=""
                        />
                    )}
                </Box>
            </Box>
        );
    }
);
