import { arrayHasLength } from "../../_lib/array-has-length";
import { isTruthy } from "../../_lib/is-truthy";
import type { FlatSelectItems, GroupedSelectItems } from "../types";
import { isFlatSelectItems } from "./isFlatSelectItems";
import { isGroupedSelectItems } from "./isGroupedSelectItems";
import { isNotSeparator } from "./isNotSeparator";

/**
 * Removes items not matching `inputValue` from `items`
 */
export function filterSelectItems<
	TValue extends string = string,
	TItemData extends Record<string, unknown> = Record<string, unknown>,
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
		return items.filter((item) => {
			return (
				isNotSeparator(item) &&
				(item.label?.toLowerCase().includes(inputValue.toLowerCase()) ||
					item.value
						.toLowerCase()
						.includes(inputValue.toLowerCase()) ||
					item.tags?.some((tag) => {
						return tag
							.toLowerCase()
							.includes(inputValue.toLowerCase());
					}))
			);
		});
	}

	if (isGroupedSelectItems(items)) {
		return items
			.map((group) => {
				const filteredWithinGroup = group.items.filter((item) => {
					return (
						isNotSeparator(item) &&
						(item.label
							?.toLowerCase()
							.includes(inputValue.toLowerCase()) ||
							item.value
								.toLowerCase()
								.includes(inputValue.toLowerCase()) ||
							item.tags?.some((tag) => {
								return tag
									.toLowerCase()
									.includes(inputValue.toLowerCase());
							}))
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
