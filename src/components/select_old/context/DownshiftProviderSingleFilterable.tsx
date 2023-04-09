// Notes: https://making.close.com/posts/highlights-from-a-complex-downshift-js-refactor/
import { useCombobox } from "downshift";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import { filterDownshiftAvailableItems } from "../utils/filterDownshiftAvailableItems";
import { DownshiftContext } from "./DownshiftContext";

import type { DropdownItemShape } from "../types";
import type { ReactNode } from "react";

interface DownshiftProviderSingleFilterableProps {
  /** Wrapped components, which may access downshift state, or prop getters from context */
  children: ReactNode;
  /** Initial value for text input */
  initialInputValue?: string;
  /** Item to be selected when initially mounts */
  initialValue?: DropdownItemShape;
  /** All items for dropdown menu */
  items: Array<DropdownItemShape>;
  /** Callback when an item is selected, returns a single item */
  onSelectItem?(item: DropdownItemShape | null | undefined): void;
  /** Callback when selected items changes, returns an array of items  */
  onValueChange?(...items: Array<unknown>): unknown;
}

export function DownshiftProviderSingleFilterable({
  items,
  initialValue,
  initialInputValue = "",
  onValueChange,
  onSelectItem,
  children,
}: DownshiftProviderSingleFilterableProps) {
  /**
   * State to manage combobox text input value
   */
  const [inputValue, setInputValue] = useState<string>(initialInputValue);

  /**
   * State to manage currently selected items
   */
  const [selectedItem, setSelectedItem] = useState<
    DropdownItemShape | null | undefined
  >(initialValue);

  /**
   * Util function to check if a given item is selected. Passed via
   * context to dropdown menu items.
   */
  const getIsDropdownItemSelected = useCallback(
    (item: DropdownItemShape) => {
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
   * Filter all available items based on the combobox input value
   */
  const filteredItems = useMemo(() => {
    return filterDownshiftAvailableItems({
      items,
      inputValue,
    });
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
    toggleMenu,
  } = useCombobox({
    inputValue,
    items: filteredItems,
    initialInputValue,
    selectedItem,
    stateReducer(_, actionAndChanges) {
      const { changes, type } = actionAndChanges;

      switch (type) {
        /**
         * Prevent Downshift opening menu on input focus, which was
         * fighting `toggleMenu` attached to input's 'onClick' handler,
         * causing flickering.
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
            /** Update select state */
            setSelectedItem(newSelectedItem);

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
