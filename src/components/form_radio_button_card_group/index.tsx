import { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";

import { RadioButtonCardGroup } from "../radio_button_card_group_comp";

import type { WithFormFieldProps } from "../../types";
import type { RadioButtonCardGroupProps } from "../radio_button_card_group_comp";

/** ----------------------------------------------------------------------------- */

export type FormRadioButtonCardGroupProps = RadioButtonCardGroupProps &
  WithFormFieldProps & {
    defaultValue?: string | number;
  };

export function FormRadioButtonCardGroup({
  defaultValue,
  errorMessage,
  invalid,
  name,
  onChange: onChangeParent,
  required,
  validate,
  wrapperProps,
  ...rest
}: FormRadioButtonCardGroupProps) {
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
    <RadioButtonCardGroup
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
