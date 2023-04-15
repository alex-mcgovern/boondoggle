import { extractAtomsFromProps } from "@dessert-box/core";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useCombobox, useMultipleSelection } from "downshift";
import { forwardRef, useCallback, useMemo, useState } from "react";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../box";
import { Icon } from "../icon";
import { Input } from "../input";
import { Label } from "../label";
import { DropdownMenu } from "./select.shared_components";
import {
  downshiftStateReducer,
  getDefaultHighlightedIndex,
  getDisplayValue,
  getFilteredDropdownItems,
  getIsSelected,
} from "./select.utils";

import type { ElementSizeEnum } from "../../styles/common/element_size.css";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { InputProps } from "../input";
import type { DropdownItemShape } from "./select.types";
import type {
  UseComboboxStateChange,
  UseMultipleSelectionStateChange,
} from "downshift";
import type { ReactNode, Ref } from "react";

export interface SelectMultipleProps extends SprinklesArgs {
  disabled?: boolean;
  errorMessage?: string;
  id: string;
  initialHighlightedItem?: DropdownItemShape;
  initialSelectedItem?: never;
  initialSelectedItems?: Array<DropdownItemShape>;
  inputProps?: Partial<InputProps>;
  invalid?: boolean;
  isFilterable?: boolean;
  isMulti?: true;
  isOpen?: boolean;
  items: Array<DropdownItemShape>;
  itemToString?: (item: DropdownItemShape | null) => string;
  label?: string;
  name: string;
  onChange?: (
    changes: UseMultipleSelectionStateChange<DropdownItemShape>
  ) => void;
  onIsOpenChange?: (changes: UseComboboxStateChange<DropdownItemShape>) => void;
  placeholder: string;
  size?: ElementSizeEnum;
  slotLeft?: ReactNode;
}

/** Accessible select component, supports multi & single modes. */
export const SelectMultiple = forwardRef(
  (
    {
      disabled,
      slotLeft,
      id,
      initialHighlightedItem,
      initialSelectedItems = [],
      inputProps,
      invalid,
      isFilterable,
      isOpen: controlledIsOpen,
      items,
      label,
      name,
      onIsOpenChange,
      onChange,
      placeholder,
      size,
      ...rest
    }: SelectMultipleProps,
    ref: Ref<HTMLInputElement>
  ) => {
    /** Vanilla extract styling stuff */
    const { atomProps: inputAtomProps, otherProps: inputOtherProps } =
      extractAtomsFromProps(inputProps, getSprinkles);

    /** Externally controlled state for downshift and {@link Input} component */
    const [inputValue, setInputValue] = useState("");
    const [inputPlaceholder, setInputPlaceholder] = useState(placeholder);

    /**
     * ------------------------------------------------------------------------------
     * Callback to update input value and call `onChange` (if provided) when selected items change.
     * ------------------------------------------------------------------------------
     */
    const onSelectedItemsChange = useCallback(
      (changes: UseMultipleSelectionStateChange<DropdownItemShape>) => {
        if (onChange) {
          onChange(changes);
        }
        setInputPlaceholder(
          getDisplayValue({
            originalValue: placeholder,
            length: changes?.selectedItems?.length,
          })
        );
      },
      [onChange, placeholder]
    );

    /**
     * ------------------------------------------------------------------------------
     * Downshift `useMultipleSelection` hook
     * @see https://www.downshift-js.com/use-multiple-selection
     * ------------------------------------------------------------------------------
     */
    const {
      getSelectedItemProps,
      getDropdownProps,
      removeSelectedItem,
      selectedItems,
      setSelectedItems,
    } = useMultipleSelection<DropdownItemShape>({
      onSelectedItemsChange,
      initialSelectedItems,
    });

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

    /**
     * ------------------------------------------------------------------------------
     * Downshift `useCombobox` hook
     * @see https://www.downshift-js.com/use-combobox
     * ------------------------------------------------------------------------------
     */
    const {
      isOpen,

      toggleMenu,
      getMenuProps,
      getInputProps,
      highlightedIndex,
      getItemProps,
    } = useCombobox<DropdownItemShape>({
      defaultHighlightedIndex: getDefaultHighlightedIndex({
        initialHighlightedItem,
        items,
      }),
      items: filteredItems,
      isOpen: controlledIsOpen,
      onIsOpenChange,
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
              setSelectedItems([...selectedItems, newSelectedItem]);
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
      selectedItem: null,
      stateReducer: (state, actionAndChanges) => {
        return downshiftStateReducer(state, actionAndChanges, {
          isMulti: true,
        });
      },
    });

    /**
     * ------------------------------------------------------------------------------
     * Util function for checking if item is selected, passed down to DropdownItemShape via DropdownMenu
     * ------------------------------------------------------------------------------
     */
    const getIsItemSelected = useCallback(
      (item: DropdownItemShape) => {
        return getIsSelected({
          item,
          isMulti: true,
          selectedItems,
        });
      },
      [selectedItems]
    );

    /**
     * ------------------------------------------------------------------------------
     * Markup for Select component
     * ------------------------------------------------------------------------------
     */
    return (
      <Box position="relative" {...rest}>
        {label && <Label htmlFor={id} label={label} />}

        <Input
          size={size}
          slotLeft={slotLeft}
          slotRight={<Icon icon={faAngleDown} />}
          readOnly={!isFilterable}
          invalid={invalid}
          {...inputAtomProps}
          {...getInputProps?.({
            ...getDropdownProps({ preventKeyAction: isOpen, ref }),
            ...inputOtherProps,
            disabled,
            id,
            name,
            onClick: toggleMenu,
            placeholder: inputPlaceholder,
            value: inputValue,
          })}
        />

        <DropdownMenu
          getSelectedItemProps={getSelectedItemProps}
          getIsItemSelected={getIsItemSelected}
          getItemProps={getItemProps}
          getMenuProps={getMenuProps}
          highlightedIndex={highlightedIndex}
          isOpen={isOpen}
          removeSelectedItem={removeSelectedItem}
          items={filteredItems}
          isMulti
          size={size}
        />
      </Box>
    );
  }
);
