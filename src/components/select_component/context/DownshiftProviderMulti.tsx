import type { ReactNode } from "react";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useCombobox, useMultipleSelection } from "downshift";
import type { DropdownItem } from "../types";
import { filterDownshiftAvailableItems } from "../utils/filterDownshiftAvailableItems";
import { filterDownshiftItemsRemoveInvalid } from "../utils/filterDownshiftItemsRemoveInvalid";
import { handleMultipleSelection } from "../utils/handleMultipleSelection";
import { DownshiftContext } from "./DownshiftContext";

interface DownshiftProviderMultiProps {
  /** Wrapped components, which may access downshift state, or prop getters from context */
  children: ReactNode;
  /** Initial value for text input */

  initialInputValue?: string;
  /** Array of items to be selected when initially mounts */
  initialValue?: Array<DropdownItem>;
  /** All items for dropdown menu */
  items: Array<DropdownItem>;
  /** Callback when an item is selected, returns a single item */
  onSelectItem?(item: DropdownItem | null | undefined): void;
  /** Callback when selected items changes, returns an array of items  */
  onValueChange?(...items: Array<unknown>): unknown;
}

export function DownshiftProviderMulti({
  children,
  initialInputValue = "",
  initialValue,
  items,
  onSelectItem,
  onValueChange,
}: DownshiftProviderMultiProps) {
  /**
   * State to manage combobox text input value
   */
  const [inputValue, setInputValue] = useState<string>(initialInputValue);

  /**
   * State to manage currently selected items, initialised with `initialValue`,
   * which is filtered to make sure initial items are actually in list.
   */
  const [selectedItems, setSelectedItems] = useState<
    (DropdownItem | null | undefined)[]
  >(
    filterDownshiftItemsRemoveInvalid({
      items,
      itemsToFilter: initialValue,
    })
  );

  /**
   * Util function to check if a given item is selected. Passed via
   * context to dropdown menu items.
   */
  const getIsDropdownItemSelected = useCallback(
    (item: DropdownItem | null | undefined) => {
      return (
        selectedItems &&
        selectedItems.length > 0 &&
        selectedItems.some((currentItem) => {
          return currentItem && currentItem.value === item?.value;
        })
      );
    },
    [selectedItems]
  );

  /**
   * Call optional callback when selected items changes
   */
  useEffect(() => {
    if (onValueChange) {
      onValueChange(selectedItems);
    }
  }, [onValueChange, selectedItems]);

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
   * Initialise Downshift `useMultipleSelection` hook
   */
  const { getDropdownProps, getSelectedItemProps } =
    useMultipleSelection<DropdownItem>({
      selectedItems: selectedItems as Array<DropdownItem>,
    });

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
    initialInputValue,
    inputValue,
    items: filteredItems,
    selectedItem: null,
    stateReducer(state, actionAndChanges) {
      const { changes, type } = actionAndChanges;

      switch (type) {
        /**
         * Prevent Downshift opening menu on input focus, which was
         * fighting `toggleMenu` attached to input's 'onClick' handler,
         * causing flickering.
         */
        case useCombobox.stateChangeTypes.InputFocus:
          return { ...changes, isOpen: false };

        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
        case useCombobox.stateChangeTypes.InputBlur:
          return {
            ...changes,
            ...(changes.selectedItem && {
              /** Keep menu open on selection */
              isOpen: true,
              /** Keep same item highlighted on selection */
              highlightedIndex: state.highlightedIndex,
            }),
          };
        default:
          return changes;
      }
    },
    onStateChange({
      inputValue: newInputValue,
      type,
      selectedItem: newSelectedItem,
    }) {
      const isItemSelected = getIsDropdownItemSelected(newSelectedItem);

      switch (type) {
        case useCombobox.stateChangeTypes.InputKeyDownEnter:
        case useCombobox.stateChangeTypes.ItemClick:
          if (newSelectedItem) {
            setSelectedItems(
              handleMultipleSelection({
                isItemSelected,
                newSelectedItem,
                selectedItems,
              })
            );

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
      getDropdownProps,
      getInputProps,
      getIsDropdownItemSelected,
      getItemProps,
      getMenuProps,
      getSelectedItemProps,
      getToggleButtonProps,
      highlightedIndex,
      isOpen,
      items: filteredItems,
      selectedItem: null,
      selectedItems,
      toggleMenu,
    };
  }, [
    filteredItems,
    getDropdownProps,
    getInputProps,
    getIsDropdownItemSelected,
    getItemProps,
    getMenuProps,
    getSelectedItemProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
    selectedItems,
    toggleMenu,
  ]);

  return (
    <DownshiftContext.Provider value={providedValue}>
      {children}
    </DownshiftContext.Provider>
  );
}
