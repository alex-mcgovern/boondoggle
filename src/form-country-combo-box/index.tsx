import { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";
import { Key } from "react-stately";
import type { WithFormFieldProps } from "../types";
import {
	CountryComboBox,
	CountryComboBoxProps,
} from "../__DONE__country-combo-box";

export type FormCountryComboBoxProps = CountryComboBoxProps &
	WithFormFieldProps & {
		defaultValue?: string | number;
	};

export function FormCountryComboBox({
	defaultValue,
	name,
	...rest
}: FormCountryComboBoxProps) {
	const { control } = useFormContext();

	const {
		field: {
			onChange: rhfOnChange,
			ref,
			value: rhfValue,
			disabled,
			onBlur,
		},
		fieldState: { error },
	} = useController({
		control,
		defaultValue,
		name,
	});

	const handleChange = useCallback(
		(key: Key) => {
			rhfOnChange(key);
			rest.comboBoxProps?.onSelectionChange?.(key);
		},
		[rhfOnChange, rest.comboBoxProps?.onSelectionChange],
	);

	return (
		<CountryComboBox
			{...rest}
			errorMessage={error?.message}
			comboBoxProps={{
				...rest.comboBoxProps,
				onBlur,
				isDisabled: rest.comboBoxProps?.isDisabled || disabled,
				isInvalid: rest.comboBoxProps?.isInvalid || !!error,
				selectedKey: rhfValue ?? null,
				onSelectionChange: handleChange,
			}}
			name={name}
			ref={ref}
		/>
	);
}
