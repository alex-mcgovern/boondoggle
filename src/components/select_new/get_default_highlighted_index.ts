import type { DropdownItemShape } from "~types/global.types";

interface getDefaultHighlightedIndexArgs {
  items: Array<DropdownItemShape>;
  initialHighlightedItem?: DropdownItemShape;
}

export const getDefaultHighlightedIndex = ({
  items,
  initialHighlightedItem,
}: getDefaultHighlightedIndexArgs) => {
  return items.findIndex((item) => {
    return item.label === initialHighlightedItem?.label;
  });
};
