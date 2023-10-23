import { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";

import { RadioButtonGroup } from "../radio_button_group";

import type { WithFormFieldProps } from "../../src/common-types";
import type { RadioButtonGroupProps } from "../radio_button_group";

export type FormRadioButtonGroupProps = RadioButtonGroupProps &
	WithFormFieldProps & {
		defaultValue?: string | number;
	};

export function FormRadioButtonGroup({
	defaultValue,
	invalid,
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

	return (
		<RadioButtonGroup
			defaultValue={defaultValue}
			errorMessage={error?.message}
			inputProps={{
				onBlur,
			}}
			invalid={invalid || !!error}
			name={name}
			onChange={handleChange}
			ref={ref}
			value={controlledValue}
			wrapperProps={wrapperProps}
			{...rest}
		/>
	);
}
