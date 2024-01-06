import { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";

import type { RadioButtonGroupProps } from "../radio-button-group";
import type { WithFormFieldProps } from "../types";

import { RadioButtonGroup } from "../radio-button-group";

export type FormRadioButtonGroupProps = RadioButtonGroupProps &
	WithFormFieldProps & {
		defaultValue?: number | string;
	};

export function FormRadioButtonGroup({
	defaultValue,
	invalid,
	items,
	name,
	onChange: onChangeParent,
	wrapperProps = { marginBottom: "space_6" },
	...rest
}: FormRadioButtonGroupProps) {
	const { control } = useFormContext();

	const {
		field: { onBlur, onChange, ref, value: controlledValue = "" },
		fieldState: { error },
	} = useController({
		control,
		defaultValue,
		name,
	});

	const handleChange = useCallback(
		(value: string) => {
			onChange(value);
			onChangeParent?.(value);
		},
		[onChange, onChangeParent],
	);

	const wrappedItems = items.map((item) => ({
		...item,
		onBlur,
	}));

	return (
		<RadioButtonGroup
			defaultValue={defaultValue}
			errorMessage={error?.message}
			invalid={invalid || !!error}
			items={wrappedItems}
			name={name}
			onChange={handleChange}
			ref={ref}
			value={controlledValue}
			wrapperProps={wrapperProps}
			{...rest}
		/>
	);
}
