import { useController, useFormContext } from "react-hook-form";

import { TextArea } from "../../text_area";

import type { TextAreaProps } from "../../text_area";

/**
 * React Hook Form connected version of Boondoggle's `TextArea`. Uses `useFormContext`
 * to access Hook Form's methods so can be nested in markup. Must be a descendant of `FormProvider`
 */
export interface FormTextAreaProps extends TextAreaProps {
  /** Message to render when erroring. */
  errorMessage: string;
  /** Callback for validation, else simply validates is non-empty. */
  validateFunction?: (value: string) => boolean;
  /** a11y label passed to `Label` component */
  label: string;
  /** Placeholder text to display when input is empty. */
  placeholder: string;
}

export function FormTextArea({
  name,
  errorMessage,
  required,
  validateFunction,
  defaultValue,
  ...rest
}: FormTextAreaProps) {
  const { control } = useFormContext();

  const {
    field: { onChange, onBlur, ref, value: controlledValue },
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
    <TextArea
      aria-required={required}
      errorMessage={errorMessage}
      invalid={!!error}
      marginBottom="spacing2"
      name={name}
      onBlur={onBlur}
      onChange={onChange}
      ref={ref}
      value={controlledValue}
      {...rest}
    />
  );
}
