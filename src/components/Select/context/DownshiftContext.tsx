// Notes: https://making.close.com/posts/highlights-from-a-complex-downshift-js-refactor/
import { createContext } from "react";
import type {
  UseComboboxActions,
  UseComboboxPropGetters,
  UseMultipleSelectionPropGetters,
} from "downshift";
import type { DropdownItem } from "../types";

export interface DownshiftContextProvided {
  getDropdownProps: UseMultipleSelectionPropGetters<DropdownItem>["getDropdownProps"];
  getInputProps: UseComboboxPropGetters<DropdownItem>["getInputProps"];
  getIsDropdownItemSelected: (item: DropdownItem) => boolean;
  getItemProps: UseComboboxPropGetters<DropdownItem>["getItemProps"];
  getSelectedItemProps: UseMultipleSelectionPropGetters<DropdownItem>["getSelectedItemProps"];
  getMenuProps: UseComboboxPropGetters<DropdownItem>["getMenuProps"];
  getToggleButtonProps: UseComboboxPropGetters<DropdownItem>["getToggleButtonProps"];
  highlightedIndex: number | undefined;
  isOpen: boolean;
  items: Array<DropdownItem | undefined>;
  selectedItem: DropdownItem | null | undefined;
  selectedItems: (DropdownItem | null | undefined)[] | undefined;
  toggleMenu: UseComboboxActions<DropdownItem>["toggleMenu"];
}

export const DownshiftContext = createContext<DownshiftContextProvided>({
  getDropdownProps: () => {},
  getInputProps: () => {},
  getIsDropdownItemSelected: () => {
    return false;
  },
  getItemProps: () => {},
  getMenuProps: () => {},
  toggleMenu: () => {},
  getSelectedItemProps: () => {},
  getToggleButtonProps: () => {},
  highlightedIndex: undefined,
  isOpen: false,
  items: [],
  selectedItem: null,
  selectedItems: [],
});
