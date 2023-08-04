import { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";

import { RadioButtonCards } from "../../radio_button_cards";

import type { RadioButtonCardsProps } from "../../radio_button_cards";

/** ----------------------------------------------------------------------------- */

export type FormRadioButtonCardsProps = RadioButtonCardsProps & {
  defaultValue?: string | number;
  /** Message to render when erroring. */
  errorMessage: string;
  /** Callback for validation, else simply validates is non-empty. */
  validateFunction?: (value: string) => boolean;
};

export function FormRadioButtonCards({
  defaultValue,
  errorMessage,
  invalid,
  name,
  onChange: onChangeParent,
  required,
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
    <RadioButtonCards
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
