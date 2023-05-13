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
  downshiftStateReducer,
  getDefaultHighlightedIndex,
  getDisplayValue,
  getFilteredDropdownItems,
  getIsSelected,
} from "./select_utils";
import { DEFAULT_SLOT_RIGHT } from "./shared/DEFAULT_SLOT_RIGHT";
import { DropdownMenu } from "./shared/dropdown_menu/dropdown_menu.comp";
import { useSelectPopper } from "./shared/use_select_popper";

import type { InputCustomisation } from "../input/input.comp";
import type { DropdownItemShape, SelectCommonProps } from "./select.types";
import type { UsePopperPlacement } from "./shared/use_select_popper";
import type {
  UseComboboxStateChange,
  UseMultipleSelectionStateChange,
} from "downshift";
import type { Ref } from "react";

export type SelectMultiProps = SelectCommonProps &
  InputCustomisation & {
    initialSelectedItems?: Array<DropdownItemShape>;
    itemToString?: (item: DropdownItemShape | null) => string;
    onChange?: (
      changes: UseMultipleSelectionStateChange<DropdownItemShape>
    ) => void;
    onIsOpenChange?: (
      changes: UseComboboxStateChange<DropdownItemShape>
    ) => void;
    placeholder: string;
    placement?: UsePopperPlacement;
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
      placement,
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
        length: initialSelectedItems?.length,
        originalValue: placeholder,
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
            length: changes?.selectedItems?.length,
            originalValue: placeholder,
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
      initialSelectedItems,
      onSelectedItemsChange,
    });

    /**
     * When `isFilterable` is true, we need to filter the items based on the input value.
     */
    const filteredItems = useMemo(() => {
      if (!items || !isFilterable) {
        return items;
      }

      return getFilteredDropdownItems({ inputValue, items });
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
          isMulti: true,
          item,
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
    } = useSelectPopper({ placement });

    return (
      <Box
        className={clsx({ [getTheme({ colorOverlay: "red" })]: invalid })}
        color="text_low_contrast"
        ref={setPopperAnchorEl}
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
          invalid={invalid}
          readOnly={!isFilterable}
          size={size}
          slotLeft={slotLeft}
          slotRight={slotRight}
          {...inputAtomProps}
          inputProps={getInputProps({
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
          getIsItemSelected={getIsItemSelected}
          getItemProps={getItemProps}
          getMenuProps={getMenuProps}
          getSelectedItemProps={getSelectedItemProps}
          highlightedIndex={highlightedIndex}
          isMulti
          isOpen={isOpen}
          items={filteredItems}
          ref={setPopperElement}
          removeSelectedItem={removeSelectedItem}
          size={size}
          style={popperStyles.popper}
          {...popperAttributes.popper}
        />

        {invalid && errorMessage && (
          <InputErrorMessage message={errorMessage} />
        )}
      </Box>
    );
  }
);
