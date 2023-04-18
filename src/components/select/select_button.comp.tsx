import { extractAtomsFromProps } from "@dessert-box/core";
import { useSelect } from "downshift";
import { forwardRef, useCallback } from "react";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../box";
import { Button } from "../button";
import {
  DEFAULT_SLOT_RIGHT,
  DropdownMenu,
  useSelectPopper,
} from "./select_shared.comp";
import { getDefaultHighlightedIndex, getIsSelected } from "./select_utils";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { ButtonProps } from "../button";
import type { DropdownItemShape, SelectCommonProps } from "./select.types";
import type { UseSelectStateChange } from "downshift";
import type { Ref } from "react";

export interface SelectButtonProps
  extends Omit<
      SelectCommonProps,
      "inputProps" | "invalid" | "isFilterable" | "label" | "errorMessage"
    >,
    SprinklesArgs {
  onIsOpenChange?: (changes: UseSelectStateChange<DropdownItemShape>) => void;
  onChange?: (changes: UseSelectStateChange<DropdownItemShape>) => void;
  buttonText?: string;
  buttonProps?: ButtonProps;
}

/** Accessible select component, supports multi & single modes. */
export const SelectButton = forwardRef(
  (
    {
      disabled,
      id,
      initialHighlightedItem,
      buttonProps,
      items,
      name,
      onIsOpenChange,
      onChange,
      buttonText,
      size,
      slotLeft,
      slotRight = DEFAULT_SLOT_RIGHT,
      ...rest
    }: SelectButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    const { atomProps: buttonAtomProps, otherProps: buttonOtherProps } =
      extractAtomsFromProps(buttonProps, getSprinkles);

    /** Initialise downshift `useSelect` hook */
    const {
      getToggleButtonProps,
      getItemProps,
      getMenuProps,
      highlightedIndex,
      selectedItem,
      selectItem,
      isOpen,
    } = useSelect({
      defaultHighlightedIndex: getDefaultHighlightedIndex({
        initialHighlightedItem,
        items,
      }),

      items,
      onIsOpenChange,
      onSelectedItemChange: onChange,
      onStateChange({ type, selectedItem: newSelectedItem }) {
        switch (type) {
          case useSelect.stateChangeTypes.ItemClick:
            if (newSelectedItem) {
              selectItem(newSelectedItem);
            }
            break;

          default:
            break;
        }
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
    } = useSelectPopper();

    return (
      <Box position="relative" ref={setPopperAnchorEl} {...rest}>
        <Button
          size={size}
          slotLeft={slotLeft}
          slotRight={slotRight}
          {...buttonAtomProps}
          {...getToggleButtonProps?.({
            ...buttonOtherProps,
            disabled,
            id,
            name,
            ref,
          })}
        >
          {buttonText}
        </Button>

        <DropdownMenu
          style={popperStyles.popper}
          getIsItemSelected={getIsItemSelected}
          getItemProps={getItemProps}
          getMenuProps={getMenuProps}
          highlightedIndex={highlightedIndex}
          isOpen={isOpen}
          items={items}
          size={size}
          ref={setPopperElement}
          {...popperAttributes.popper}
        />
      </Box>
    );
  }
);
