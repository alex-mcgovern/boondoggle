import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { useCombobox, useMultipleSelection } from "downshift";
import { forwardRef, useCallback, useMemo, useState } from "react";

import { getTheme } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../box";
import { Input } from "../input";
import { InputErrorMessage } from "../input_error_message";
import { Label } from "../label";
import {
  DEFAULT_SLOT_RIGHT,
  DropdownMenu,
  useSelectPopper,
} from "./select_shared.comp";
import {
  downshiftStateReducer,
  getDefaultHighlightedIndex,
  getDisplayValue,
  getFilteredDropdownItems,
  getIsSelected,
} from "./select_utils";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { DropdownItemShape, SelectCommonProps } from "./select.types";
import type {
  UseComboboxStateChange,
  UseMultipleSelectionStateChange,
} from "downshift";
import type { Ref } from "react";

export type SelectMultiProps = SelectCommonProps &
  SprinklesArgs & {
    initialSelectedItems?: Array<DropdownItemShape>;
    itemToString?: (item: DropdownItemShape | null) => string;
    onChange?: (
      changes: UseMultipleSelectionStateChange<DropdownItemShape>
    ) => void;
    onIsOpenChange?: (
      changes: UseComboboxStateChange<DropdownItemShape>
    ) => void;
    placeholder: string;
  };

export const SelectMulti = forwardRef(
  (
    {
      disabled,
      errorMessage,
      id,
      initialHighlightedItem,
      initialSelectedItems = [],
      inputProps,
      invalid,
      isFilterable,
      items,
      label,
      name,
      onChange,
      onIsOpenChange,
      placeholder,
      size,
      slotLeft,
      slotRight = DEFAULT_SLOT_RIGHT,
      ...rest
    }: SelectMultiProps,
    ref: Ref<HTMLInputElement>
  ) => {
    /** Vanilla extract styling stuff */
    const { atomProps: inputAtomProps, otherProps: inputOtherProps } =
      extractAtomsFromProps(inputProps, getSprinkles);

    /** Externally controlled state for downshift and {@link Input} component */
    const [inputValue, setInputValue] = useState("");
    const [inputPlaceholder, setInputPlaceholder] = useState(
      getDisplayValue({
        originalValue: placeholder,
        length: initialSelectedItems?.length,
      })
    );

    /**
     * Callback to update input value and call `onChange` (if provided) when selected items change.
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
     * Downshift `useMultipleSelection` hook
     * @see https://www.downshift-js.com/use-multiple-selection
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
     * When `isFilterable` is true, we need to filter the items based on the input value.
     */
    const filteredItems = useMemo(() => {
      if (!items || !isFilterable) {
        return items;
      }

      return getFilteredDropdownItems({ items, inputValue });
    }, [items, isFilterable, inputValue]);

    /**
     * Downshift `useCombobox` hook
     * @see https://www.downshift-js.com/use-combobox
     */
    const {
      isOpen,
      toggleMenu,
      getMenuProps,
      getInputProps,
      highlightedIndex,
      getItemProps,
      getLabelProps,
    } = useCombobox<DropdownItemShape>({
      defaultHighlightedIndex: getDefaultHighlightedIndex({
        initialHighlightedItem,
        items,
      }),
      items: filteredItems,
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
     * Util function for checking if item is selected, passed down to DropdownItemShape via DropdownMenu
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
     * Use popper.js to position the dropdown menu
     */
    const {
      setPopperAnchorEl,
      setPopperElement,
      popperStyles,
      popperAttributes,
    } = useSelectPopper();

    return (
      <Box
        className={clsx({ [getTheme({ colorOverlay: "red" })]: invalid })}
        ref={setPopperAnchorEl}
        position="relative"
        color="text_low_contrast"
        {...rest}
      >
        {label && (
          <Label
            {...getLabelProps({
              htmlFor: id,
              label,
            })}
          />
        )}

        <Input
          size={size}
          slotLeft={slotLeft}
          slotRight={slotRight}
          readOnly={!isFilterable}
          invalid={invalid}
          {...inputAtomProps}
          {...getInputProps?.({
            ...getDropdownProps({
              preventKeyAction: isOpen,
              ref,
            }),
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
          style={popperStyles.popper}
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
          ref={setPopperElement}
          {...popperAttributes.popper}
        />

        {invalid && errorMessage && (
          <InputErrorMessage message={errorMessage} />
        )}
      </Box>
    );
  }
);
