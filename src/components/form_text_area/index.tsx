import { useController, useFormContext } from "react-hook-form";

import { TextArea } from "../text_area";

import type { WithFormFieldProps, WithPlaceholder } from "../../common-types";
import type { TextAreaProps } from "../text_area";

/**
 * React Hook Form connected version of Boondoggle's `TextArea`. Uses `useFormContext`
 * to access Hook Form's methods so can be nested in markup. Must be a descendant of `FormProvider`
 */
export type FormTextAreaProps = TextAreaProps &
  WithPlaceholder &
  WithFormFieldProps;

export function FormTextArea({
  defaultValue,
  name,
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
  });

  return (
    <TextArea
      errorMessage={error?.message}
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
