import { extractAtomsFromProps } from "@dessert-box/core";
import clsx from "clsx";
import { useCombobox } from "downshift";
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
  getFilteredDropdownItems,
  getIsSelected,
} from "./select_utils";
import { DEFAULT_SLOT_RIGHT } from "./shared/DEFAULT_SLOT_RIGHT";
import { DropdownMenu } from "./shared/dropdown_menu/dropdown_menu.comp";
import { useSelectPopper } from "./shared/use_select_popper";

import type { InputCustomisation } from "../input/input.comp";
import type { DropdownItemShape, SelectCommonProps } from "./select.types";
import type { UsePopperPlacement } from "./shared/use_select_popper";
import type { UseComboboxStateChange } from "downshift";
import type { Ref } from "react";

/**
 * Util function for transforming a dropdown item into a string (for use as a `value` for {@link Input}).
 * Can be overridden by passing a custom `itemToString` prop to the `SelectSingle` component.
 */
const defaultItemToString = (item: DropdownItemShape | null) => {
  return item?.label || "";
};

export type SelectSingleProps = SelectCommonProps &
  InputCustomisation & {
    initialSelectedItem?: DropdownItemShape | null;
    itemToString?: (item: DropdownItemShape | null) => string;
    onIsOpenChange?: (
      changes: UseComboboxStateChange<DropdownItemShape>
    ) => void;
    onChange?: (changes: UseComboboxStateChange<DropdownItemShape>) => void;
    placeholder: string;
    placement?: UsePopperPlacement;
  };

/** Accessible select component, supports multi & single modes. */
export const SelectSingle = forwardRef(
  (
    {
      disabled,
      errorMessage,
      id,
      initialHighlightedItem,
      initialSelectedItem,
      invalid,
      isFilterable,
      placement,
      items,
      itemToString = defaultItemToString,
      label,
      name,
      onChange,
      onIsOpenChange,
      placeholder,
      size,
      slotLeft,
      slotRight = DEFAULT_SLOT_RIGHT,
      wrapperProps,
      inputProps,
      ...rest
    }: SelectSingleProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const { atomProps: inputAtomProps, otherProps: inputOtherProps } =
      extractAtomsFromProps(inputProps, getSprinkles);

    const [inputValue, setInputValue] = useState(
      initialSelectedItem?.value || ""
    );

    // Filter dropdown items based on input if `isFilterable` is true
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
      getLabelProps,
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
      items: filteredItems,
      itemToString,
      onIsOpenChange,
      onSelectedItemChange: onChange,
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
              setInputValue(newSelectedItem.value);
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
        {...wrapperProps}
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
          ref={setPopperAnchorEl}
          invalid={invalid}
          inputProps={inputAtomProps}
          textTransform="capitalize"
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
            ...rest,
          })}
        />

        {invalid && errorMessage && (
          <InputErrorMessage message={errorMessage} />
        )}

        <DropdownMenu
          style={popperStyles.popper}
          getIsItemSelected={getIsItemSelected}
          getItemProps={getItemProps}
          getMenuProps={getMenuProps}
          highlightedIndex={highlightedIndex}
          isOpen={isOpen}
          items={filteredItems}
          size={size}
          ref={setPopperElement}
          {...popperAttributes.popper}
        />
      </Box>
    );
  }
);
