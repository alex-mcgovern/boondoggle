import { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";

import { Slider } from "../../slider";

import type {
	WithFormFieldProps,
	WithWrapperProps,
} from "../../src/common-types";
import type { SliderProps } from "../../slider";

/**
 * React Hook Form connected version of Boondoggle's `Input`. Uses `useFormContext`
 * to access Hook Form's methods so can be nested in markup. Must be a descendant of `FormProvider`
 */
export type FormSliderProps = WithWrapperProps &
	SliderProps &
	WithFormFieldProps;

export function FormSlider({
	defaultValue: defaultValueArray,
	name,
	wrapperProps = { marginBottom: "space_6" },
	...rest
}: FormSliderProps) {
	const { control } = useFormContext();

	const {
		field: { onBlur, onChange, ref },
		fieldState: { error },
	} = useController({
		control,
		name,
		...(defaultValueArray &&
			Array.isArray(defaultValueArray) && {
				defaultValue: defaultValueArray[0],
			}),
	});

	/**
	 * Radix Slider returns an array of values, for the "slider range" use case.
	 * Currently we don't need these, so we're just destructuring the first and using that.
	 */
	const handleChange = useCallback(
		(value: Array<number>) => {
			const [firstValue] = value || [];

			return onChange(firstValue);
		},
		[onChange],
	);

	return (
		<Slider
			errorMessage={error?.message}
			invalid={!!error}
			name={name}
			onBlur={onBlur}
			onValueChange={handleChange}
			ref={ref}
			wrapperProps={wrapperProps}
			{...rest}
		/>
	);
}
