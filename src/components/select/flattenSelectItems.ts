import { isFlatSelectItems } from "./isFlatSelectItems";

import type {
	FlatSelectItems,
	GroupedSelectItems,
	SelectItemShape,
} from "./types";

export function flattenSelectItems<
	TValue extends string = string,
	TItemData extends Record<string, unknown> = Record<string, unknown>,
>(
	items:
		| FlatSelectItems<TValue, TItemData>
		| GroupedSelectItems<TValue, TItemData>
		| undefined,
): Array<SelectItemShape<TValue, TItemData>> {
	if (!items) {
		return [];
	}

	if (isFlatSelectItems(items)) {
		return items.filter((item) => {
			return item !== "SEPARATOR";
		}) as Array<SelectItemShape<TValue, TItemData>>;
	}

	return items.reduce(
		(prev: Array<SelectItemShape<TValue, TItemData>>, acc) => {
			return [
				// biome-ignore lint/performance/noAccumulatingSpread: ToDo: remove accumulating spread
				...prev,
				...(acc.items.filter((item) => {
					return item !== "SEPARATOR";
				}) as Array<SelectItemShape<TValue, TItemData>>),
			];
		},
		[],
	);
}
