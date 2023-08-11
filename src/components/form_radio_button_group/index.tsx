import { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";

import { RadioButtonGroup } from "../radio_button_group_comp";

import type { WithFormFieldProps } from "../../types";
import type { RadioButtonGroupProps } from "../radio_button_group_comp";

/** ----------------------------------------------------------------------------- */

export type FormRadioButtonGroupProps = RadioButtonGroupProps &
  WithFormFieldProps & {
    defaultValue?: string | number;
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
