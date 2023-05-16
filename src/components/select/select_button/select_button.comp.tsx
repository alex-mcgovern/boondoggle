import { extractAtomsFromProps } from "@dessert-box/core";
import { useSelect } from "downshift";
import { forwardRef, useCallback, useMemo } from "react";

import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Button } from "../../button";
import { getDefaultHighlightedIndex, getIsSelected } from "../select_utils";
import { DEFAULT_SLOT_RIGHT } from "../shared/DEFAULT_SLOT_RIGHT";
import { DropdownMenu } from "../shared/dropdown_menu/dropdown_menu.comp";

import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";
import type { ButtonProps } from "../../button";
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
    onChange?: (changes: UseSelectStateChange<DropdownItemShape>) => void;
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
      onChange,
      buttonText,
      size,
      slotLeft,
      slotRight = DEFAULT_SLOT_RIGHT,
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
      toggleMenu,
      selectItem,
      highlightedIndex,
      selectedItem,
      isOpen,
    } = useSelect({
      defaultHighlightedIndex: getDefaultHighlightedIndex({
        initialHighlightedItem,
        items,
      }),
      items,
      onSelectedItemChange: onChange,
      onStateChange({ type, selectedItem: newSelectedItem }) {
        switch (type) {
          // case useSelect.stateChangeTypes.ToggleButtonKeyDownEnter:
          case useSelect.stateChangeTypes.ItemClick:
            // case useSelect.stateChangeTypes.ToggleButtonBlur:
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

    /** -----------------------------------------------------------------------------
     * Trigger node (Button) for SelectButton component
     * ------------------------------------------------------------------------------- */

    const triggerNode = useMemo(() => {
      return (
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
      );
    }, [
      buttonAtomProps,
      buttonOtherProps,
      buttonText,
      disabled,
      getToggleButtonProps,
      id,
      name,
      ref,
      size,
      slotLeft,
      slotRight,
      toggleMenu,
    ]);

    /** -----------------------------------------------------------------------------
     * Layout for SelectButton component
     * ------------------------------------------------------------------------------- */

    return (
      <DropdownMenu
        getIsItemSelected={getIsItemSelected}
        getItemProps={getItemProps}
        getMenuProps={getMenuProps}
        highlightedIndex={highlightedIndex}
        isOpen={isOpen}
        items={items}
        size={size}
        triggerNode={triggerNode}
      />
    );
  }
);
