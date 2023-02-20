import type { DropdownItem } from "../types";

interface FilterDownshiftItemsRemoveInvalidArgs {
  /** All available DownshiftItems */
  items: Array<DropdownItem | null | undefined>;
  /** Downshift items passed to component from parent as "initially selected" */
  itemsToFilter?: Array<DropdownItem | null | undefined>;
}

/**
 * Ensures a list of items are valid items.
 * Given a partial list of items, and a list of all available items,
 * returns only initial items that exist in the list of all available items.
 */
export function filterDownshiftItemsRemoveInvalid({
  items,
  itemsToFilter,
}: FilterDownshiftItemsRemoveInvalidArgs) {
  if (!itemsToFilter || itemsToFilter.length < 1) return [];

  return itemsToFilter?.filter((initialSelectedItem) => {
    return items.some((item) => {
      return item?.value === initialSelectedItem?.value;
    });
  });
}
