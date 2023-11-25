import { useController, useFormContext } from "react-hook-form";
import { Input } from "../input";
import type { InputProps } from "../input";
import type { WithFormFieldProps } from "../types";

/**
 * React Hook Form connected version of Boondoggle's `Input`. Uses `useFormContext`
 * to access Hook Form's methods so can be nested in markup. Must be a descendant of `FormProvider`
 */
export type FormInputProps = InputProps & WithFormFieldProps;

export function FormInput({
	defaultValue,
	invalid,
	name,
	onChange,
	colorOverlay,
	marginBottom = "space_4",
	...rest
}: FormInputProps) {
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
		<Input
			errorMessage={error?.message}
			invalid={invalid || !!error}
			name={name}
			onBlur={onBlur}
			colorOverlay={invalid || !!error ? "red" : colorOverlay}
			onChange={(e) => {
				onChange?.(e);

				reactHookFormOnChange(e);
			}}
			ref={ref}
			value={controlledValue}
			marginBottom={marginBottom}
			{...rest}
		/>
	);
}
