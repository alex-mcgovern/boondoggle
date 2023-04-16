import { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";

import { Slider } from "../../slider";

import type { SliderProps } from "../../slider";

/**
 * React Hook Form connected version of Boondoggle's `Input`. Uses `useFormContext`
 * to access Hook Form's methods so can be nested in markup. Must be a descendant of `FormProvider`
 */
export interface FormSliderProps extends SliderProps {
  /** Message to render when erroring. */
  errorMessage: string;
  /** Callback for validation, else simply validates is non-empty. */
  validateFunction?: (value: string) => boolean;
  /** a11y label passed to `Label` component */
  label: string;
  /** Whether the slider is a required form element */
  required?: boolean;
}

export function FormSlider({
  name,
  errorMessage,
  required,
  validateFunction,
  defaultValue,
  ...rest
}: FormSliderProps) {
  const { control } = useFormContext();

  const {
    field: { onChange, onBlur, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: {
      required: required && errorMessage,
      validate: (value) => {
        if (validateFunction) {
          return validateFunction(value) || errorMessage;
        }
        return !!value;
      },
    },
    defaultValue,
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
      marginBottom="spacing2"
      name={name}
      onBlur={onBlur}
      onValueChange={handleChange}
      ref={ref}
      {...rest}
    />
  );
}
