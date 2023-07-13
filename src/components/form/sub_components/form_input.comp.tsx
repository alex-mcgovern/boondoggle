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
  /** Placeholder text to display when input is empty. */
  placeholder: string;
  /** Callback for validation, else simply validates is non-empty. */
  validateFunction?: (value: string) => boolean;
};

export function FormInput({
  defaultValue,
  errorMessage,
  name,
  required,
  onChange,
  validateFunction,
  invalid,
  wrapperProps,
  ...rest
}: FormInputProps) {
  const { control } = useFormContext();

  const {
    field: {
      onChange: controlledOnChange,
      onBlur,
      ref,
      value: controlledValue = "",
    },
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    name,
    rules: {
      required: required && errorMessage,
      validate: (value) => {
        if (validateFunction) {
          return validateFunction(value) || errorMessage;
        }
        return !!value;
      },
    },
  });

  return (
    <Input
      aria-required={required}
      errorMessage={errorMessage}
      invalid={invalid || !!error}
      name={name}
      onBlur={onBlur}
      ref={ref}
      value={controlledValue}
      wrapperProps={wrapperProps}
      onChange={(e) => {
        onChange?.(e);
        controlledOnChange(e);
      }}
      {...rest}
    />
  );
}
