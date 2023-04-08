import type { DropdownItem } from "../types";
import { filterDownshiftItemsRemoveInvalid } from "./filterDownshiftItemsRemoveInvalid";

interface DownshiftProviderMultiProps {
  items: Array<DropdownItem>;
  controlledSelectedItems?: Array<DropdownItem | null | undefined>;
  initialValue?: Array<DropdownItem>;
  isControlled: boolean;
}

export function initializeMultipleSelectedItems({
  items,
  controlledSelectedItems,
  initialValue,
  isControlled,
}: DownshiftProviderMultiProps) {
  if (isControlled) {
    return filterDownshiftItemsRemoveInvalid({
      items,
      itemsToFilter: controlledSelectedItems,
    });
  }
  return filterDownshiftItemsRemoveInvalid({
    items,
    itemsToFilter: initialValue,
  });
}
