import { extractAtomsFromProps } from "@dessert-box/core";
import { useSelect } from "downshift";
import { forwardRef, useCallback } from "react";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../box";
import { Button } from "../button";
import { getDefaultHighlightedIndex, getIsSelected } from "./select_utils";
import { DEFAULT_SLOT_RIGHT } from "./shared/DEFAULT_SLOT_RIGHT";
import { DropdownMenu } from "./shared/dropdown_menu/dropdown_menu.comp";
import { useSelectPopper } from "./shared/use_select_popper";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { ButtonProps } from "../button";
import type { DropdownItemShape, SelectCommonProps } from "./select.types";
import type { UseSelectPlacement } from "./shared/use_select_popper";
import type { UseSelectStateChange } from "downshift";
import type { Ref } from "react";

export type SelectButtonProps = Omit<
  SelectCommonProps,
  "inputProps" | "invalid" | "isFilterable" | "label" | "errorMessage"
> &
  SprinklesArgs & {
    onIsOpenChange?: (changes: UseSelectStateChange<DropdownItemShape>) => void;
    onChange?: (changes: UseSelectStateChange<DropdownItemShape>) => void;
    buttonText?: string;
    buttonProps?: ButtonProps;
    placement?: UseSelectPlacement;
  };

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
      placement,
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
    } = useSelectPopper({ placement });

    return (
      <Box ref={setPopperAnchorEl} {...rest}>
        <Button
          size={size}
          slotLeft={slotLeft}
          slotRight={slotRight}
          slotProps={{ gap: "none" }}
          {...buttonAtomProps}
          {...getToggleButtonProps?.({
            ...buttonOtherProps,
            disabled,
            id,
            name,
            "aria-label": name,
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
