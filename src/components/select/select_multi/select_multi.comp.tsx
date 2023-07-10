import clsx from "clsx";
import { useCombobox, useMultipleSelection } from "downshift";
import { forwardRef, useCallback, useEffect, useMemo, useState } from "react";

import { Box } from "../../box";
import { Input } from "../../input";
import { InputClearButton } from "../../input_clear_button/input_clear_button.comp";
import {
  downshiftStateReducer,
  getDefaultHighlightedIndex,
  getDisplayValue,
  getFilteredDropdownItems,
  getIsSelected,
} from "../select_utils";
import { DEFAULT_SLOT_RIGHT } from "../shared/DEFAULT_SLOT_RIGHT";
import { DropdownMenu } from "../shared/dropdown_menu/dropdown_menu.comp";
import { selectInputCursorStyles } from "../shared/select_input.styles.css";
import { selectMultiInputSelectedItemsStyle } from "./styles.css";

import type { LabelledElementCustomisation } from "../../../types";
import type { DropdownItemShape, SelectCommonProps } from "../select.types";
import type { Ref } from "react";

export type SelectMultiProps = SelectCommonProps &
  LabelledElementCustomisation & {
    initialSelectedItems?: Array<DropdownItemShape>;
    itemToString?: (item: DropdownItemShape | null) => string;
    labelTooltip?: string;
    onChange?: (changes: Array<DropdownItemShape>) => void;
    placeholder: string;
    selectedItems?: Array<DropdownItemShape>;
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
      isFilterable,
      items,
      label,
      labelTooltip,
      selectedItems: controlledSelectedItems,
      name,
      onChange,
      placeholder,
      size,
      slotLeft,
      slotRight = DEFAULT_SLOT_RIGHT,
      wrapperProps,
      ...rest
    }: SelectMultiProps,
    ref: Ref<HTMLInputElement>
  ) => {
    const [inputValue, setInputValue] = useState("");
    const [inputPlaceholder, setInputPlaceholder] = useState(
      getDisplayValue({
        length: initialSelectedItems?.length,
        originalValue: placeholder,
      })
    );

    /** --------------------------------------------- */

    const [selectedItems, setSelectedItems] = useState<
      Array<DropdownItemShape>
    >(
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
    }, [controlledSelectedItems]);

    /** --------------------------------------------- */

    const onSelectedItemsChange = useCallback(
      (newItems: Array<DropdownItemShape>) => {
        if (onChange) {
          onChange(newItems);
        }
      },
      [onChange]
    );

    /** --------------------------------------------- */

    useEffect(() => {
      setInputPlaceholder(
        getDisplayValue({
          length: selectedItems?.length,
          originalValue: placeholder,
        })
      );
    }, [placeholder, selectedItems?.length]);

    /** --------------------------------------------- */

    const removeSelectedItem = useCallback((item: DropdownItemShape) => {
      return setSelectedItems((prevSelectedItems) => {
        return prevSelectedItems.filter((selectedItem) => {
          return selectedItem.value !== item.value;
        });
      });
    }, []);

    /** --------------------------------------------- */

    const { getSelectedItemProps, getDropdownProps } =
      useMultipleSelection<DropdownItemShape>({
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
      (item: DropdownItemShape) => {
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
      isOpen,
      toggleMenu,
      getMenuProps,
      getInputProps,
      highlightedIndex,
      getItemProps,
      getLabelProps,
    } = useCombobox<DropdownItemShape>({
      defaultHighlightedIndex: getDefaultHighlightedIndex({
        initialHighlightedItem,
        items,
        selectedItem: selectedItems?.[0],
      }),
      items: filteredItems,
      onStateChange({
        inputValue: newInputValue,
        type,
        selectedItem: newSelectedItem,
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
      if (isFilterable && inputValue.length > 0) {
        return (
          <InputClearButton
            onClick={() => {
              setSelectedItems([]);
              setInputValue("");
            }}
          />
        );
      }

      if (selectedItems.length > 0) {
        return (
          <InputClearButton
            onClick={() => {
              setSelectedItems([]);
              setInputValue("");
            }}
          />
        );
      }

      return slotRight;
    }, [inputValue.length, isFilterable, selectedItems.length, slotRight]);

    /** --------------------------------------------- */

    return (
      <Box {...wrapperProps}>
        <DropdownMenu
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
          width="100%"
          triggerNode={
            // eslint-disable-next-line react-perf/jsx-no-jsx-as-prop
            <Input
              {...inputProps}
              errorMessage={errorMessage}
              invalid={invalid}
              label={label}
              labelTooltip={labelTooltip}
              readOnly={!isFilterable}
              size={size}
              slotLeft={slotLeft}
              slotRight={SlotRight}
              className={clsx(selectInputCursorStyles, {
                [selectMultiInputSelectedItemsStyle]: selectedItems?.length > 0,
              })}
              labelProps={getLabelProps({
                htmlFor: id,
              })}
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
        />
      </Box>
    );
  }
);
