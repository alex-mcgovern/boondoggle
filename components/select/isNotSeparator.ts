import { SelectItemShape, SelectSeparator } from "./types";

export function isNotSeparator<
	TValue extends string = string,
	TItemData extends Record<string, unknown> = Record<string, unknown>,
>(
	item: SelectItemShape<TValue, TItemData> | SelectSeparator,
): item is SelectItemShape<TValue, TItemData> {
	return item !== "SEPARATOR";
}
