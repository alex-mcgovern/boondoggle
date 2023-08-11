import { useController, useFormContext } from "react-hook-form";

import { formatDate } from "../../utils/format_date";
import { InputDate } from "../input_date";

import type { WithFormFieldProps, WithPlaceholder } from "../../types";
import type { InputDateProps } from "../input_date";

/**
 * React Hook Form connected version of Boondoggle's `Input`. Uses `useFormContext`
 * to access Hook Form's methods so can be nested in markup. Must be a descendant of `FormProvider`
 */
export type FormInputDateProps = Omit<InputDateProps, "defaultValue"> &
  WithPlaceholder &
  WithFormFieldProps & {
    /** Override input default value to accept a string only */
    defaultValue?: string;
  };

export function FormInputDate({
  defaultValue,
  errorMessage,
  name,
  required,
  validate,
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
    rules: {
      required: required && errorMessage,
      validate,
    },
  });

  return (
    <InputDate
      {...(rest as InputDateProps)}
      aria-required={required}
      errorMessage={errorMessage}
      invalid={!!error}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      ref={ref}
      value={controlledValue ? formatDate(controlledValue) : ""}
    />
  );
}
