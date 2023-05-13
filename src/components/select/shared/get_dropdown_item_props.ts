import type { DropdownItemShape } from "../select.types";
import type {
  UseComboboxPropGetters,
  UseMultipleSelectionPropGetters,
} from "downshift";

/**
 * Util function to get props for individual dropdown items * May conditionally call `getItemProps` or `getSelectedItemProps` depending on * whether `isMulti` is true, and whether the item is selected or not
 */
type GetDropdownItemPropsArgs = {
  [key: string]: unknown;
  getIsItemSelected: (item: DropdownItemShape) => boolean;
  getItemProps: UseComboboxPropGetters<DropdownItemShape>["getItemProps"];
  getMenuProps: UseComboboxPropGetters<DropdownItemShape>["getMenuProps"];
  getSelectedItemProps: UseMultipleSelectionPropGetters<DropdownItemShape>["getSelectedItemProps"];
  isItemSelected?: boolean;
  item: DropdownItemShape;
};

/**
 * Wraps several props getters from `downshift` to conditionally call `getItemProps`
 * or `getSelectedItemProps` depending on whether `isMulti` is true, and whether the
 * item is selected or not.
 *
 * @note Is typed as returning `any` because the return type of `getItemProps` and
 * `getSelectedItemProps` are both `any` and we don't want to have to cast the return
 * type of this function to `any` every time we use it.
 */

export const getDropdownItemProps = ({
  isItemSelected,
  getItemProps,
  getSelectedItemProps,
  removeSelectedItem,
  item,
  isMulti,
  ...rest
}: GetDropdownItemPropsArgs): any => {
  if (!isMulti || !getSelectedItemProps) {
    return getItemProps({ item, ...rest });
  }

  return isItemSelected
    ? {
        ...getItemProps({
          item,
          ...rest,
        }),
        ...getSelectedItemProps({
          onClick: (e) => {
            e.stopPropagation();
            if (removeSelectedItem) {
              removeSelectedItem(item);
            }
          },
          selectedItem: item,
        }),
      }
    : getItemProps({ item, ...rest });
};
