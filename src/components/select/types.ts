import type { WithColorOverlay, WithSlots } from "../../common-types";
import type { BoxProps } from "../box";

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

/* eslint-disable jsdoc/require-jsdoc */

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
    TItemData extends Record<string, unknown> = Record<string, unknown>
> = BoxProps &
    WithSlots &
    WithColorOverlay & {
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
         * The string value for the item.
         */
        value: TValue;
    };
