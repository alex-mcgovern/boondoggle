import { extractAtomsFromProps } from "@dessert-box/core";
import { useSelect } from "downshift";
import { forwardRef, useCallback, useState } from "react";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
import { Box } from "../Box";
import { Button, type ButtonProps } from "../Button";
import { SelectItemList } from "../SelectItemList";
import {
  getDefaultHighlightedIndex,
  getIsSelected,
} from "../field.select/select_utils";
import { DEFAULT_SLOT_RIGHT } from "../field.select/shared/DEFAULT_SLOT_RIGHT";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { DialogPlacementEnum } from "../Dialog/styles.css";
import type { SelectCommonProps, SelectItemShape } from "../field.select/types";
import type { UseSelectStateChange } from "downshift";
import type { LegacyRef, Ref } from "react";

export type SelectButtonProps = Omit<
  SelectCommonProps,
  "inputProps" | "invalid" | "isFilterable" | "label" | "errorMessage"
> &
  SprinklesArgs & {
    buttonProps?: ButtonProps;
    buttonText?: string;
    initialSelectedItem?: SelectItemShape | null;
    onChange?: (changes: UseSelectStateChange<SelectItemShape>) => void;
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
      (item: SelectItemShape) => {
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
        <SelectItemList
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
