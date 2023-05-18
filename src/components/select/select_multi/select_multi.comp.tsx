import { useCombobox, useMultipleSelection } from "downshift";
import { forwardRef, useCallback, useMemo, useState } from "react";

import { Box } from "../../box";
import { Input } from "../../input";
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

import type { LabelledElementCustomisation } from "../../../types";
import type { DropdownItemShape, SelectCommonProps } from "../select.types";
import type { UseMultipleSelectionStateChange } from "downshift";
import type { Ref } from "react";

export type SelectMultiProps = SelectCommonProps &
  LabelledElementCustomisation & {
    initialSelectedItems?: Array<DropdownItemShape>;
    itemToString?: (item: DropdownItemShape | null) => string;
    onChange?: (
      changes: UseMultipleSelectionStateChange<DropdownItemShape>
    ) => void;

    placeholder: string;
  };

export const SelectMulti = forwardRef(
  (
    {
      disabled,
      errorMessage,
      id,
      initialHighlightedItem,
      initialSelectedItems = [],
      invalid,
      isFilterable,
      items,
      label,
      name,
      onChange,
      placeholder,
      size,
      slotLeft,
      wrapperProps,
      slotRight = DEFAULT_SLOT_RIGHT,
      ...rest
    }: SelectMultiProps,
    ref: Ref<HTMLInputElement>
  ) => {
    /** Externally controlled state for downshift and {@link Input} component */
    const [inputValue, setInputValue] = useState("");
    const [inputPlaceholder, setInputPlaceholder] = useState(
      getDisplayValue({
        length: initialSelectedItems?.length,
        originalValue: placeholder,
      })
    );

    /**
     * Callback to update input value and call `onChange` (if provided) when selected items change.
     */
    const onSelectedItemsChange = useCallback(
      (changes: UseMultipleSelectionStateChange<DropdownItemShape>) => {
        if (onChange) {
          onChange(changes);
        }
        setInputPlaceholder(
          getDisplayValue({
            length: changes?.selectedItems?.length,
            originalValue: placeholder,
          })
        );
      },
      [onChange, placeholder]
    );

    /**
     * Downshift `useMultipleSelection` hook
     * @see https://www.downshift-js.com/use-multiple-selection
     */
    const {
      getSelectedItemProps,
      getDropdownProps,
      removeSelectedItem,
      selectedItems,
      setSelectedItems,
    } = useMultipleSelection<DropdownItemShape>({
      initialSelectedItems,
      onSelectedItemsChange,
    });

    /**
     * When `isFilterable` is true, we need to filter the items based on the input value.
     */
    const filteredItems = useMemo(() => {
      if (!items || !isFilterable) {
        return items;
      }

      return getFilteredDropdownItems({ inputValue, items });
    }, [items, isFilterable, inputValue]);

    /** -----------------------------------------------------------------------------
     * Util function for checking if item is selected, passed down to DropdownItemShape via DropdownMenu
     * ------------------------------------------------------------------------------- */

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

    /**
     * Downshift `useCombobox` hook
     * @see https://www.downshift-js.com/use-combobox
     */
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

            if (getIsItemSelected(newSelectedItem)) {
              removeSelectedItem(newSelectedItem);
              break;
            }

            if (newSelectedItem) {
              setSelectedItems([...selectedItems, newSelectedItem]);
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

    return (
      <Box {...wrapperProps}>
        <DropdownMenu
          errorMessage={errorMessage}
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
              className={selectInputCursorStyles}
              invalid={invalid}
              readOnly={!isFilterable}
              size={size}
              slotLeft={slotLeft}
              slotRight={slotRight}
              labelProps={getLabelProps({
                htmlFor: id,
                label,
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
