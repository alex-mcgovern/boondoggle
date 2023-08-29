import { useState } from "react";

import type { SelectItemShape } from "./types";

type UseSelectedItemArgs = {
  /** The initial selected item. */
  initialSelectedItem: SelectItemShape | undefined;
  /** The items to choose from. */
  items: Array<SelectItemShape>;
};

/**
 * Returns the current selected item and a setter function to update it.
 */
export function useSelectedItem({
  initialSelectedItem,
  items,
}: UseSelectedItemArgs) {
  return useState(
    initialSelectedItem ||
      items.find((item) => {
        return item.isSelected;
      })
  );
}
