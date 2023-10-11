import { isFlatSelectItems } from "./isFlatSelectItems";
import { isGroupedSelectItems } from "./isGroupedSelectItems";

import type {
    FlatSelectItems,
    GroupedSelectItems,
    SelectItemShape,
} from "./types";

export function getInitialSelectedItem<
    TValue extends string = string,
    TItemData extends Record<string, unknown> = Record<string, unknown>
>({
    initialSelectedItem,
    items,
}: {
    /**
     * A default selected item passed form the parent component
     */
    initialSelectedItem?: SelectItemShape<TValue, TItemData> | undefined | null;
    /**
     * An array of dropdown items
     */
    items:
        | FlatSelectItems<TValue, TItemData>
        | GroupedSelectItems<TValue, TItemData>
        | undefined;
}) {
    if (initialSelectedItem) {
        return initialSelectedItem;
    }

    if (isFlatSelectItems(items)) {
        return items.find((item) => {
            return item.isSelected;
        });
    }

    if (isGroupedSelectItems(items)) {
        return items.reduce(
            (
                prevSelectedItem:
                    | SelectItemShape<TValue, TItemData>
                    | undefined,
                group
            ) => {
                if (prevSelectedItem) {
                    return prevSelectedItem;
                }

                return group.items.find((item) => {
                    return item.isSelected;
                });
            },
            undefined
        );
    }

    return undefined;
}
