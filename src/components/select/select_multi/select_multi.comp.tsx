import { faTimesCircle } from "@fortawesome/pro-light-svg-icons";
import { useCombobox, useMultipleSelection } from "downshift";
import { forwardRef, useCallback, useMemo, useState } from "react";

import { Box } from "../../box";
import { Icon } from "../../icon";
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
    /** Optional tooltip for label */
    labelTooltip?: string;

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
      labelTooltip,
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

    /** --------------------------------------------- */

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

    /** --------------------------------------------- */

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

    /** --------------------------------------------- */

    const SlotRight = useMemo(() => {
      if (isFilterable && inputValue.length > 0) {
        return (
          <button
            type="button"
            onClick={() => {
              return setInputValue("");
            }}
          >
            <Icon icon={faTimesCircle} />
          </button>
        );
      }

      return slotRight;
    }, [inputValue.length, isFilterable, slotRight]);

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
              className={selectInputCursorStyles}
              errorMessage={errorMessage}
              invalid={invalid}
              label={label}
              labelTooltip={labelTooltip}
              readOnly={!isFilterable}
              size={size}
              slotLeft={slotLeft}
              slotRight={SlotRight}
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
