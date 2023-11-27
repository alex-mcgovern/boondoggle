import { useController, useFormContext } from "react-hook-form";
import type { WithFormFieldProps } from "../types";
import { V2InputCurrency } from "../v2-input-currency";

export function V2FormInputCurrency<TCurrency extends string = string>({
	defaultValue,
	isInvalid,
	name,
	onChange,
	marginBottom = "space_4",
	...rest
}: React.ComponentProps<typeof V2InputCurrency<TCurrency>> &
	WithFormFieldProps) {
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
		<V2InputCurrency
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
			marginBottom={marginBottom}
			{...rest}
		/>
	);
}
