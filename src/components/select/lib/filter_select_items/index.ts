import type { SelectItemShape } from "../../types";

type FilterSelectItemsArgs = {
    /**
     * Value of controlled combobox input
     */
    inputValue?: string;

    /**
     * An array of dropdown items
     */
    items: Array<SelectItemShape>;
};

/**
 * Removes items not matching `inputValue` from `items`
 */
export function filterSelectItems({ inputValue, items }: FilterSelectItemsArgs) {
    if (!inputValue) {
        return items;
    }

    return items.filter(
        (item) =>
            item.label.toLowerCase().includes(inputValue.toLowerCase()) ||
            item.value.toLowerCase().includes(inputValue.toLowerCase())
    );
}
