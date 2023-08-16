import clsx from "clsx";
import { useCombobox, useMultipleSelection } from "downshift";
import { forwardRef, useCallback, useEffect, useMemo, useState } from "react";

import { Box } from "../box";
import { FieldActionButtonClear } from "../field_action_button_clear";
import { Input } from "../input";
import {
  downshiftStateReducer,
  getDefaultHighlightedIndex,
  getDisplayValue,
  getFilteredDropdownItems,
  getIsSelected,
} from "../select/select_utils";
import { DEFAULT_SLOT_RIGHT } from "../select/shared/DEFAULT_SLOT_RIGHT";
import { selectInputCursorStyles } from "../select/shared/select_input.styles.css";
import { SelectItemList } from "../select_item_list";
import { selectMultiInputSelectedItemsStyle } from "./styles.css";

import type {
  LabelledElementCustomisation,
  WithPlaceholder,
} from "../../types";
import type { SelectCommonProps, SelectItemShape } from "../select/types";
import type { Ref } from "react";

export type SelectMultiProps = SelectCommonProps &
  LabelledElementCustomisation &
  WithPlaceholder & {
    initialSelectedItems?: Array<SelectItemShape>;
    onChange?: (changes: Array<SelectItemShape>) => void;
    selectedItems?: Array<SelectItemShape>;
    selectedItemsToString?: (selectedItems: Array<SelectItemShape>) => string;
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
      isClearable,
      isFilterable,
      items,
      label,
      labelTooltip,
      name,
      onChange,
      placeholder,
      selectedItems: controlledSelectedItems,
      selectedItemsToString,
      size,
      slotLeft,
      slotRight = DEFAULT_SLOT_RIGHT,
      wrapperProps,
      ...rest
    }: SelectMultiProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [inputValue, setInputValue] = useState("");

    /** --------------------------------------------- */

    const [selectedItems, setSelectedItems] = useState<Array<SelectItemShape>>(
      controlledSelectedItems || [
          ...initialSelectedItems,
          ...items.filter((item) => {
            return item.isSelected;
          }),
        ] ||
        []
    );

    useEffect(() => {
      if (controlledSelectedItems) {
        setSelectedItems(controlledSelectedItems);
      }
    }, [controlledSelectedItems, setSelectedItems]);

    /** --------------------------------------------- */

    const onSelectedItemsChange = useCallback(
      (newItems: Array<SelectItemShape>) => {
        if (onChange) {
          onChange(newItems);
        }
      },
      [onChange]
    );

    /** --------------------------------------------- */

    const inputPlaceholder = useMemo(() => {
      if (!Array.isArray(selectedItems) || selectedItems.length < 1) {
        return placeholder;
      }

      if (selectedItemsToString) {
        return selectedItemsToString(selectedItems);
      }

      return getDisplayValue({
        length: selectedItems?.length,
        originalValue: placeholder,
      });
    }, [placeholder, selectedItems, selectedItemsToString]);

    /** --------------------------------------------- */

    const removeSelectedItem = useCallback((item: SelectItemShape) => {
      return setSelectedItems((prevSelectedItems) => {
        return prevSelectedItems.filter((selectedItem) => {
          return selectedItem.value !== item.value;
        });
      });
    }, []);

    /** --------------------------------------------- */

    const { getDropdownProps, getSelectedItemProps } =
      useMultipleSelection<SelectItemShape>({
        selectedItems,
      });

    /** --------------------------------------------- */

    const filteredItems = useMemo(() => {
      if (!items || !isFilterable) {
        return items;
      }

      return getFilteredDropdownItems({ inputValue, items });
    }, [items, isFilterable, inputValue]);

    /** --------------------------------------------- */

    const getIsItemSelected = useCallback(
      (item: SelectItemShape) => {
        return getIsSelected({
          isMulti: true,
          item,
          selectedItems,
        });
      },
      [selectedItems]
    );

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
    } = useCombobox<SelectItemShape>({
      defaultHighlightedIndex: getDefaultHighlightedIndex({
        initialHighlightedItem,
        items,
        selectedItem: selectedItems?.[0],
      }),
      items: filteredItems,
      onStateChange({
        inputValue: newInputValue,
        selectedItem: newSelectedItem,
        type,
      }) {
        switch (type) {
          case useCombobox.stateChangeTypes.InputKeyDownEnter:
          case useCombobox.stateChangeTypes.ItemClick:
          case useCombobox.stateChangeTypes.InputBlur:
            if (!newSelectedItem) {
              break;
            }

            if (newSelectedItem.onClick) {
              newSelectedItem.onClick();
            }

            if (getIsItemSelected(newSelectedItem)) {
              removeSelectedItem(newSelectedItem);
              onSelectedItemsChange(
                selectedItems.filter((prevSelectedItem) => {
                  return prevSelectedItem.value !== newSelectedItem.value;
                })
              );
              break;
            }

            if (newSelectedItem) {
              setSelectedItems([...selectedItems, newSelectedItem]);
              onSelectedItemsChange([...selectedItems, newSelectedItem]);
              break;
            }

            break;

          case useCombobox.stateChangeTypes.InputChange:
            if (typeof newInputValue !== "undefined") {
              setInputValue(newInputValue);
              break;
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

    /** --------------------------------------------- */

    const SlotRight = useMemo(() => {
      if (
        (isFilterable && inputValue.length > 0) ||
        (isClearable && selectedItems.length > 0)
      ) {
        return (
          <FieldActionButtonClear
            onClick={() => {
              onSelectedItemsChange([]);
              setInputValue("");
              setSelectedItems([]);
              return reset();
            }}
          />
        );
      }

      return slotRight;
    }, [
      inputValue.length,
      isClearable,
      isFilterable,
      onSelectedItemsChange,
      reset,
      selectedItems.length,
      slotRight,
    ]);

    /** --------------------------------------------- */

    return (
      <Box {...wrapperProps}>
        <SelectItemList
          getIsItemSelected={getIsItemSelected}
          getItemProps={getItemProps}
          getMenuProps={getMenuProps}
          getSelectedItemProps={getSelectedItemProps}
          highlightedIndex={highlightedIndex}
          isMulti
          isOpen={isOpen}
          items={filteredItems}
          removeSelectedItem={removeSelectedItem}
          size={size}
          triggerNode={
            // eslint-disable-next-line react-perf/jsx-no-jsx-as-prop
            <Input
              {...inputProps}
              className={clsx(selectInputCursorStyles, {
                [selectMultiInputSelectedItemsStyle]: selectedItems?.length > 0,
              })}
              errorMessage={errorMessage}
              invalid={invalid}
              label={label}
              labelProps={getLabelProps({
                htmlFor: id,
              })}
              labelTooltip={labelTooltip}
              readOnly={!isFilterable}
              size={size}
              slotLeft={slotLeft}
              slotRight={SlotRight}
              {...getInputProps?.({
                ...getDropdownProps({
                  preventKeyAction: isOpen,
                  ref,
                }),
                ...rest,
                disabled,
                id,
                name,
                onClick: toggleMenu,
                placeholder: inputPlaceholder,
                value: inputValue,
              })}
            />
          }
          width="100%"
        />
      </Box>
    );
  }
);
