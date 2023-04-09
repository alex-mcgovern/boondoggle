import React, { forwardRef } from "react";

import { Box } from "../box";
import { Label } from "../label";
import { DropdownMenu } from "./components/DropdownMenu";
import { SelectInput } from "./components/SelectInput";
import { DownshiftContext } from "./context/DownshiftContext";
import { DownshiftProviderCreatable } from "./context/DownshiftProviderCreatable";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { ButtonProps } from "../button/button.component";
import type { InputProps } from "../input_component";
import type { DropdownItemShape } from "./types";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { Ref } from "react";

export interface SelectSingleCreatableProps {
  /** FontAwesome icon shown on the left side of select. */
  slotLeft?: IconProp;
  /** HTML id attribute */
  id: string;
  /** Initial value for the select */
  initialInputValue?: string;
  /** HTML disabled attribute for the select element. */
  disabled?: boolean;
  /** An array of Downshift compatible options */
  items: Array<DropdownItemShape>;
  /** a11y name for the select element */
  name: string;
  placeholder: string;
  /** Callback when an item is selected */
  onSelectItem?(selectedItem: DropdownItemShape): void;
  onValueChange?(selectedItem: DropdownItemShape): void;
  buttonProps?: ButtonProps;
  buttonText?: string;
  invalid?: boolean;
  errorMessage?: string;
  label?: string;
  size?: InputProps["size"];
  wrapperProps?: SprinklesArgs;
}

export const SelectSingleCreatable = forwardRef(
  (
    {
      onValueChange,
      onSelectItem,
      disabled,
      errorMessage,
      slotLeft,
      id,
      initialInputValue,
      invalid,
      items,
      label,
      name,
      placeholder,
      size = "md",
      ...rest
    }: SelectSingleCreatableProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <DownshiftProviderCreatable
        items={items}
        onSelectItem={onSelectItem}
        onValueChange={onValueChange}
        initialInputValue={initialInputValue}
      >
        <DownshiftContext.Consumer>
          {({ selectedItem }) => {
            return (
              <Box position="relative" {...rest}>
                {label && <Label htmlFor={id} label={label} />}
                <SelectInput
                  disabled={disabled}
                  slotLeft={slotLeft}
                  id={id}
                  invalid={invalid}
                  name={name}
                  errorMessage={errorMessage}
                  placeholder={selectedItem?.value.toString() || placeholder}
                  size={size}
                  ref={ref}
                />

                <DropdownMenu size={size} />
              </Box>
            );
          }}
        </DownshiftContext.Consumer>
      </DownshiftProviderCreatable>
    );
  }
);
