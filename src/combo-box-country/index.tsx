import { type TCountryCode, countries } from "countries-list";
import * as React from "react";
import { useController, useFormContext } from "react-hook-form";
import { ComboBox, type ComboBoxProps } from "../combo-box";
import { FieldError } from "../field-error";
import { FLAGS } from "../icon-flag/_map";
import { type IterableListBoxItem } from "../list-box";

/** -----------------------------------------------------------------------------
 * @util get a flag icon component
 * ------------------------------------------------------------------------------- */

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
		<FlagComponent width="space_4" height="space_4" border="border_rule" />
	);
};

/** -----------------------------------------------------------------------------
 * @util get a country menu item
 * ------------------------------------------------------------------------------- */

const getCountryItem = ({
	iso,
	name,
}: {
	iso: TCountryCode;
	name: string;
}): IterableListBoxItem<TCountryCode> => {
	return {
		name,
		slotLeft: getFlagComponent(iso),
		id: iso,
	};
};

/** -----------------------------------------------------------------------------
 * @constant list of country items
 * ------------------------------------------------------------------------------- */

const COUNTRIES: Array<IterableListBoxItem<TCountryCode>> = Object.entries(
	countries,
).map(([iso, { name }]) => getCountryItem({ iso: iso as TCountryCode, name }));

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
