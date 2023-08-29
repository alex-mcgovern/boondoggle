import type { SelectItemShape } from "./types";

type GetDefaultHighlightedIndexArgs = {
  /** The initial highlighted item */
  initialHighlightedItem?: SelectItemShape;
  /** An array of dropdown items */
  items: Array<SelectItemShape>;
  /** The selected item */
  selectedItem?: SelectItemShape | null;
};

/**
 * Util to get the default highlighted index for a dropdown
 */
export const getDefaultHighlightedIndex = ({
  initialHighlightedItem,
  items,
  selectedItem,
}: GetDefaultHighlightedIndexArgs) => {
  if (selectedItem) {
    return items.findIndex((item) => {
      return item.label === selectedItem?.label;
    });
  }

  return items.findIndex((item) => {
    return item.label === initialHighlightedItem?.label;
  });
};
