import { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";

import { SelectSingle } from "../SelectSingle";

import type { WithFormFieldProps } from "../../types";
import type { SelectItemShape } from "../Select/types";
import type { SelectSingleProps } from "../SelectSingle";
import type { UseComboboxStateChange } from "downshift";

/** ----------------------------------------------------------------------------- */

type GetDefaultValueItemArgs = {
  items: Array<SelectItemShape>;
  value?: string | number;
};

const getDefaultValueItem = ({ items, value }: GetDefaultValueItemArgs) => {
  return items.find((item) => {
    return item.value.toString() === value?.toString();
  });
};

/** ----------------------------------------------------------------------------- */

export type FormSelectSingleProps = SelectSingleProps &
  WithFormFieldProps & {
    defaultValue?: string | number;
    required?: boolean;
  };

export function FormSelectSingle({
  defaultValue,
  items,
  name,
  onChange: onChangeParent,
  required,
  validate,
  ...rest
}: FormSelectSingleProps) {
  const { control } = useFormContext();

  const {
    field: { onChange, ref },
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    name,
    rules: { required, validate },
  });

  const handleChange = useCallback(
    (changes: UseComboboxStateChange<SelectItemShape>) => {
      onChange(changes.selectedItem?.value);
      onChangeParent?.(changes);
    },
    [onChange, onChangeParent]
  );

  const defaultItem = getDefaultValueItem({ items, value: defaultValue });

  return (
    <SelectSingle
      initialSelectedItem={defaultItem}
      invalid={!!error}
      items={items}
      name={name}
      onChange={handleChange}
      ref={ref}
      {...rest}
    />
  );
}
