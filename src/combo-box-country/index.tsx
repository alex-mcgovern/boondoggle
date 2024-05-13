import type { TCountryCode } from "countries-list";
import type { ComponentProps } from "react";

import { countries } from "countries-list";
import { forwardRef } from "react";
import { useController, useFormContext } from "react-hook-form";

import type { IterableListBoxItem } from "../list-box";

import { ComboBox } from "../combo-box";
import { FieldError } from "../field-error";
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

    return <FlagComponent />;
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

/**
 * A combo box combines a text input with a listbox, allowing users to filter a list of options to items matching a query.
 *
 * This combo box is pre-populated with a list of countries, and displays a flag icon next to each country.
 *
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 * ## Usage
 *
 * ```ts
 * import { ComboBoxCountry, ComboBoxButton, type ComboBoxCountryProps } from "boondoggle/combobox-country"
 * import { ComboBoxButton } from "boondoggle/combobox"
 * ```
 */
export const ComboBoxCountry = forwardRef<
    HTMLDivElement,
    Omit<ComponentProps<typeof ComboBox>, "defaultItems" | "items">
>(
    ({
        ...props
    }: Omit<ComponentProps<typeof ComboBox>, "defaultItems" | "items">) => {
        return (
            <ComboBox
                {...props}
                defaultItems={COUNTRIES}
            />
        );
    },
);

/**
 * A `FormComboBoxCountry` connects a `ComboBoxCountry` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/ComboBox.html)
 */
export function FormComboBoxCountry({
    children,
    ...props
}: ComponentProps<typeof ComboBoxCountry>) {
    if (!props.name) {
        throw new Error("FormComboBox requires a name prop");
    }

    const { control } = useFormContext();

    const {
        field: { disabled: isDisabled, onChange, ref, value = "", ...field },
        fieldState: { error, invalid },
    } = useController({
        control,
        defaultValue: props.selectedKey,
        name: props.name,
    });

    return (
        <ComboBoxCountry
            {...props}
            {...field}
            isDisabled={isDisabled}
            isInvalid={invalid}
            onSelectionChange={(k) => {
                onChange(k);
                props.onSelectionChange?.(k);
            }}
            ref={ref}
            selectedKey={value}
            validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
        >
            {() => {
                return (
                    <>
                        {children}
                        <FieldError>{error?.message}</FieldError>
                    </>
                );
            }}
        </ComboBoxCountry>
    );
}
