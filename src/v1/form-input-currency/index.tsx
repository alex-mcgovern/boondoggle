import { useController, useFormContext } from "react-hook-form";
import type { WithFormFieldProps } from "../../types";
import { InputCurrency } from "../input-currency";
import type { InputCurrencyProps } from "../input-currency";

/**
 * React Hook Form connected version of Boondoggle's `InputCurrency`. Uses `useFormContext`
 * to access Hook Form's methods so can be nested in markup. Must be a descendant of `FormProvider`
 */
export type FormInputCurrencyProps<TCurrency extends string = string> =
	InputCurrencyProps<TCurrency> & WithFormFieldProps;

export function FormInputCurrency<TCurrency extends string = string>({
	defaultValue,
	invalid,
	name,
	onChange,
	marginBottom = "space_4",
	...rest
}: FormInputCurrencyProps<TCurrency>) {
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
		<InputCurrency
			errorMessage={error?.message}
			invalid={invalid || !!error}
			name={name}
			onBlur={onBlur}
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
