import { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";

import { RadioButtonCardGroup } from "../radio-button-card-group";

import type { WithFormFieldProps } from "../../types";
import type { RadioButtonCardGroupProps } from "../radio-button-card-group";

export type FormRadioButtonCardGroupProps = RadioButtonCardGroupProps &
	WithFormFieldProps & {
		defaultValue?: string | number;
	};

export function FormRadioButtonCardGroup({
	defaultValue,
	invalid,
	name,
	onChange: onChangeParent,
	wrapperProps = { marginBottom: "space_6" },
	...rest
}: FormRadioButtonCardGroupProps) {
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
		<RadioButtonCardGroup
			defaultValue={defaultValue}
			errorMessage={error?.message}
			inputProps={{
				onBlur,
			}}
			// onBlur={onBlur}
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
