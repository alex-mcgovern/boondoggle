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
		field: { onChange, ref, value: rhfValue },
		fieldState: { error },
	} = useController({
		control,
		defaultValue,
		name,
	});

	const handleChange = useCallback(
		(key: Key) => {
			onChange(key);
			rest.comboBoxProps.onSelectionChange?.(key);
		},
		[onChange, rest.comboBoxProps.onSelectionChange],
	);

	return (
		<ComboBox<TValue>
			{...rest}
			errorMessage={error?.message}
			comboBoxProps={{
				...rest.comboBoxProps,
				defaultSelectedKey: rhfValue,
				onSelectionChange: handleChange,
			}}
			name={name}
			ref={ref}
		/>
	);
}
