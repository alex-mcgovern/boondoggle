import type { SelectItemShape } from "./types";

type GetInitialItemArgs = {
  /** The item that should be selected by default. */
  initialSelectedItem: SelectItemShape | undefined;
  /** The list of items to choose from. */
  items: Array<SelectItemShape>;
};

/**
 * Returns the initial item to be selected.
 */
export function getInitialItem({
  initialSelectedItem,
  items,
}: GetInitialItemArgs) {
  return (
    initialSelectedItem ||
    items.find((item) => {
      return item.isSelected;
    })
  );
}
