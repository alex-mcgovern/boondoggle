import type { SelectItemShape } from "../types";
type Value = "it" | "uk";

export const ITEM_TO_FIND_MOCK: SelectItemShape<Value> = {
	label: "Italy",
	value: "it",
};

export const SELECTED_ITEMS_MOCK: Array<SelectItemShape<Value>> = [
	{
		label: "Italy",
		value: "it",
	},
	{
		label: "United Kingdom",
		value: "uk",
	},
];
