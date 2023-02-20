// Notes: https://making.close.com/posts/highlights-from-a-complex-downshift-js-refactor/
import type { ReactNode } from "react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useCombobox } from "downshift";
import type { DropdownItem } from "../types";
import { filterDownshiftAvailableItems } from "../utils/filterDownshiftAvailableItems";
import { DownshiftContext } from "./DownshiftContext";

interface DownshiftProviderCreatableProps {
  /** Wrapped components, which may access downshift state, or prop getters from context */
  children: ReactNode;
  /** Initial value for text input */
  initialInputValue?: string;
  /** Item to be selected when initially mounts */
  initialValue?: DropdownItem;
  /** All items for dropdown menu */
  items: Array<DropdownItem>;
  /** Callback when an item is selected, returns a single item */
  onSelectItem?(item: DropdownItem | null | undefined): void;
  /** Callback when selected items changes, returns an array of items  */
  onValueChange?(...items: Array<unknown>): unknown;
}

export function DownshiftProviderCreatable({
  items,
  initialValue,
  initialInputValue = "",
  onValueChange,
  onSelectItem,
  children,
}: DownshiftProviderCreatableProps) {
  const [inputValue, setInputValue] = useState<string>(initialInputValue);

  /**
   * Filter all available items based on the combobox input value
   */
  const filteredItems: Array<DropdownItem | undefined> = useMemo(() => {
    const tempItems = filterDownshiftAvailableItems({
      items,
      inputValue,
    });

    if (Array.isArray(tempItems) && tempItems.length > 0) {
      return tempItems;
    }
    if (inputValue) {
      return [{ label: `+ Create ${inputValue}`, value: inputValue }];
    }

    return [];
  }, [inputValue, items]);

  /**
   * Initialise Downshift `useCombobox` hook
   */
  const {
    getInputProps,
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
    selectedItem,
    selectItem,
    toggleMenu,
  } = useCombobox({
    inputValue,
    items: filteredItems,
    initialInputValue,
    initialSelectedItem: initialValue,
    stateReducer(_, actionAndChanges) {
      const { changes, type } = actionAndChanges;

      switch (type) {
        /**
         * Prevent Downshift opening menu on input focus, which was
         * fighting `toggleMenu` attached to input's 'onClick' handler,
         * causing flickering.
         *
         * Accepted as bug by maintainers, tracking here: https://github.com/downshift-js/downshift/issues/1439
         */
        case useCombobox.stateChangeTypes.InputFocus:
          return { ...changes, isOpen: false };

        default:
          return changes;
      }
    },
    onStateChange({
      inputValue: newInputValue,
      type,
      selectedItem: newSelectedItem,
    }) {
      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          if (newSelectedItem) {
            selectItem(newSelectedItem);

            setInputValue("");

            if (onSelectItem) {
              onSelectItem(newSelectedItem);
            }
          }
          break;

        case useCombobox.stateChangeTypes.InputChange:
          if (newInputValue !== undefined) {
            setInputValue(newInputValue);
          }

          break;
        default:
          break;
      }
    },
  });

  /**
   * Util function to check if a given item is selected. Passed via
   * context to dropdown menu items.
   */
  const getIsDropdownItemSelected = useCallback(
    (item: DropdownItem) => {
      return selectedItem?.value === item?.value;
    },
    [selectedItem?.value]
  );

  /**
   * Call optional callback when selected items changes
   */
  useEffect(() => {
    if (onValueChange) {
      onValueChange(selectedItem);
    }
  }, [onValueChange, selectedItem]);

  /**
   * Context provider value
   */
  const providedValue = useMemo(() => {
    return {
      getDropdownProps: () => {},
      getInputProps,
      getIsDropdownItemSelected,
      getItemProps,
      getMenuProps,
      getSelectedItemProps: () => {},
      getToggleButtonProps,
      highlightedIndex,
      isOpen,
      items: filteredItems,
      toggleMenu,
      selectedItem,
      selectedItems: undefined,
    };
  }, [
    getInputProps,
    getIsDropdownItemSelected,
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
    filteredItems,
    toggleMenu,
    selectedItem,
  ]);

  return (
    <DownshiftContext.Provider value={providedValue}>
      {children}
    </DownshiftContext.Provider>
  );
}
