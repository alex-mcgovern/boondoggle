import { useController, useFormContext } from "react-hook-form";
import type { WithFormFieldProps } from "../../types";
import { TextFieldProps } from "../text-field/types";
import { TextField } from "../text-field";

/**
 * React Hook Form connected version of Boondoggle's `TextField`. Uses `useFormContext`
 * to access Hook Form's methods so can be nested in markup. Must be a descendant of `FormProvider`
 */
export type FormTextFieldProps = TextFieldProps & WithFormFieldProps;

export function FormTextField({
	defaultValue,
	isInvalid,
	name,
	onChange,
	...rest
}: FormTextFieldProps) {
	const { control } = useFormContext();

	const {
		field: {
			onBlur,
			onChange: reactHookFormOnChange,
			ref,
			value: controlledValue = "",
		},
		fieldState: { error },
	} = useController({
		control,
		defaultValue,
		name,
	});

	return (
		<TextField
			errorMessage={error?.message}
			isInvalid={isInvalid || !!error}
			name={name}
			onBlur={onBlur}
			onChange={(e) => {
				onChange?.(e);
				reactHookFormOnChange(e);
			}}
			ref={ref}
			value={controlledValue}
			{...rest}
		/>
	);
}
