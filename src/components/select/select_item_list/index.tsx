import { forwardRef } from "react";

import { arrayHasLength } from "../../../lib/array_has_length";
import { Box } from "../../box";
import { SelectItem } from "../select_item";
import { getSelectItemListStyles, selectItemListInner } from "./styles.css";

import type { WithSize } from "../../../common-types";
import type { SelectItemShape } from "../types";
import type {
    UseComboboxPropGetters,
    UseMultipleSelectionGetSelectedItemPropsOptions,
    UseSelectPropGetters,
} from "downshift";
import type { CSSProperties } from "react";

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
