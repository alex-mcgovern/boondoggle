// Notes: https://making.close.com/posts/highlights-from-a-complex-downshift-js-refactor/
import type { ReactNode } from "react";
import React, { useCallback, useMemo } from "react";
import type { UseSelectStateChange } from "downshift";
import { useSelect } from "downshift";
import type { DropdownItem } from "../types";
import { DownshiftContext } from "./DownshiftContext";

interface DownshiftProviderSingleProps {
  items: Array<DropdownItem>;
  initialValue?: DropdownItem;
  onValueChange?(selectedItem: DropdownItem): unknown;
  children: ReactNode;
}

export function DownshiftProviderSingle({
  items,
  initialValue,
  onValueChange,
  children,
}: DownshiftProviderSingleProps) {
  // fire callback
  const handleSelectedItemsChange = ({
    selectedItem,
  }: UseSelectStateChange<DropdownItem>): void => {
    if (selectedItem?.value && onValueChange) {
      onValueChange(selectedItem);
    }
  };

  const {
    isOpen,
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
    selectedItem,
    highlightedIndex,
    selectItem,
    toggleMenu,
  } = useSelect({
    items,
    initialSelectedItem: initialValue,
    onSelectedItemChange: handleSelectedItemsChange,
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

  const providedValue = useMemo(() => {
    return {
      getDropdownProps: () => {},
      getInputProps: () => {},
      getIsDropdownItemSelected,
      getItemProps,
      getMenuProps,
      getSelectedItemProps: () => {},
      getToggleButtonProps,
      highlightedIndex,
      isOpen,
      items,
      removeSelectedItem: () => {},
      selectedItem,
      selectedItems: [],
      selectItem,
      toggleMenu,
    };
  }, [
    getIsDropdownItemSelected,
    getItemProps,
    getMenuProps,
    getToggleButtonProps,
    highlightedIndex,
    isOpen,
    items,
    selectedItem,
    selectItem,
    toggleMenu,
  ]);

  return (
    <DownshiftContext.Provider value={providedValue}>
      {children}
    </DownshiftContext.Provider>
  );
}
