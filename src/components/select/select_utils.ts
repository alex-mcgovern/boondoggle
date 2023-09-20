import { useCombobox } from "downshift";

import type { SelectItemShape } from "./types";
import type {
    UseComboboxProps,
    UseComboboxState,
    UseComboboxStateChangeOptions,
    UseMultipleSelectionProps,
} from "downshift";

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
    selectedItems?: UseMultipleSelectionProps<SelectItemShape<TValue>>["selectedItems"];
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

/**
 * React state reducer to determine the currently selected item.
 * Maintains the state of the corresponding `Select*` component,
 * is passed to downshift as the `stateReducer` prop.
 * @see https://www.downshift-js.com/use-combobox/#state-reducer
 */
export function downshiftStateReducer<TValue extends string = string>(
    state: UseComboboxState<SelectItemShape<TValue>>,
    actionAndChanges: UseComboboxStateChangeOptions<SelectItemShape<TValue>>,
    { isMulti }: { isMulti?: boolean }
) {
    const { changes, type } = actionAndChanges;

    switch (type) {
        /**
         * Keep the menu open in multi-select mode
         */
        case useCombobox.stateChangeTypes.InputBlur:
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
            return {
                ...changes,
                ...(changes.selectedItem && {
                    highlightedIndex: state.highlightedIndex,
                    isOpen: isMulti,
                }),
            };

        default:
            return changes;
    }
}
