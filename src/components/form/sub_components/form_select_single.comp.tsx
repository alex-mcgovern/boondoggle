import { useCallback } from "react";
import { useController, useFormContext } from "react-hook-form";

import { SelectSingle } from "../../select";

import type { DropdownItemShape, SelectSingleProps } from "../../select";
import type { UseComboboxStateChange } from "downshift";

type GetDefaultValueItem = {
  items: Array<DropdownItemShape>;
  value?: string | number;
};

const getDefaultValueItem = ({ items, value }: GetDefaultValueItem) => {
  return items.find((item) => {
    return item.value.toString() === value?.toString();
  });
};

export type FormSelectSingleProps = SelectSingleProps & {
  defaultValue?: string | number;
  errorMessage: string;
};

export function FormSelectSingle({
  defaultValue,
  items,
  name,
  onChange: onChangeParent,
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
    rules: { required: true },
  });

  const handleChange = useCallback(
    (changes: UseComboboxStateChange<DropdownItemShape>) => {
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
