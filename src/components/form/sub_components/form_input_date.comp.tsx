import { useController, useFormContext } from "react-hook-form";

import { formatDate } from "../../../utils/format_date";
import { InputDate } from "../../input_date/input_date.comp";

import type { InputProps } from "../../input";

/**
 * React Hook Form connected version of Boondoggle's `Input`. Uses `useFormContext`
 * to access Hook Form's methods so can be nested in markup. Must be a descendant of `FormProvider`
 */
export type FormInputProps = Omit<InputProps, "defaultValue"> & {
  /** Message to render when erroring. */
  errorMessage: string;
  /** Callback for validation, else simply validates is non-empty. */
  validateFunction?: (value: string) => boolean;
  /** Placeholder text to display when input is empty. */
  placeholder: string;
  /** Override input default value to accept a string only */
  defaultValue?: string;
};

export function FormInputDate({
  defaultValue,
  errorMessage,
  name,
  required,
  validateFunction,
  ...rest
}: FormInputProps) {
  const { control } = useFormContext();

  const {
    field: { onBlur, ref, onChange, value: controlledValue },
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

  return (
    <InputDate
      aria-required={required}
      errorMessage={errorMessage}
      invalid={!!error}
      name={name}
      value={controlledValue ? formatDate(controlledValue) : ""}
      onBlur={onBlur}
      onChange={onChange}
      ref={ref}
      {...rest}
    />
  );
}
