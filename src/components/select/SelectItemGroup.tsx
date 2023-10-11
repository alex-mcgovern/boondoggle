import { arrayHasLength } from "../../lib/array_has_length";
import { SelectItem } from "./SelectItem";

import type { WithSize } from "../../common-types";
import type { FlatSelectItems, SelectItemShape } from "./types";
import type {
    UseComboboxPropGetters,
    UseMultipleSelectionGetSelectedItemPropsOptions,
    UseSelectPropGetters,
} from "downshift";

/**
 * Renders a group of items for the select component.
 */
export function SelectItemGroup<
    TValue extends string = string,
    TItemData extends Record<string, unknown> = Record<string, unknown>
>({
    getIsItemSelected,
    getItemProps,
    getSelectedItemProps,
    groupIndex,
    highlightedIndex,
    isMulti,
    items,
    size = "md",
}: WithSize & {
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
     * The index of the group.
     */
    groupIndex: number | undefined;
    /**
     * The index of the currently highlighted item.
     */
    highlightedIndex: number | undefined;
    /**
     * Whether the parent component allows multiple selection or not.
     */
    isMulti: boolean | undefined;
    /**
     * The items to render in the group.
     */
    items: FlatSelectItems<TValue, TItemData> | undefined;
}) {
    if (!arrayHasLength(items)) {
        return null;
    }

    const indexOffset = groupIndex ? groupIndex * items.length : 0;

    return (
        <>
            {items.map((item, index) => {
                if (!item.label) {
                    return null;
                }

                const offsetIndex = index + indexOffset;

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
                const isHighlighted = highlightedIndex === offsetIndex;
                const isSelected = initIsSelected || getIsItemSelected?.(item);
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
                                label: `${offsetIndex} ${label}`,
                                onClick,
                                slotLeft,
                                value,
                                ...(isSelected &&
                                    getSelectedItemProps?.({
                                        selectedItem: item,
                                    })),
                            })}
                        />
                    </div>
                );
            })}
        </>
    );
}
