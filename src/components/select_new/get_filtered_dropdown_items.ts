import type { DropdownItemShape } from "~types/global.types";

export interface GetFilteredDropdownItemsArgs {
  /** An array of dropdown items */
  items: Array<DropdownItemShape>;
  /** Value of controlled combobox input */
  inputValue?: string;
}

/** Removes items not matching `inputValue` from `items` */
export function getFilteredDropdownItems({
  items,
  inputValue,
}: GetFilteredDropdownItemsArgs) {
  if (!inputValue) return items;

  /** Filter out items that don't match the `inputValue` */
  return items.filter((item) => {
    return item.label.toLowerCase().includes(inputValue.toLowerCase());
  });
}
