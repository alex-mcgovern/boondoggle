import { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";

import { RadioButtonCards } from "../../radio_button_cards";

import type { RadioButtonCardsProps } from "../../radio_button_cards";

export type FormRadioButtonCardsProps = RadioButtonCardsProps & {
  /** Message to render when erroring. */
  errorMessage: string;
  /** Callback for validation, else simply validates is non-empty. */
  validateFunction?: (value: string) => boolean;
};

export function FormRadioButtonCards({
  errorMessage,
  invalid,
  name,
  onChange: onChangeParent,
  required,
  validateFunction,
  wrapperProps,
  ...rest
}: FormRadioButtonCardsProps) {
  const { control } = useFormContext();

  const {
    field: { onChange, onBlur, ref, value: controlledValue = "" },
    fieldState: { error },
  } = useController({
    control,
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
      errorMessage={errorMessage}
      invalid={invalid || !!error}
      name={name}
      onChange={handleChange}
      ref={ref}
      value={controlledValue}
      wrapperProps={wrapperProps}
      radioButtonInputProps={{
        onBlur,
      }}
      {...rest}
    />
  );
}
