import { isFlatSelectItems } from "./isFlatSelectItems";

import type {
    FlatSelectItems,
    GroupedSelectItems,
    SelectItemShape,
} from "./types";

export function flattenSelectItems<
    TValue extends string = string,
    TItemData extends Record<string, unknown> = Record<string, unknown>
>(
    items:
        | FlatSelectItems<TValue, TItemData>
        | GroupedSelectItems<TValue, TItemData>
        | undefined
) {
    if (!items) {
        return [];
    }

    if (isFlatSelectItems(items)) {
        return items;
    }

    return items.reduce(
        (prev: Array<SelectItemShape<TValue, TItemData>>, acc) => {
            return [...prev, ...acc.items];
        },
        []
    );
}
