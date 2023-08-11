import { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";

import { Slider } from "../Slider";

import type {
  LabelledElementCustomisation,
  WithFormFieldProps,
} from "../../types";
import type { SliderProps } from "../Slider";

/**
 * React Hook Form connected version of Boondoggle's `Input`. Uses `useFormContext`
 * to access Hook Form's methods so can be nested in markup. Must be a descendant of `FormProvider`
 */
export type FormSliderProps = LabelledElementCustomisation &
  SliderProps &
  WithFormFieldProps & {
    /** Whether the slider is a required form element */
    required?: boolean;
  };

export function FormSlider({
  defaultValue: defaultValueArray,
  errorMessage,
  name,
  required,
  validate,
  wrapperProps,
  ...rest
}: FormSliderProps) {
  const { control } = useFormContext();

  const {
    field: { onBlur, onChange, ref },
    fieldState: { error },
  } = useController({
    control,
    name,
    rules: {
      required: required && errorMessage,
      validate,
    },
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
    [onChange]
  );

  return (
    <Slider
      aria-required={required}
      errorMessage={errorMessage}
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
