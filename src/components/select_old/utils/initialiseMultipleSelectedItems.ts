import { filterDownshiftItemsRemoveInvalid } from "./filterDownshiftItemsRemoveInvalid";

import type { DropdownItemShape } from "../types";

interface DownshiftProviderMultiProps {
  items: Array<DropdownItemShape>;
  controlledSelectedItems?: Array<DropdownItemShape | null | undefined>;
  initialValue?: Array<DropdownItemShape>;
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
