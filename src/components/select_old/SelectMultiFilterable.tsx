import React from "react";

import { Box } from "../box";
import { Label } from "../label";
import { DropdownMenu } from "./components/DropdownMenu";
import { SelectInput } from "./components/SelectInput";
import { DownshiftProviderMulti } from "./context/DownshiftProviderMulti";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { InputProps } from "../input";
import type { DropdownItemShape } from "./types";

export interface SelectMultiFilterableProps
  extends Omit<InputProps, "value" | "slotRight">,
    SprinklesArgs {
  items: Array<DropdownItemShape>;
  initialValue?: Array<DropdownItemShape>;
  onValueChange?(...args: Array<unknown>): unknown;
  onSelectItem?(...args: Array<unknown>): unknown;
  selectedItems?: Array<DropdownItemShape>;
  label?: string;
}

export function SelectMultiFilterable({
  items,
  onValueChange,
  onSelectItem,
  initialValue,
  id,
  disabled,
  slotLeft,
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
          slotLeft={slotLeft}
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
