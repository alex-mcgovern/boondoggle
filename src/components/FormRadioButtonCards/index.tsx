import { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";

import { RadioButtonCardGroup } from "../RadioButtonCardGroup";

import type { RadioButtonCardsProps } from "../RadioButtonCardGroup";
import type { RegisterOptions } from "react-hook-form";

/** ----------------------------------------------------------------------------- */

export type FormRadioButtonCardsProps = RadioButtonCardsProps & {
  defaultValue?: string | number;
  /** Message to render when erroring. */
  errorMessage: string;
  validate?: RegisterOptions["validate"];
};

export function FormRadioButtonCards({
  defaultValue,
  errorMessage,
  invalid,
  name,
  onChange: onChangeParent,
  required,
  validate,
  wrapperProps,
  ...rest
}: FormRadioButtonCardsProps) {
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
      invalid={invalid || !!error}
      name={name}
      onChange={handleChange}
      radioButtonInputProps={{
        onBlur,
      }}
      ref={ref}
      required={required}
      value={controlledValue}
      wrapperProps={wrapperProps}
      {...rest}
    />
  );
}
