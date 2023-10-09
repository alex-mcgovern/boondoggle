import type { SelectItemShape } from "../../types";

type FilterSelectItemsArgs<
    TValue extends string = string,
    TItemData extends Record<string, unknown> = Record<string, unknown>
> = {
    /**
     * Value of controlled combobox input
     */
    inputValue?: string;

    /**
     * An array of dropdown items
     */
    items: Array<SelectItemShape<TValue, TItemData>>;
};

/**
 * Removes items not matching `inputValue` from `items`
 */
export function filterSelectItems<
    TValue extends string = string,
    TItemData extends Record<string, unknown> = Record<string, unknown>
>({ inputValue, items }: FilterSelectItemsArgs<TValue, TItemData>) {
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
