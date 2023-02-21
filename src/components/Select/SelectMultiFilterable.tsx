import React from "react";
import type { GetSprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../Box";
import type { InputProps } from "../Input";
import { Label } from "../Label";
import { DropdownMenu } from "./components/DropdownMenu";
import { SelectInput } from "./components/SelectInput";
import { DownshiftProviderMulti } from "./context/DownshiftProviderMulti";
import type { DropdownItem } from "./types";

export interface SelectMultiFilterableProps
  extends Omit<InputProps, "value" | "iconTrailing">,
    GetSprinklesArgs {
  items: Array<DropdownItem>;
  initialValue?: Array<DropdownItem>;
  onValueChange?(...args: Array<unknown>): unknown;
  onSelectItem?(...args: Array<unknown>): unknown;
  selectedItems?: Array<DropdownItem>;
  label?: string;
}

export function SelectMultiFilterable({
  items,
  onValueChange,
  onSelectItem,
  initialValue,
  id,
  disabled,
  iconLeading,
  label,
  placeholder,
  size,
  name,
  ...rest
}: SelectMultiFilterableProps) {
  return (
    <DownshiftProviderMulti
      items={items}
      onValueChange={onValueChange}
      onSelectItem={onSelectItem}
      initialValue={initialValue}
    >
      <Box position="relative" width="100%" {...rest}>
        {label && <Label htmlFor={id} label={label} />}
        <SelectInput
          disabled={disabled}
          iconLeading={iconLeading}
          id={id}
          name={name}
          placeholder={placeholder}
          size={size}
        />
        <DropdownMenu size={size} isSelectMultiFilterable />
      </Box>
    </DownshiftProviderMulti>
  );
}
