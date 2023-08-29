import type { SelectItemShape } from "./types";

type GetFilteredDropdownItemsArgs = {
  /** Value of controlled combobox input */
  inputValue?: string;
  /** An array of dropdown items */
  items: Array<SelectItemShape>;
};

/**
 * Removes items not matching `inputValue` from `items`
 */
export function filterItems({
  inputValue,
  items,
}: GetFilteredDropdownItemsArgs) {
  if (!inputValue) {
    return items;
  }

  return items.filter((item) => {
    return (
      item.label.toLowerCase().includes(inputValue.toLowerCase()) ||
      item.value.toLowerCase().includes(inputValue.toLowerCase())
    );
  });
}
