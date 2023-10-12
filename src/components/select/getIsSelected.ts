import type { SelectItemShape } from "./types";
import type { UseComboboxProps, UseMultipleSelectionProps } from "downshift";

export function getIsSelected<
	TValue extends string = string,
	TItemData extends Record<string, unknown> = Record<string, unknown>,
>({
	isMulti,
	item,
	selectedItem,
	selectedItems: prevSelectedItems,
}: {
	/**
	 * Whether the select is in multi-select mode.
	 */
	isMulti?: boolean;

	/**
	 * The item to check.
	 */
	item: SelectItemShape<TValue, TItemData> | undefined | null;

	/**
	 * The currently selected item.
	 */
	selectedItem?: UseComboboxProps<
		SelectItemShape<TValue, TItemData>
	>["selectedItem"];

	/**
	 * The currently selected items.
	 */
	selectedItems?: UseMultipleSelectionProps<
		SelectItemShape<TValue, TItemData>
	>["selectedItems"];
}): boolean {
	if (!isMulti && selectedItem) {
		return selectedItem?.value.toLowerCase() === item?.value.toLowerCase();
	}

	if (isMulti) {
		return (
			Array.isArray(prevSelectedItems) &&
			prevSelectedItems.some((prevSelectedItem) => {
				return prevSelectedItem?.value === item?.value;
			})
		);
	}

	return false;
}
