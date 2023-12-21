import { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";
import { Key } from "react-stately";
import type { WithFormFieldProps } from "../types";
import { ComboBox, ComboBoxProps } from "../v2-combobox";

export type FormComboBoxProps<TValue extends string = string> =
	ComboBoxProps<TValue> &
		WithFormFieldProps & {
			defaultValue?: string | number;
		};

export function FormComboBox<TValue extends string = string>({
	defaultValue,
	name,
	...rest
}: FormComboBoxProps<TValue>) {
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
	console.debug("FormComboBox rhfValue:", rhfValue);

	const handleChange = useCallback(
		(key: Key) => {
			rhfOnChange(key);
			rest.comboBoxProps.onSelectionChange?.(key);
		},
		[rhfOnChange, rest.comboBoxProps.onSelectionChange],
	);

	return (
		<ComboBox<TValue>
			{...rest}
			errorMessage={error?.message}
			comboBoxProps={{
				...rest.comboBoxProps,
				onBlur,
				isDisabled: rest.comboBoxProps.isDisabled || disabled,
				isInvalid: rest.comboBoxProps.isInvalid || !!error,
				selectedKey: rhfValue ?? null,
				onSelectionChange: handleChange,
			}}
			name={name}
			ref={ref}
		/>
	);
}
