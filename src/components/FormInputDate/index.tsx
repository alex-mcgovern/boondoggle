import { useController, useFormContext } from "react-hook-form";

import { formatDate } from "../../utils/format_date";
import { InputDate } from "../InputDate";

import type { InputDateProps } from "../InputDate";

/**
 * React Hook Form connected version of Boondoggle's `Input`. Uses `useFormContext`
 * to access Hook Form's methods so can be nested in markup. Must be a descendant of `FormProvider`
 */
export type FormInputDateProps = Omit<InputDateProps, "defaultValue"> & {
  /** Override input default value to accept a string only */
  defaultValue?: string;
  /** Message to render when erroring. */
  errorMessage: string;
  /** Placeholder text to display when input is empty. */
  placeholder: string;
  /** Callback for validation, else simply validates is non-empty. */
  validateFunction?: (value: string) => boolean;
};

export function FormInputDate({
  defaultValue,
  errorMessage,
  name,
  required,
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
