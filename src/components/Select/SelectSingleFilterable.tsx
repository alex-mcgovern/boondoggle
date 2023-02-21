import type { Ref } from "react";
import React, { forwardRef } from "react";
import type { IconProp } from "@fortawesome/fontawesome-svg-core";
import type { GetSprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../Box";
import type { ButtonProps } from "../Button";
import type { InputProps } from "../Input";
import { Label } from "../Label";
import { DropdownMenu } from "./components/DropdownMenu";
import { SelectInput } from "./components/SelectInput";
import { DownshiftContext } from "./context/DownshiftContext";
import { DownshiftProviderSingleFilterable } from "./context/DownshiftProviderSingleFilterable";
import type { DropdownItem } from "./types";

export interface SelectSingleFilterableProps {
  /** FontAwesome icon shown on the left side of select. */
  iconLeading?: IconProp;
  /** FontAwesome icon shown on the right side of select. */
  iconTrailing?: IconProp;
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
  onSelectItem?(selectedItem: DropdownItem): DropdownItem;
  onValueChange?(...args: Array<DropdownItem>): Array<DropdownItem>;
  buttonProps?: ButtonProps;
  buttonText?: string;
  invalid?: boolean;
  errorMessage?: string;
  label?: string;
  size?: InputProps["size"];
  wrapperProps?: GetSprinklesArgs;
}

export const SelectSingleFilterable = forwardRef(
  (
    {
      onValueChange,
      onSelectItem,
      disabled,
      errorMessage,
      iconLeading,
      id,
      initialInputValue,
      invalid,
      items,
      label,
      name,
      placeholder,
      size = "md",
      ...rest
    }: SelectSingleFilterableProps,
    ref: Ref<HTMLInputElement>
  ) => {
    return (
      <DownshiftProviderSingleFilterable
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
                  iconLeading={iconLeading}
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
      </DownshiftProviderSingleFilterable>
    );
  }
);
