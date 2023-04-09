import { useCombobox } from "downshift";

import type { DropdownItemShape } from "./select.types";
import type {
  UseComboboxProps,
  UseComboboxState,
  UseComboboxStateChangeOptions,
  UseMultipleSelectionProps,
} from "downshift";

/** -----------------------------------------------------------------------------
 * Util function that can be used to determine if an item is selected in a dropdown.
 * ------------------------------------------------------------------------------- */

export interface GetIsItemSelectedArgs {
  item: DropdownItemShape | undefined | null;
  selectedItems?: UseMultipleSelectionProps<DropdownItemShape>["selectedItems"];
  selectedItem?: UseComboboxProps<DropdownItemShape>["selectedItem"];
  isMulti?: boolean;
}

export const getIsSelected = ({
  item,
  isMulti,
  selectedItems,
  selectedItem,
}: GetIsItemSelectedArgs): boolean => {
  if (!isMulti && selectedItem) {
    return selectedItem?.label.toLowerCase() === item?.label.toLowerCase();
  }

  if (isMulti) {
    return (
      Array.isArray(selectedItems) &&
      selectedItems.some((oneOfSelected) => {
        return oneOfSelected?.value === item?.value;
      })
    );
  }

  return false;
};

/** -----------------------------------------------------------------------------
 * Util to filter dropdown items based on `inputValue`
 * ------------------------------------------------------------------------------- */

export interface GetFilteredDropdownItemsArgs {
  /** An array of dropdown items */
  items: Array<DropdownItemShape>;
  /** Value of controlled combobox input */
  inputValue?: string;
}

/** Removes items not matching `inputValue` from `items` */
export function getFilteredDropdownItems({
  items,
  inputValue,
}: GetFilteredDropdownItemsArgs) {
  if (!inputValue) {
    return items;
  }

  /** Filter out items that don't match the `inputValue` */
  return items.filter((item) => {
    return item.label.toLowerCase().includes(inputValue.toLowerCase());
  });
}

/** -----------------------------------------------------------------------------
 * Util to get the display value for a dropdown when we are using `useMultipleSelection`
 * ------------------------------------------------------------------------------- */

interface GetDisplayValueArgs {
  originalValue: string;
  length?: number;
}

export const getDisplayValue = ({
  originalValue,
  length,
}: GetDisplayValueArgs) => {
  if (length && length > 0) {
    return `${length} selected`;
  }

  return originalValue;
};

/** -----------------------------------------------------------------------------
 * Util to get the default highlighted index for a dropdown
 * ------------------------------------------------------------------------------- */

interface GetDefaultHighlightedIndexArgs {
  items: Array<DropdownItemShape>;
  initialHighlightedItem?: DropdownItemShape;
}

export const getDefaultHighlightedIndex = ({
  items,
  initialHighlightedItem,
}: GetDefaultHighlightedIndexArgs) => {
  return items.findIndex((item) => {
    return item.label === initialHighlightedItem?.label;
  });
};

/** -----------------------------------------------------------------------------
 * React state reducer to determine the currently selected item
 * ------------------------------------------------------------------------------- */

/**
 * Maintains the state of the `Select` component, is passed to downshift as the `stateReducer` prop.
 * @see https://www.downshift-js.com/use-combobox/#state-reducer
 */

export const downshiftStateReducer = (
  state: UseComboboxState<DropdownItemShape>,
  actionAndChanges: UseComboboxStateChangeOptions<DropdownItemShape>,
  isMulti?: boolean
) => {
  const { changes, type } = actionAndChanges;

  switch (type) {
    /**
     * Prevent flash of menu on first input click
     * Should be resolved by issue here: https://github.com/downshift-js/downshift/issues/1439
     * @todo: [Select] Test downshift fix and report back
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
          isOpen: isMulti,
          highlightedIndex: state.highlightedIndex,
        }),
      };

    default:
      return changes;
  }
};
