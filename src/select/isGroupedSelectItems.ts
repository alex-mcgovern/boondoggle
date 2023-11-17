import type { FlatSelectItems, GroupedSelectItems } from "./types";

export function isGroupedSelectItems<
	TValue extends string = string,
	TItemData extends Record<string, unknown> = Record<string, unknown>,
>(
	items:
		| FlatSelectItems<TValue, TItemData>
		| GroupedSelectItems<TValue, TItemData>
		| undefined,
): items is GroupedSelectItems<TValue, TItemData> {
	return (
		Array.isArray(items) &&
		items.some((item) => {
			return typeof item === "object" && "items" in item;
		})
	);
}
