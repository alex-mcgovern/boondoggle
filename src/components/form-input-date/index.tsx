import { useController, useFormContext } from "react-hook-form";

import { InputDate } from "../input-date";

import type { WithFormFieldProps, WithOptionalPlaceholder } from "../../types";
import type { InputDateProps } from "../input-date";

/**
 * React Hook Form connected version of Boondoggle's `Input`. Uses `useFormContext`
 * to access Hook Form's methods so can be nested in markup. Must be a descendant of `FormProvider`
 */
export type FormInputDateProps = Omit<InputDateProps, "defaultValue"> &
	WithOptionalPlaceholder &
	WithFormFieldProps & {
		/**
		 * Override input default value to accept a string only
		 */
		defaultValue?: string;
	};

export function FormInputDate({
	defaultValue,
	name,
	marginBottom = "space_4",
	...rest
}: FormInputDateProps) {
	const { control } = useFormContext();

	const {
		field: { onBlur, onChange, ref, value: controlledValue },
		fieldState: { error },
	} = useController({
		control,
		defaultValue,
		name,
	});

	return (
		<InputDate
			marginBottom={marginBottom}
			{...(rest as InputDateProps)}
			errorMessage={error?.message}
			invalid={!!error}
			name={name}
			onBlur={onBlur}
			onChange={onChange}
			ref={ref}
			value={controlledValue}
		/>
	);
}