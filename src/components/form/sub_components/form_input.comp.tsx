import { useController, useFormContext } from "react-hook-form";

import { Input } from "../../input";

import type { InputProps } from "../../input";

/**
 * React Hook Form connected version of Boondoggle's `Input`. Uses `useFormContext`
 * to access Hook Form's methods so can be nested in markup. Must be a descendant of `FormProvider`
 */
export type FormInputProps = InputProps & {
  /** Message to render when erroring. */
  errorMessage: string;
  /** Callback for validation, else simply validates is non-empty. */
  validateFunction?: (value: string) => boolean;
  /** Placeholder text to display when input is empty. */
  placeholder: string;
};

export function FormInput({
  defaultValue,
  errorMessage,
  name,
  required,
  validateFunction,
  ...rest
}: FormInputProps) {
  const { control } = useFormContext();

  const {
    field: { onChange, onBlur, ref, value: controlledValue = "" },
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
    <Input
      aria-required={required}
      errorMessage={errorMessage}
      invalid={!!error}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      ref={ref}
      value={controlledValue}
      {...rest}
    />
  );
}
