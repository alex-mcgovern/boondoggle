import { arrayHasLength } from "../../lib/array_has_length";
import { isTruthy } from "../../lib/is_truthy";
import { isFlatSelectItems } from "./isFlatSelectItems";
import { isGroupedSelectItems } from "./isGroupedSelectItems";

import type { FlatSelectItems, GroupedSelectItems } from "./types";

/**
 * Removes items not matching `inputValue` from `items`
 */
export function filterSelectItems<
    TValue extends string = string,
    TItemData extends Record<string, unknown> = Record<string, unknown>
>({
    inputValue,
    items,
}: {
    /**
     * Value of controlled combobox input
     */
    inputValue?: string;

    /**
     * An array of dropdown items
     */
    items:
        | FlatSelectItems<TValue, TItemData>
        | GroupedSelectItems<TValue, TItemData>
        | undefined;
}):
    | FlatSelectItems<TValue, TItemData>
    | GroupedSelectItems<TValue, TItemData>
    | undefined {
    if (!inputValue) {
        return items;
    }

    if (isFlatSelectItems(items)) {
        items.filter((item) => {
            return (
                item.label.toLowerCase().includes(inputValue.toLowerCase()) ||
                item.value.toLowerCase().includes(inputValue.toLowerCase()) ||
                item.tags?.some((tag) => {
                    return tag.toLowerCase().includes(inputValue.toLowerCase());
                })
            );
        });
    }

    if (isGroupedSelectItems(items)) {
        return items
            .map((group) => {
                const filteredWithinGroup = group.items.filter((item) => {
                    return (
                        item.label
                            .toLowerCase()
                            .includes(inputValue.toLowerCase()) ||
                        item.value
                            .toLowerCase()
                            .includes(inputValue.toLowerCase()) ||
                        item.tags?.some((tag) => {
                            return tag
                                .toLowerCase()
                                .includes(inputValue.toLowerCase());
                        })
                    );
                });

                if (!arrayHasLength(filteredWithinGroup)) {
                    return null;
                }

                return {
                    ...group,
                    items: filteredWithinGroup,
                };
            })
            .filter(isTruthy);
    }

    return items;
}
