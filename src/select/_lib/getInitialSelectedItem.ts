import { isFlatSelectItems } from "./isFlatSelectItems";
import { isGroupedSelectItems } from "./isGroupedSelectItems";
import { isNotSeparator } from "./isNotSeparator";

import type {
	FlatSelectItems,
	GroupedSelectItems,
	SelectItemShape,
} from "../types";

export function getInitialSelectedItem<
	TValue extends string = string,
	TItemData extends Record<string, unknown> = Record<string, unknown>,
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
}): SelectItemShape<TValue, TItemData> | undefined | null {
	if (initialSelectedItem) {
		return initialSelectedItem;
	}

	if (isFlatSelectItems(items)) {
		return items.find((item) => {
			return isNotSeparator<TValue, TItemData>(item) && item.isSelected;
		}) as SelectItemShape<TValue, TItemData>;
	}

	if (isGroupedSelectItems(items)) {
		return items.reduce(
			(
				prevSelectedItem:
					| SelectItemShape<TValue, TItemData>
					| undefined,
				group,
			) => {
				if (prevSelectedItem) {
					return prevSelectedItem;
				}

				return group.items.find((item) => {
					return (
						isNotSeparator<TValue, TItemData>(item) &&
						item.isSelected
					);
				}) as SelectItemShape<TValue, TItemData>;
			},
			undefined,
		);
	}

	return undefined;
}
