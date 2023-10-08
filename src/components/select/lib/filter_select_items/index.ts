import type { SelectItemShape } from "../../types";

type FilterSelectItemsArgs<TValue = string> = {
    /**
     * Value of controlled combobox input
     */
    inputValue?: string;

    /**
     * An array of dropdown items
     */
    items: Array<SelectItemShape<TValue>>;
};

/**
 * Removes items not matching `inputValue` from `items`
 */
export function filterSelectItems<TValue = string>({
    inputValue,
    items,
}: FilterSelectItemsArgs<TValue>) {
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
