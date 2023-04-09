import React, { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";

import { SelectSingle } from "../select/select_single.component";

import type { DropdownItemShape } from "../select/select.types";
import type { SelectSingleProps } from "../select/select_single.component";
import type { UseComboboxStateChange } from "downshift";

export interface FormSingleSelectProps extends SelectSingleProps {
  errorMessage: string;
}

/** React Hook Form connected version of `SelectSingle`. Uses `useFormContext`
 * to access Hook Form's methods so can be deeply nested. */
export function FormSingleSelect({ name, ...rest }: FormSingleSelectProps) {
  const { control } = useFormContext();

  const {
    field: { onChange, ref },
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: true },
    defaultValue: "",
  });

  const handleChange = useCallback(
    ({ selectedItem }: UseComboboxStateChange<DropdownItemShape>) => {
      return selectedItem ? onChange(selectedItem.value) : null;
    },
    [onChange]
  );

  return (
    <SelectSingle
      ref={ref}
      invalid={!!error}
      onSelectedItemChange={handleChange}
      name={name}
      {...rest}
    />
  );
}
