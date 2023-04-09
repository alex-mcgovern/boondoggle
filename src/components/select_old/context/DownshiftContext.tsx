// Notes: https://making.close.com/posts/highlights-from-a-complex-downshift-js-refactor/
import { createContext } from "react";

import type { DropdownItemShape } from "../types";
import type {
  UseComboboxActions,
  UseComboboxPropGetters,
  UseMultipleSelectionPropGetters,
} from "downshift";

export interface DownshiftContextProvided {
  getDropdownProps: UseMultipleSelectionPropGetters<DropdownItemShape>["getDropdownProps"];
  getInputProps: UseComboboxPropGetters<DropdownItemShape>["getInputProps"];
  getIsDropdownItemSelected: (item: DropdownItemShape) => boolean;
  getItemProps: UseComboboxPropGetters<DropdownItemShape>["getItemProps"];
  getSelectedItemProps: UseMultipleSelectionPropGetters<DropdownItemShape>["getSelectedItemProps"];
  getMenuProps: UseComboboxPropGetters<DropdownItemShape>["getMenuProps"];
  getToggleButtonProps: UseComboboxPropGetters<DropdownItemShape>["getToggleButtonProps"];
  highlightedIndex: number | undefined;
  isOpen: boolean;
  items: Array<DropdownItemShape | undefined>;
  selectedItem: DropdownItemShape | null | undefined;
  selectedItems: (DropdownItemShape | null | undefined)[] | undefined;
  toggleMenu: UseComboboxActions<DropdownItemShape>["toggleMenu"];
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
