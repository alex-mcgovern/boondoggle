import { TCountryCode, countries } from "countries-list";
import * as React from "react";
import { capitalize } from "../_lib/capitalize";
import { ComboBox, ComboBoxProps } from "../v2-combobox";
import { FLAGS } from "../v2-icon-flag/_map";
import { IterableListBoxItem } from "../v2-list-box";

const COUNTRY_SELECT_ITEMS: Array<IterableListBoxItem<TCountryCode>> =
	Object.entries(countries)
		.sort(([_a, { name: a }], [_b, { name: b }]) => {
			return a > b ? 1 : -1;
		})
		.map(([iso_code, { name }]) => {
			const FlagComponent =
				iso_code in FLAGS ? FLAGS[iso_code as TCountryCode] : null;

			return {
				name: capitalize(name),
				slotLeft: FlagComponent ? (
					<FlagComponent
						width="space_4"
						height="space_4"
						border="border_rule"
					/>
				) : null,
				id: iso_code,
			};
		});

export type CountryComboBoxProps = Omit<
	ComboBoxProps<TCountryCode>,
	"comboBoxProps"
> & {
	comboBoxProps?: Omit<
		ComboBoxProps<TCountryCode>["comboBoxProps"],
		"defaultItems" | "items"
	>;
};

export const CountryComboBox = React.forwardRef(
	({ ...rest }: ComboBoxProps) => {
		return (
			<ComboBox
				{...rest}
				comboBoxProps={{
					...rest.comboBoxProps,
					defaultItems: COUNTRY_SELECT_ITEMS,
				}}
			/>
		);
	},
);
