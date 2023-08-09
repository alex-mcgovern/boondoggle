import { useCombobox } from "downshift";
import { forwardRef, useCallback, useMemo, useState } from "react";

import { Box } from "../Box";
import { FieldClearButton } from "../FieldClearButton";
import { Input } from "../Input";
import {
  downshiftStateReducer,
  getDefaultHighlightedIndex,
  getFilteredDropdownItems,
  getIsSelected,
} from "../Select/select_utils";
import { DEFAULT_SLOT_RIGHT } from "../Select/shared/DEFAULT_SLOT_RIGHT";
import { selectInputCursorStyles } from "../Select/shared/select_input.styles.css";
import { SelectItemList } from "../SelectItemList";

import type {
  LabelledElementCustomisation,
  WithPlaceholder,
} from "../../types";
import type { SelectCommonProps, SelectItemShape } from "../Select/types";
import type { UseComboboxStateChange } from "downshift";
import type { Ref } from "react";

/** ----------------------------------------------------------------------------- */

const defaultItemToString = (item: SelectItemShape | null) => {
  return item?.label || "";
};

/** ----------------------------------------------------------------------------- */

export type SelectSingleProps = SelectCommonProps &
  LabelledElementCustomisation &
  WithPlaceholder & {
    initialSelectedItem?: SelectItemShape | null;
    itemToString?: (item: SelectItemShape | null) => string;
    /** Optional tooltip for label */
    labelTooltip?: string;
    onChange?: (changes: UseComboboxStateChange<SelectItemShape>) => void;
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
      isOpen: controlledIsOpen,
      itemToString = defaultItemToString,
      items,
      label,
      labelTooltip,
      name,
      onChange,
      onIsOpenChange,
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
      getLabelProps,
      getMenuProps,
      highlightedIndex,
      isOpen,
      reset,
      toggleMenu,
    } = useCombobox({
      defaultHighlightedIndex: getDefaultHighlightedIndex({
        initialHighlightedItem,
        items,
        selectedItem,
      }),
      initialSelectedItem,
      isOpen: controlledIsOpen,
      items: filteredItems,
      itemToString,
      onIsOpenChange,
      onSelectedItemChange: onChange,
      onStateChange({
        inputValue: newInputValue,
        selectedItem: newSelectedItem,
        type,
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
      (item: SelectItemShape) => {
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
          <FieldClearButton
            onClick={() => {
              setInputValue("");
              setSelectedItem(null);
              setLocalSlotLeft(null);
              reset();
            }}
          />
        );
      }

      return slotRight;
    }, [inputValue.length, isFilterable, reset, slotRight]);

    /** --------------------------------------------- */

    return (
      <Box {...wrapperProps}>
        <SelectItemList
          getIsItemSelected={getIsItemSelected}
          getItemProps={getItemProps}
          getMenuProps={getMenuProps}
          highlightedIndex={highlightedIndex}
          isOpen={isOpen}
          items={filteredItems}
          size={size}
          triggerNode={
            // eslint-disable-next-line react-perf/jsx-no-jsx-as-prop
            <Input
              {...inputProps}
              className={selectInputCursorStyles}
              errorMessage={errorMessage}
              invalid={invalid}
              label={label}
              labelProps={getLabelProps({
                htmlFor: id,
              })}
              labelTooltip={labelTooltip}
              readOnly={!isFilterable}
              size={size}
              slotLeft={localSlotLeft}
              slotRight={SlotRight}
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
          width="100%"
        />
      </Box>
    );
  }
);
