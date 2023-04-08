import React, { forwardRef } from "react";

import { Box } from "../Box";
import { Label } from "../Label";
import { DropdownMenu } from "./components/DropdownMenu";
import { SelectInput } from "./components/SelectInput";
import { DownshiftContext } from "./context/DownshiftContext";
import { DownshiftProviderCreatable } from "./context/DownshiftProviderCreatable";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { InputProps } from "../Input";
import type { ButtonProps } from "../button/button.component";
import type { DropdownItem } from "./types";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { Ref } from "react";

export interface SelectSingleCreatableProps {
  /** FontAwesome icon shown on the left side of select. */
  iconLeft?: IconProp;
  /** HTML id attribute */
  id: string;
  /** Initial value for the select */
  initialInputValue?: string;
  /** HTML disabled attribute for the select element. */
  disabled?: boolean;
  /** An array of Downshift compatible options */
  items: Array<DropdownItem>;
  /** a11y name for the select element */
  name: string;
  placeholder: string;
  /** Callback when an item is selected */
  onSelectItem?(selectedItem: DropdownItem): void;
  onValueChange?(selectedItem: DropdownItem): void;
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
      iconLeft,
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
                  iconLeft={iconLeft}
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
