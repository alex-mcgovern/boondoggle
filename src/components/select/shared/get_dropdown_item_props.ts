import type { DropdownItemShape } from "../select.types";
import type { DropdownMenuProps } from "./dropdown_menu/dropdown_menu.comp";

/**
 * Util function to get props for individual dropdown items * May conditionally call `getItemProps` or `getSelectedItemProps` depending on * whether `isMulti` is true, and whether the item is selected or not
 */
type GetDropdownItemPropsArgs = Pick<
  DropdownMenuProps,
  "getItemProps" | "getSelectedItemProps" | "removeSelectedItem"
> & {
  item: DropdownItemShape;
  isItemSelected?: boolean;
  [key: string]: unknown;
};

export const getDropdownItemProps = ({
  isItemSelected,
  getItemProps,
  getSelectedItemProps,
  removeSelectedItem,
  item,
  isMulti,
  ...rest
}: GetDropdownItemPropsArgs) => {
  if (isMulti && getSelectedItemProps) {
    return isItemSelected
      ? {
          ...getItemProps({
            item,
            ...rest,
          }),
          ...getSelectedItemProps({
            selectedItem: item,
            onClick: (e) => {
              e.stopPropagation();
              if (removeSelectedItem) {
                removeSelectedItem(item);
              }
            },
          }),
        }
      : getItemProps({ item, ...rest });
  }

  return getItemProps({ item });
};
