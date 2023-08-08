import { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";

import { RadioButtonGroup } from "../RadioButtonGroup";

import type { RadioButtonGroupProps } from "../RadioButtonGroup";
import type { RegisterOptions } from "react-hook-form";

/** ----------------------------------------------------------------------------- */

export type FormRadioButtonGroupProps = RadioButtonGroupProps & {
  defaultValue?: string | number;
  /** Message to render when erroring. */
  errorMessage: string;
  validate?: RegisterOptions["validate"];
};

export function FormRadioButtonGroup({
  defaultValue,
  errorMessage,
  invalid,
  name,
  onChange: onChangeParent,
  required,
  validate,
  wrapperProps,
  ...rest
}: FormRadioButtonGroupProps) {
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

  const handleChange = useCallback(
    (value: string) => {
      onChange(value);
      onChangeParent?.(value);
    },
    [onChange, onChangeParent]
  );

  return (
    <RadioButtonGroup
      aria-required={required}
      defaultValue={defaultValue}
      errorMessage={errorMessage}
      inputProps={{
        onBlur,
      }}
      invalid={invalid || !!error}
      name={name}
      onChange={handleChange}
      ref={ref}
      required={required}
      value={controlledValue}
      wrapperProps={wrapperProps}
      {...rest}
    />
  );
}
