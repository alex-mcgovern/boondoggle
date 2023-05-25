import { extractAtomsFromProps } from "@dessert-box/core";
import { useSelect } from "downshift";
import { forwardRef, useCallback, useState } from "react";

import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";
import { Button } from "../../button";
import { getDefaultHighlightedIndex, getIsSelected } from "../select_utils";
import { DEFAULT_SLOT_RIGHT } from "../shared/DEFAULT_SLOT_RIGHT";
import { DropdownMenu } from "../shared/dropdown_menu/dropdown_menu.comp";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";
import type { ButtonProps } from "../../button";
import type { DialogPlacementEnum } from "../../dialog/dialog.styles.css";
import type { DropdownItemShape, SelectCommonProps } from "../select.types";
import type { UseSelectStateChange } from "downshift";
import type { LegacyRef, Ref } from "react";

export type SelectButtonProps = Omit<
  SelectCommonProps,
  "inputProps" | "invalid" | "isFilterable" | "label" | "errorMessage"
> &
  SprinklesArgs & {
    buttonProps?: ButtonProps;
    buttonText?: string;
    initialSelectedItem?: DropdownItemShape | null;
    onChange?: (changes: UseSelectStateChange<DropdownItemShape>) => void;
    placement?: DialogPlacementEnum;
    wrapperProps?: SprinklesArgs;
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
      placement = "bottom-start",
      onChange,
      buttonText,
      size,
      initialSelectedItem,
      slotLeft,
      wrapperProps,
      slotRight = DEFAULT_SLOT_RIGHT,
    }: SelectButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    const [selectedItem, setSelectedItem] = useState(
      initialSelectedItem || null
    );
    const [isOpen, setIsOpen] = useState(false);

    const { atomProps: buttonAtomProps, otherProps: buttonOtherProps } =
      extractAtomsFromProps(buttonProps, getSprinkles);

    /** Initialise downshift `useSelect` hook */
    const {
      getToggleButtonProps,
      getItemProps,
      getMenuProps,
      toggleMenu,
      highlightedIndex,
    } = useSelect({
      defaultHighlightedIndex: getDefaultHighlightedIndex({
        initialHighlightedItem,
        items,
        selectedItem,
      }),
      initialSelectedItem,
      isOpen,
      items,
      onSelectedItemChange: onChange,
      onStateChange({ type, selectedItem: newSelectedItem }) {
        switch (type) {
          case useSelect.stateChangeTypes.ToggleButtonClick:
          case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
          case useSelect.stateChangeTypes.ToggleButtonKeyDownArrowDown:
            setIsOpen(true);
            break;

          case useSelect.stateChangeTypes.ItemClick:
            if (newSelectedItem) {
              setSelectedItem(newSelectedItem);
            }
            setIsOpen(false);
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

    /** -----------------------------------------------------------------------------
     * Layout for SelectButton component
     * ------------------------------------------------------------------------------- */

    return (
      <Box {...wrapperProps}>
        <DropdownMenu
          getIsItemSelected={getIsItemSelected}
          getItemProps={getItemProps}
          getMenuProps={getMenuProps}
          highlightedIndex={highlightedIndex}
          isOpen={isOpen}
          items={items}
          placement={placement}
          size={size}
          triggerNode={
            <Button
              size={size}
              slotLeft={slotLeft}
              slotProps={{ gap: "none" }}
              slotRight={slotRight}
              {...buttonAtomProps}
              {...getToggleButtonProps?.({
                ...buttonOtherProps,
                disabled,
                id,
                name,
                onClick: toggleMenu,
                ref: ref as LegacyRef<HTMLButtonElement>,
              })}
            >
              {buttonText}
            </Button>
          }
        />
      </Box>
    );
  }
);
