import { extractAtomsFromProps } from "@dessert-box/core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useCombobox } from "downshift";
import React, { forwardRef, useCallback, useMemo, useState } from "react";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../box";
import { Icon } from "../icon";
import { Input } from "../input";
import { Label } from "../label";
import { downshiftStateReducer } from "./downshift_state_reducer";
import { DropdownMenu } from "./dropdown_menu.component";
import { getDefaultHighlightedIndex } from "./get_default_highlighted_index";
import { getFilteredDropdownItems } from "./get_filtered_dropdown_items";
import { getIsSelected } from "./get_is_selected";

import type { VariantUiScaleEnum } from "../../styles/common/globalVariantsUiScale.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { InputProps } from "../input";
import type { DropdownItemShape } from "../select_old/types";
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
  id: string;
  items: Array<DropdownItemShape>;
  name: string;
  placeholder: string;

  disabled?: boolean;
  errorMessage?: string;
  slotLeft?: React.ReactNode;
  initialHighlightedItem?: DropdownItemShape;
  initialSelectedItem?: DropdownItemShape | null;
  inputProps?: Partial<InputProps>;
  invalid?: boolean;
  isFilterable?: boolean;
  isMulti?: true;
  isOpen?: boolean;
  itemToString?: (item: DropdownItemShape | null) => string;
  label?: string;
  onIsOpenChange?: (changes: UseComboboxStateChange<DropdownItemShape>) => void;
  onSelectedItemChange?: (
    changes: UseComboboxStateChange<DropdownItemShape>
  ) => void;
  size?: VariantUiScaleEnum;
}

const INPUT_SLOT_RIGHT = <Icon icon={faAngleDown} />;

/** Accessible select component, supports multi & single modes. */
export const SelectSingle = forwardRef(
  (
    {
      disabled,
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
        return downshiftStateReducer(state, actionAndChanges, {});
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
      <Box position="relative" {...rest}>
        {label && <Label htmlFor={id} label={label} />}

        <Input
          size={size}
          slotLeft={slotLeft}
          slotRight={INPUT_SLOT_RIGHT}
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

        <DropdownMenu
          getIsItemSelected={getIsItemSelected}
          getItemProps={getItemProps}
          getMenuProps={getMenuProps}
          highlightedIndex={highlightedIndex}
          isOpen={isOpen}
          items={filteredItems}
          size={size}
        />
      </Box>
    );
  }
);
