import { useCombobox } from "downshift";
import { forwardRef, useCallback, useMemo, useState } from "react";

import { Box } from "../../box";
import { Input } from "../../input";
import { InputClearButton } from "../../input_clear_button/input_clear_button.comp";
import {
  downshiftStateReducer,
  getDefaultHighlightedIndex,
  getFilteredDropdownItems,
  getIsSelected,
} from "../select_utils";
import { DEFAULT_SLOT_RIGHT } from "../shared/DEFAULT_SLOT_RIGHT";
import { DropdownMenu } from "../shared/dropdown_menu/dropdown_menu.comp";
import { selectInputCursorStyles } from "../shared/select_input.styles.css";

import type { LabelledElementCustomisation } from "../../../types";
import type { DropdownItemShape, SelectCommonProps } from "../select.types";
import type { UseComboboxStateChange } from "downshift";
import type { Ref } from "react";

/** ----------------------------------------------------------------------------- */

const defaultItemToString = (item: DropdownItemShape | null) => {
  return item?.label || "";
};

/** ----------------------------------------------------------------------------- */

export type SelectSingleProps = SelectCommonProps &
  LabelledElementCustomisation & {
    initialSelectedItem?: DropdownItemShape | null;
    itemToString?: (item: DropdownItemShape | null) => string;
    /** Optional tooltip for label */
    labelTooltip?: string;
    onChange?: (changes: UseComboboxStateChange<DropdownItemShape>) => void;
    placeholder: string;
  };

export const SelectSingle = forwardRef(
  (
    {
      disabled,
      errorMessage,
      id,
      initialHighlightedItem,
      initialSelectedItem,
      inputProps,
      invalid,
      isFilterable,
      items,
      itemToString = defaultItemToString,
      label,
      labelTooltip,
      name,
      onChange,
      placeholder,
      size,
      slotLeft,
      slotRight = DEFAULT_SLOT_RIGHT,
      wrapperProps,
      ...rest
    }: SelectSingleProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const localInitialSelectedItem = useMemo(() => {
      return (
        initialSelectedItem ||
        items.find((item) => {
          return item.isSelected;
        }) ||
        null
      );
    }, [initialSelectedItem, items]);

    const [selectedItem, setSelectedItem] = useState(localInitialSelectedItem);

    const [inputValue, setInputValue] = useState(
      localInitialSelectedItem?.label || ""
    );

    const [localSlotLeft, setLocalSlotLeft] = useState(slotLeft);

    /** --------------------------------------------- */

    const filteredItems = useMemo(() => {
      if (!items || !isFilterable) {
        return items;
      }

      return getFilteredDropdownItems({ inputValue, items });
    }, [items, isFilterable, inputValue]);

    /** --------------------------------------------- */

    const {
      getInputProps,
      getItemProps,
      getMenuProps,
      getLabelProps,
      highlightedIndex,

      isOpen,
      toggleMenu,
    } = useCombobox({
      defaultHighlightedIndex: getDefaultHighlightedIndex({
        initialHighlightedItem,
        items,
        selectedItem,
      }),
      initialSelectedItem,
      items: filteredItems,
      itemToString,
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
              if (newSelectedItem.onClick) {
                newSelectedItem.onClick();
              }
              setSelectedItem(newSelectedItem);
              setInputValue(newSelectedItem.label);
              if (newSelectedItem.slotLeft) {
                setLocalSlotLeft(newSelectedItem.slotLeft);
              }
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
      selectedItem,
      stateReducer: (state, actionAndChanges) => {
        return downshiftStateReducer(state, actionAndChanges, {});
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

    const SlotRight = useMemo(() => {
      if (isFilterable && inputValue.length > 0) {
        return (
          <InputClearButton
            onClick={() => {
              setSelectedItem(null);
              setInputValue("");
            }}
          />
        );
      }

      if (selectedItem) {
        return (
          <InputClearButton
            onClick={() => {
              setSelectedItem(null);
              setInputValue("");
            }}
          />
        );
      }

      return slotRight;
    }, [inputValue.length, isFilterable, selectedItem, slotRight]);

    /** --------------------------------------------- */

    return (
      <Box {...wrapperProps}>
        <DropdownMenu
          getIsItemSelected={getIsItemSelected}
          getItemProps={getItemProps}
          getMenuProps={getMenuProps}
          highlightedIndex={highlightedIndex}
          isOpen={isOpen}
          items={filteredItems}
          size={size}
          width="100%"
          triggerNode={
            // eslint-disable-next-line react-perf/jsx-no-jsx-as-prop
            <Input
              {...inputProps}
              className={selectInputCursorStyles}
              errorMessage={errorMessage}
              invalid={invalid}
              label={label}
              labelTooltip={labelTooltip}
              readOnly={!isFilterable}
              size={size}
              slotLeft={localSlotLeft}
              slotRight={SlotRight}
              labelProps={getLabelProps({
                htmlFor: id,
              })}
              {...getInputProps?.({
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
          }
        />
      </Box>
    );
  }
);
