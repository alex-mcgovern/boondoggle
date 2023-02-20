import React, { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";
import type { SelectSingleCreatableProps } from "../../Select/SelectSingleCreatable";
import { SelectSingleCreatable } from "../../Select/SelectSingleCreatable";
import type { DropdownItem } from "../../Select/types";

export interface FormSingleSelectSingleCreatableProps
  extends SelectSingleCreatableProps {
  errorMessage: string;
}

/** React Hook Form connected version of `SelectSingle`. Uses `useFormContext`
 * to access Hook Form's methods so can be deeply nested. */
export function FormSingleSelectCreatable({
  name,

  ...rest
}: FormSingleSelectSingleCreatableProps) {
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
    (item: DropdownItem) => {
      return onChange(item?.value);
    },
    [onChange]
  );

  return (
    <SelectSingleCreatable
      ref={ref}
      invalid={!!error}
      onValueChange={handleChange}
      name={name}
      {...rest}
    />
  );
}
