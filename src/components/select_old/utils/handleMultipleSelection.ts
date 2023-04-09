import type { DropdownItemShape } from "../types";

interface HandleMultipleSelectionArgs {
  newSelectedItem: DropdownItemShape | null | undefined;
  isItemSelected: boolean;
  selectedItems: Array<DropdownItemShape | null | undefined> | undefined;
}

export function handleMultipleSelection({
  isItemSelected,
  newSelectedItem,
  selectedItems,
}: HandleMultipleSelectionArgs) {
  if (selectedItems && selectedItems.length > 0) {
    if (isItemSelected) {
      return selectedItems?.filter((selectedItem) => {
        return selectedItem?.value !== newSelectedItem?.value;
      });
    }

    return [...selectedItems, newSelectedItem];
  }

  return [newSelectedItem];
}
