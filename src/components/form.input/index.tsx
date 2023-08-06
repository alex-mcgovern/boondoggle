import { useController, useFormContext } from "react-hook-form";

import { Input } from "../input";

import type { InputProps } from "../input";
import type { RegisterOptions } from "react-hook-form";

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
  validate?: RegisterOptions["validate"];
};

export function FormInput({
  defaultValue,
  errorMessage,
  invalid,
  name,
  onChange,
  required,
  validate,
  wrapperProps,
  ...rest
}: FormInputProps) {
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
    rules: {
      required,
      validate,
    },
  });

  return (
    <Input
      aria-required={required}
      errorMessage={errorMessage}
      invalid={invalid || !!error}
      name={name}
      onBlur={onBlur}
      onChange={(e) => {
        onChange?.(e);
        reactHookFormOnChange(e);
      }}
      ref={ref}
      required={required}
      value={controlledValue}
      wrapperProps={wrapperProps}
      {...rest}
    />
  );
}
