import type { TCountryCode } from "countries-list";

import { countries } from "countries-list";
import { forwardRef } from "react";

import type { ComboBoxProps } from "../combo-box";
import type { IterableListBoxItem } from "../list-box";

import { ComboBox } from "../combo-box";
import { FLAGS } from "../icon-flag/_map";

/**
 * Get the flag component for a given country code.
 */
const getFlagComponent = (iso_code: TCountryCode) => {
    if (iso_code in FLAGS === false) {
        return undefined;
    }
    const FlagComponent =
        iso_code in FLAGS ? FLAGS[iso_code as TCountryCode] : null;

    if (!FlagComponent) {
        return undefined;
    }

    return (
        <FlagComponent
            border="border_rule"
            height="space_4"
            width="space_4"
        />
    );
};

/**
 * Get a country item for the list box.
 */
const getCountryItem = ({
    iso,
    name,
}: {
    /**
     * The ISO country code. Primarily, we use the 2 character code, though some countries have a 3 character code.
     */
    iso: TCountryCode;
    /**
     * The name of the country.
     */
    name: string;
}): IterableListBoxItem<TCountryCode> => {
    return {
        id: iso,
        name,
        slotLeft: getFlagComponent(iso),
    };
};

const COUNTRIES: Array<IterableListBoxItem<TCountryCode>> = Object.entries(
    countries,
).map(([iso, { name }]) => getCountryItem({ iso: iso as TCountryCode, name }));

export type ComboBoxCountryProps = Omit<
    ComboBoxProps<TCountryCode>,
    "defaultItems" | "items"
>;

export const ComboBoxCountry = forwardRef<
    HTMLInputElement,
    ComboBoxCountryProps
>((props, ref) => {
    return (
        <ComboBox<TCountryCode>
            ref={ref}
            {...props}
            defaultItems={COUNTRIES}
        />
    );
});
