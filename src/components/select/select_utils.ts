import type { SelectItemShape } from "./types";
import type { UseComboboxProps, UseMultipleSelectionProps } from "downshift";

/**
 * Util function that can be used to determine if an item is selected in a dropdown.
 */
type GetIsItemSelectedArgs<TValue extends string = string> = {
    /**
     * Whether the select is in multi-select mode.
     */
    isMulti?: boolean;

    /**
     * The item to check.
     */
    item: SelectItemShape<TValue> | undefined | null;

    /**
     * The currently selected item.
     */
    selectedItem?: UseComboboxProps<SelectItemShape<TValue>>["selectedItem"];

    /**
     * The currently selected items.
     */
    selectedItems?: UseMultipleSelectionProps<
        SelectItemShape<TValue>
    >["selectedItems"];
};

export function getIsSelected<TValue extends string = string>({
    isMulti,
    item,
    selectedItem,
    selectedItems: prevSelectedItems,
}: GetIsItemSelectedArgs<TValue>): boolean {
    if (!isMulti && selectedItem) {
        return selectedItem?.value.toLowerCase() === item?.value.toLowerCase();
    }

    if (isMulti) {
        return (
            Array.isArray(prevSelectedItems) &&
            prevSelectedItems.some((prevSelectedItem) => {
                return prevSelectedItem?.value === item?.value;
            })
        );
    }

    return false;
}
