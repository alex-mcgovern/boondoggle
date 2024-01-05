import { type TCountryCode, countries } from "countries-list";
import * as React from "react";
import { useController, useFormContext } from "react-hook-form";
import { capitalize } from "../_lib/capitalize";
import { ComboBox, type ComboBoxProps } from "../combo-box";
import { FieldError } from "../field-error";
import { FLAGS } from "../icon-flag/_map";
import { type IterableListBoxItem } from "../list-box";

const COUNTRIES: Array<IterableListBoxItem<TCountryCode>> = Object.entries(
	countries,
)
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

/** -----------------------------------------------------------------------------
 * ComboBoxCountry
 * ------------------------------------------------------------------------------- */

export type ComboBoxCountryProps = Omit<
	ComboBoxProps<TCountryCode>,
	"defaultItems" | "items"
>;

export const ComboBoxCountry = React.forwardRef<
	HTMLInputElement,
	ComboBoxCountryProps
>((props, ref) => {
	return (
		<ComboBox<TCountryCode> ref={ref} {...props} defaultItems={COUNTRIES} />
	);
});

/** -----------------------------------------------------------------------------
 * FormComboBox
 * ------------------------------------------------------------------------------- */

/**
 * A `FormComboBoxCountry` connects a `ComboBoxCountry` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/ComboBox.html)
 */
export function FormComboBoxCountry({
	children,
	...props
}: ComboBoxCountryProps) {
	if (!props.name) {
		throw new Error("FormComboBox requires a name prop");
	}

	const { control } = useFormContext();

	const {
		field: { ref, value = "", disabled: isDisabled, onChange, ...field },
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
			onSelectionChange={onChange}
			selectedKey={value}
			validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
			isInvalid={invalid}
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
