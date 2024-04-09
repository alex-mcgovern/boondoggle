import type { TCountryCode } from "countries-list";

import { countries } from "countries-list";
import { forwardRef } from "react";

import type { ComboBoxProps } from "../combo-box";
import type { IterableListBoxItem } from "../list-box";

import { ComboBox } from "../combo-box";
import { FLAGS } from "../icon-flag/_map";

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

const getCountryItem = ({
    iso,
    name,
}: {
    iso: TCountryCode;
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
