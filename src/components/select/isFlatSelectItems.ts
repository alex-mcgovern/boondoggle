import type { FlatSelectItems, GroupedSelectItems } from "./types";

export function isFlatSelectItems<
	TValue extends string = string,
	TItemData extends Record<string, unknown> = Record<string, unknown>,
>(
	items:
		| FlatSelectItems<TValue, TItemData>
		| GroupedSelectItems<TValue, TItemData>
		| undefined,
): items is FlatSelectItems<TValue, TItemData> {
	return (
		Array.isArray(items) &&
		!items.some((item) => {
			return typeof item === "object" && "items" in item;
		})
	);
}
