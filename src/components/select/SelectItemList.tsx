import * as React from "react";

import { arrayHasLength } from "../../lib/array_has_length";
import { SelectItem } from "./SelectItem";
import { SelectItemGroup } from "./SelectItemGroup";
import * as styles from "./SelectItemList.css";
import { isGroupedSelectItems } from "./isGroupedSelectItems";

import type { WithSize } from "../../common-types";
import type {
    FlatSelectItems,
    GroupedSelectItems,
    SelectItemShape,
} from "./types";
import type {
    UseComboboxPropGetters,
    UseMultipleSelectionGetSelectedItemPropsOptions,
    UseSelectPropGetters,
} from "downshift";
import type { CSSProperties, ForwardedRef } from "react";

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
    items:
        | FlatSelectItems<TValue, TItemData>
        | GroupedSelectItems<TValue, TItemData>
        | undefined;

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
    if (isGroupedSelectItems(items)) {
        let index = 0;

        return (
            <div
                {...getMenuProps?.({
                    className: styles.getOuter({ isOpen }),
                    ref,
                    ...rest,
                })}
            >
                <div className={styles.inner}>
                    {items.map((group) => {
                        if (!arrayHasLength(group.items)) {
                            return null;
                        }

                        return (
                            <>
                                <div className={styles.getGroupTitle({ size })}>
                                    {group.title}
                                </div>
                                <>
                                    {group.items.map((item) => {
                                        if (!item.label) {
                                            return null;
                                        }

                                        // Increment the index for each item
                                        // Note that this index is shared across the entire list
                                        index += 1;

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
                                        const isHighlighted =
                                            highlightedIndex === index;
                                        const isSelected =
                                            initIsSelected ||
                                            getIsItemSelected?.(item);
                                        return (
                                            <div>
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
                                                            getSelectedItemProps?.(
                                                                {
                                                                    selectedItem:
                                                                        item,
                                                                }
                                                            )),
                                                    })}
                                                />
                                            </div>
                                        );
                                    })}
                                </>
                            </>
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
                </div>
            </div>
        );
    }

    return (
        <div
            {...getMenuProps?.({
                className: styles.getOuter({ isOpen }),
                ref,
                ...rest,
            })}
        >
            <div className={styles.inner}>
                <SelectItemGroup<TValue, TItemData>
                    getIsItemSelected={getIsItemSelected}
                    getItemProps={getItemProps}
                    getSelectedItemProps={getSelectedItemProps}
                    groupIndex={0}
                    highlightedIndex={highlightedIndex}
                    isMulti={isMulti}
                    items={items}
                />

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
            </div>
        </div>
    );
}

export const SelectItemList = React.forwardRef(SelectItemListBase);
