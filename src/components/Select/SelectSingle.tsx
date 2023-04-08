import React, { forwardRef } from "react";

import { Box } from "../Box";
import { InputErrorMessage } from "../InputErrorMessage";
import { Label } from "../Label";
import { DropdownMenu } from "./components/DropdownMenu";
import { SelectToggleButton } from "./components/SelectToggleButton";
import { DownshiftContext } from "./context/DownshiftContext";
import { DownshiftProviderSingle } from "./context/DownshiftProviderSingle";

import type { ButtonProps } from "../button/Button";
import type { DropdownItem } from "./types";

export interface SelectSingleProps
  extends Omit<ButtonProps, "onChange" | "color" | "iconRight"> {
  buttonProps?: ButtonProps;
  errorMessage?: string;
  id: string;
  initialValue?: DropdownItem;
  invalid?: boolean;
  /** An array of Downshift compatible options */
  items: Array<DropdownItem>;
  /** a11y name for select element */
  name: string;
  label?: string;
  /** Callback when an item is selected */
  onValueChange?(selectedItem: DropdownItem): void;
  placeholder: string;
}

export const SelectSingle = forwardRef(
  (
    {
      buttonProps = {
        appearance: "select",
      },
      placeholder,
      label,
      disabled,
      iconLeft,
      initialValue,
      id,
      invalid,
      errorMessage,
      items,
      name,
      onValueChange,
      justifyContent = "space-between",
      size = "md",
      width = "100%",
      ...rest
    }: SelectSingleProps,
    ref
  ) => {
    return (
      <DownshiftProviderSingle
        items={items}
        onValueChange={onValueChange}
        initialValue={initialValue}
      >
        <DownshiftContext.Consumer>
          {({ selectedItem }) => {
            return (
              <Box position="relative" {...rest}>
                {label && <Label htmlFor={id} label={label} />}
                <SelectToggleButton
                  disabled={disabled}
                  iconLeft={iconLeft}
                  id={id}
                  invalid={invalid}
                  name={name}
                  ref={ref}
                  size={size}
                  width={width}
                  justifyContent={justifyContent}
                  {...buttonProps}
                >
                  {selectedItem?.value || placeholder}
                </SelectToggleButton>
                {invalid && errorMessage && (
                  <InputErrorMessage message={errorMessage} />
                )}

                <DropdownMenu size={size} />
              </Box>
            );
          }}
        </DownshiftContext.Consumer>
      </DownshiftProviderSingle>
    );
  }
);
