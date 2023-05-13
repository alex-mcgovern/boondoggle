import { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";

import { SelectSingle } from "../../select";

import type { DropdownItemShape, SelectSingleProps } from "../../select";
import type { UseComboboxStateChange } from "downshift";

/**
 * React Hook Form connected version of `SelectSingle`. Uses `useFormContext`
 * to access Hook Form's methods so can be deeply nested.
 */
export type FormSelectSingleProps = SelectSingleProps & {
  errorMessage: string;
};

export function FormSelectSingle({ name, ...rest }: FormSelectSingleProps) {
  const { control } = useFormContext();

  const {
    field: { onChange, ref },
    fieldState: { error },
  } = useController({
    control,
    name,
    rules: { required: true },
    ...(rest.initialSelectedItem && {
      defaultValue: rest.initialSelectedItem.value,
    }),
  });

  const handleChange = useCallback(
    ({ selectedItem }: UseComboboxStateChange<DropdownItemShape>) => {
      return selectedItem ? onChange(selectedItem.value) : null;
    },
    [onChange]
  );

  return (
    <SelectSingle
      invalid={!!error}
      name={name}
      onChange={handleChange}
      ref={ref}
      {...rest}
    />
  );
}
