import { useController, useFormContext } from "react-hook-form";

import { TextArea } from "../TextArea";

import type { TextAreaProps } from "../TextArea";
import type { RegisterOptions } from "react-hook-form";

/**
 * React Hook Form connected version of Boondoggle's `TextArea`. Uses `useFormContext`
 * to access Hook Form's methods so can be nested in markup. Must be a descendant of `FormProvider`
 */
export type FormTextAreaProps = TextAreaProps & {
  /** Message to render when erroring. */
  errorMessage: string;
  /** Placeholder text to display when input is empty. */
  placeholder: string;
  validate?: RegisterOptions["validate"];
};

export function FormTextArea({
  defaultValue,
  errorMessage,
  name,
  required,
  validate,
  wrapperProps,
  ...rest
}: FormTextAreaProps) {
  const { control } = useFormContext();

  const {
    field: { onBlur, onChange, ref, value: controlledValue = "" },
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
    <TextArea
      aria-required={required}
      errorMessage={errorMessage}
      invalid={!!error}
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      ref={ref}
      value={controlledValue}
      wrapperProps={wrapperProps}
      {...rest}
    />
  );
}
