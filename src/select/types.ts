import type { BoxProps } from "../box";
import { WithColorOverlay, WithSlots } from "../types";

type IsFilterableBaseProps = {
	/**
	 * Whether the item is filterable.
	 */
	isFilterable?: boolean;

	/**
	 * The tooltip text to show when the item is filterable.
	 */
	strClear?: string;
};

type WithIsFilterable = IsFilterableBaseProps & {
	isFilterable: true;
	strClear: string;
};

type WithoutIsFilterable = IsFilterableBaseProps & {
	isFilterable?: never;
	strClear?: string;
};

/* eslint-enable jsdoc/require-jsdoc */

export type WithOptionalIsFilterable = WithIsFilterable | WithoutIsFilterable;

export type SelectItemShape<
	TValue extends string = string,
	TItemData extends Record<string, unknown> = Record<string, unknown>,
> = BoxProps &
	WithSlots &
	WithColorOverlay & {
		/**
		 * The description for the item.
		 */
		description?: string;

		/**
		 * Whether the item is currently selected.
		 */
		isSelected?: boolean;

		/**
		 * Additional data that can be pushed through the item.
		 */
		itemData?: TItemData;

		/**
		 * The human-readable label for the item.
		 */
		label: string;

		/**
		 * Additional data that can be used for filtering.
		 */
		tags?: string[];

		/**
		 * The string value for the item.
		 */
		value: TValue;
	};

export type SelectSeparator = "SEPARATOR";

export type FlatSelectItems<
	TValue extends string = string,
	TItemData extends Record<string, unknown> = Record<string, unknown>,
> = Array<SelectItemShape<TValue, TItemData> | SelectSeparator>;

export type GroupedSelectItems<
	TValue extends string = string,
	TItemData extends Record<string, unknown> = Record<string, unknown>,
> = Array<{
	/**
	 * Items in a section
	 */
	items: Array<SelectItemShape<TValue, TItemData> | SelectSeparator>;
	/**
	 * Title of the section
	 */
	title: string;
}>;
