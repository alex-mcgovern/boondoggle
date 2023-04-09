import React, { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";

import { SelectSingle } from "../select_new/select_single.component";

import type { SelectSingleProps } from "../select_new/select_single.component";
import type { DropdownItemShape } from "../select_new/types";

export interface FormSingleSelectProps extends SelectSingleProps {
  errorMessage: string;
}

/** React Hook Form connected version of `SelectSingle`. Uses `useFormContext`
 * to access Hook Form's methods so can be deeply nested. */
export function FormSingleSelect({
  name,

  ...rest
}: FormSingleSelectProps) {
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
    (item: DropdownItemShape) => {
      return onChange(item.value);
    },
    [onChange]
  );

  return (
    <SelectSingle
      ref={ref}
      invalid={!!error}
      onValueChange={handleChange}
      name={name}
      {...rest}
    />
  );
}
