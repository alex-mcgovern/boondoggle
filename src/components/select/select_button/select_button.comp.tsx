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

export const SelectButton = forwardRef(
  (
    {
      buttonProps,
      buttonText,
      disabled,
      id,
      initialHighlightedItem,
      initialSelectedItem,
      items,
      name,
      onChange,
      placement = "bottom-start",
      size,
      slotLeft,
      slotRight = DEFAULT_SLOT_RIGHT,
      wrapperProps,
    }: SelectButtonProps,
    ref: Ref<HTMLButtonElement>
  ) => {
    const [selectedItem, setSelectedItem] = useState(
      initialSelectedItem ||
        items.find((item) => {
          return item.isSelected;
        }) ||
        null
    );

    /** --------------------------------------------- */

    const [isOpen, setIsOpen] = useState(false);

    const { atomProps: buttonAtomProps, otherProps: buttonOtherProps } =
      extractAtomsFromProps(buttonProps, getSprinkles);

    /** --------------------------------------------- */

    const {
      getItemProps,
      getMenuProps,
      getToggleButtonProps,
      highlightedIndex,
      toggleMenu,
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
      onStateChange({ selectedItem: newSelectedItem, type }) {
        switch (type) {
          case useSelect.stateChangeTypes.ToggleButtonClick:
          case useSelect.stateChangeTypes.ToggleButtonKeyDownArrowDown:
            setIsOpen(true);
            break;
          case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
            if (newSelectedItem) {
              if (newSelectedItem.onClick) {
                newSelectedItem.onClick();
              }
              setSelectedItem(newSelectedItem);
            }
            setIsOpen((current) => {
              return !current;
            });
            break;

          case useSelect.stateChangeTypes.ItemClick:
            if (newSelectedItem) {
              if (newSelectedItem.onClick) {
                newSelectedItem.onClick();
              }
              setSelectedItem(newSelectedItem);
            }
            setIsOpen(false);
            break;

          default:
            break;
        }
      },
    });

    /** --------------------------------------------- */

    const getIsItemSelected = useCallback(
      (item: DropdownItemShape) => {
        return getIsSelected({
          item,
          selectedItem,
        });
      },
      [selectedItem]
    );

    /** --------------------------------------------- */

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
