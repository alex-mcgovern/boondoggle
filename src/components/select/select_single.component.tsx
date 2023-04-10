import { extractAtomsFromProps } from "@dessert-box/core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useCombobox } from "downshift";
import React, { forwardRef, useCallback, useMemo, useState } from "react";
import { Popover } from "react-tiny-popover";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../box_component";
import { Icon } from "../icon";
import { Input } from "../input";
import { InputErrorMessage } from "../input_error_message";
import { Label } from "../label";
import { DropdownMenu } from "./dropdown_menu.component";
import {
  downshiftStateReducer,
  getDefaultHighlightedIndex,
  getFilteredDropdownItems,
  getIsSelected,
} from "./select.utils";

import type { SharedUiScale } from "../../styles/common/globalVariantsUiScale.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { InputProps } from "../input";
import type { DropdownItemShape } from "./select.types";
import type { UseComboboxStateChange } from "downshift";
import type { Ref } from "react";

/**
 * ------------------------------------------------------------------------------
 * Util function for transforming a dropdown item into a string (for use as a `value` for {@link Input}).
 * Can be overridden by passing a custom `itemToString` prop to the `SelectSingle` component.
 * ------------------------------------------------------------------------------
 */

const defaultItemToString = (item: DropdownItemShape | null) => {
  return item?.label || "";
};

export interface SelectSingleProps extends SprinklesArgs {
  disabled?: boolean;
  errorMessage?: string;
  id: string;
  initialHighlightedItem?: DropdownItemShape;
  initialSelectedItem?: DropdownItemShape | null;
  inputProps?: Partial<InputProps>;
  invalid?: boolean;
  isFilterable?: boolean;
  isMulti?: true;
  isOpen?: boolean;
  items: Array<DropdownItemShape>;
  itemToString?: (item: DropdownItemShape | null) => string;
  label?: string;
  name: string;
  onIsOpenChange?: (changes: UseComboboxStateChange<DropdownItemShape>) => void;
  placeholder: string;
  slotLeft?: React.ReactNode;
  slotRight?: React.ReactNode;

  onSelectedItemChange?: (
    changes: UseComboboxStateChange<DropdownItemShape>
  ) => void;
  size?: SharedUiScale;
}

const DEFAULT_SLOT_RIGHT = <Icon icon={faAngleDown} />;

/** Accessible select component, supports multi & single modes. */
export const SelectSingle = forwardRef(
  (
    {
      disabled,
      errorMessage,
      id,
      initialHighlightedItem,
      initialSelectedItem,
      inputProps,
      invalid,
      isFilterable,
      isOpen: controlledIsOpen,
      items,
      itemToString = defaultItemToString,
      label,
      name,
      onIsOpenChange,
      onSelectedItemChange,
      placeholder,
      size,
      slotLeft,
      slotRight = DEFAULT_SLOT_RIGHT,
      ...rest
    }: SelectSingleProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const { atomProps: inputAtomProps, otherProps: inputOtherProps } =
      extractAtomsFromProps(inputProps, getSprinkles);

    const [inputValue, setInputValue] = useState("");

    /**
     * ------------------------------------------------------------------------------
     * When `isFilterable` is true, we need to filter the items based on the input value.
     * ------------------------------------------------------------------------------
     */

    const filteredItems = useMemo(() => {
      if (!items || !isFilterable) {
        return items;
      }

      return getFilteredDropdownItems({ items, inputValue });
    }, [items, isFilterable, inputValue]);

    /** Initialise downshift `useCombobox` hook */
    const {
      getInputProps,
      getItemProps,
      getMenuProps,
      highlightedIndex,
      selectedItem,
      selectItem,
      isOpen,
      toggleMenu,
    } = useCombobox({
      defaultHighlightedIndex: getDefaultHighlightedIndex({
        initialHighlightedItem,
        items,
      }),
      initialSelectedItem,
      isOpen: controlledIsOpen,
      items: filteredItems,
      itemToString,
      onIsOpenChange,
      onSelectedItemChange,
      onStateChange({
        inputValue: newInputValue,
        type,
        selectedItem: newSelectedItem,
      }) {
        switch (type) {
          case useCombobox.stateChangeTypes.InputKeyDownEnter:
          case useCombobox.stateChangeTypes.ItemClick:
          case useCombobox.stateChangeTypes.InputBlur:
            if (newSelectedItem) {
              selectItem(newSelectedItem);
              setInputValue(newSelectedItem.label);
            }
            break;

          case useCombobox.stateChangeTypes.InputChange:
            if (typeof newInputValue !== "undefined") {
              setInputValue(newInputValue);
            }

            break;
          default:
            break;
        }
      },
      stateReducer: (state, actionAndChanges) => {
        return downshiftStateReducer(state, actionAndChanges);
      },
    });

    const getIsItemSelected = useCallback(
      (item: DropdownItemShape) => {
        return getIsSelected({
          item,
          selectedItem,
        });
      },
      [selectedItem]
    );

    return (
      <Box {...rest}>
        {label && <Label htmlFor={id} label={label} />}
        <Popover
          isOpen={isOpen}
          align="start"
          positions={["bottom"]} // preferred positions by priority
          content={
            <DropdownMenu
              getIsItemSelected={getIsItemSelected}
              getItemProps={getItemProps}
              getMenuProps={getMenuProps}
              highlightedIndex={highlightedIndex}
              isOpen={isOpen}
              items={filteredItems}
              size={size}
            />
          }
        >
          <Input
            size={size}
            slotLeft={slotLeft}
            slotRight={slotRight}
            readOnly={!isFilterable}
            invalid={invalid}
            {...inputAtomProps}
            {...getInputProps?.({
              ...inputOtherProps,
              disabled,
              id,
              name,
              onClick: toggleMenu,
              placeholder,
              ref,
              value: inputValue,
            })}
          />
        </Popover>
        {invalid && errorMessage && (
          <InputErrorMessage message={errorMessage} />
        )}
      </Box>
    );
  }
);
