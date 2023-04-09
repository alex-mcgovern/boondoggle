import type { UseComboboxProps, UseMultipleSelectionProps } from "downshift";
import type { DropdownItemShape } from "~types/global.types";

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
