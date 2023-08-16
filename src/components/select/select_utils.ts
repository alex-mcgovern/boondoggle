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
type GetIsItemSelectedArgs = {
  isMulti?: boolean;
  item: SelectItemShape | undefined | null;
  selectedItem?: UseComboboxProps<SelectItemShape>["selectedItem"];
  selectedItems?: UseMultipleSelectionProps<SelectItemShape>["selectedItems"];
};

export const getIsSelected = ({
  isMulti,
  item,
  selectedItem,
  selectedItems: prevSelectedItems,
}: GetIsItemSelectedArgs): boolean => {
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
};

/**
 * Util to filter dropdown items based on `inputValue`
 */
type GetFilteredDropdownItemsArgs = {
  /** Value of controlled combobox input */
  inputValue?: string;
  /** An array of dropdown items */
  items: Array<SelectItemShape>;
};

/** Removes items not matching `inputValue` from `items` */
export function getFilteredDropdownItems({
  inputValue,
  items,
}: GetFilteredDropdownItemsArgs) {
  if (!inputValue) {
    return items;
  }

  /** Filter out items that don't match the `inputValue` */
  return items.filter((item) => {
    return (
      item.label.toLowerCase().includes(inputValue.toLowerCase()) ||
      item.value.toLowerCase().includes(inputValue.toLowerCase())
    );
  });
}

/**
 * Util to get the display value for a dropdown when we are using `useMultipleSelection`
 */
type GetDisplayValueArgs = {
  length?: number;
  originalValue: string | undefined;
};
export const getDisplayValue = ({
  length,
  originalValue,
}: GetDisplayValueArgs) => {
  if (length && length > 0) {
    return `${length} selected`;
  }

  return originalValue;
};

/**
 * Util to get the default highlighted index for a dropdown
 */
type GetDefaultHighlightedIndexArgs = {
  initialHighlightedItem?: SelectItemShape;
  items: Array<SelectItemShape>;
  selectedItem?: SelectItemShape | null;
};
export const getDefaultHighlightedIndex = ({
  initialHighlightedItem,
  items,
  selectedItem,
}: GetDefaultHighlightedIndexArgs) => {
  if (selectedItem) {
    return items.findIndex((item) => {
      return item.label === selectedItem?.label;
    });
  }

  return items.findIndex((item) => {
    return item.label === initialHighlightedItem?.label;
  });
};

/**
 * React state reducer to determine the currently selected item.
 * Maintains the state of the corresponding `Select*` component,
 * is passed to downshift as the `stateReducer` prop.
 * @see https://www.downshift-js.com/use-combobox/#state-reducer
 */
export const downshiftStateReducer = (
  state: UseComboboxState<SelectItemShape>,
  actionAndChanges: UseComboboxStateChangeOptions<SelectItemShape>,
  { isMulti }: { isMulti?: boolean }
) => {
  const { changes, type } = actionAndChanges;

  switch (type) {
    /**
     * Prevent flash of menu on first input click
     * Should be resolved by issue here: https://github.com/downshift-js/downshift/issues/1439
     *
     * ToDo: [Select] Test downshift fix and report back
     */
    case useCombobox.stateChangeTypes.InputFocus:
      return { ...changes, isOpen: false };

    /** Keep the menu open in multi-select mode */
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
};
