import { autoUpdate, flip, offset, useFloating } from "@floating-ui/react";
import clsx from "clsx";
import { useCombobox, useMultipleSelection } from "downshift";
import { forwardRef, useCallback, useRef, useState } from "react";

import { useForwardRef } from "../../hooks/use_forward_ref";
import { Box } from "../box";
import { FieldActionButtonClear } from "../field_action_button_clear";
import { Input } from "../input";
import { DEFAULT_SLOT_RIGHT } from "./DEFAULT_SLOT_RIGHT";
import { SelectItemList } from "./SelectItemList";
import { selectMultiInputSelectedItemsStyle } from "./SelectMulti.styles.css";
import { filterItems } from "./filterItems";
import {
  downshiftStateReducer,
  getDisplayValue,
  getIsSelected,
} from "./select_utils";
import { selectInputCursorStyles } from "./shared/select_input.styles.css";

import type { WithPlaceholder, WithWrapperProps } from "../../common-types";
import type { SelectCommonProps, SelectItemShape } from "./types";
import type { ReactNode } from "react";

/** ----------------------------------------------------------------------------- */

type GetSlotRightArgs = {
  inputValue: string | undefined;
  isClearable: boolean | undefined;
  isFilterable: boolean | undefined;
  onSelectedItemsChange: (newItems: Array<SelectItemShape>) => void;
  reset: () => void;
  selectedItems: Array<SelectItemShape>;
  setInputValue: (value: string) => void;
  setSelectedItems: (newItems: Array<SelectItemShape>) => void;
  slotRight: ReactNode;
};

const getSlotRight = ({
  inputValue,
  isClearable,
  isFilterable,
  onSelectedItemsChange,
  reset,
  selectedItems,
  setInputValue,
  setSelectedItems,
  slotRight,
}: GetSlotRightArgs) => {
  if (
    (isFilterable && inputValue?.length > 0) ||
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
};

/** ----------------------------------------------------------------------------- */

type GetInputValueArgs = {
  /** The placeholder text to display when no items are selected. */
  placeholder: string | undefined;
  /** The selected items. */
  selectedItems: Array<SelectItemShape> | undefined;
  /** A function that returns a string representation of the selected items. */
  selectedItemsToString:
    | ((selectedItems: Array<SelectItemShape>) => string)
    | undefined;
};

/**
 * Returns the value to display in the input.
 */
const getInputPlaceholder = ({
  placeholder,
  selectedItems,
  selectedItemsToString,
}: GetInputValueArgs) => {
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
};

/** ----------------------------------------------------------------------------- */

export type SelectMultiProps = SelectCommonProps &
  WithWrapperProps &
  WithPlaceholder & {
    initialSelectedItems?: Array<SelectItemShape>;
    onChange?: (changes: Array<SelectItemShape>) => void;
    selectedItems?: Array<SelectItemShape>;
    selectedItemsToString?: (selectedItems: Array<SelectItemShape>) => string;
  };

export const SelectMulti = forwardRef<HTMLInputElement, SelectMultiProps>(
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
      onIsOpenChange,
      placeholder,
      selectedItems: controlledSelectedItems,
      selectedItemsToString,
      size,
      slotLeft,
      slotRight = DEFAULT_SLOT_RIGHT,
      wrapperProps,
      ...rest
    },
    ref
  ) => {
    const [inputValue, setInputValue] = useState("");
    const [selectedItems, setSelectedItems] = useState<Array<SelectItemShape>>(
      controlledSelectedItems || [
          ...initialSelectedItems,
          ...items.filter((item) => {
            return item.isSelected;
          }),
        ] ||
        []
    );

    /** --------------------------------------------- */

    // const renderCounts = useRef(0);

    // useEffect(() => {
    //   renderCounts.current += 1;
    //   console.log(`renderCount: ${renderCounts.current}`);
    // });

    /** --------------------------------------------- */

    const inputRef = useForwardRef(ref);
    const listRef = useRef<HTMLDivElement>();

    /** --------------------------------------------- */

    const onSelectedItemsChange = useCallback(
      (newItems: Array<SelectItemShape>) => {
        onChange?.(newItems);
      },
      [onChange]
    );

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
    } = useCombobox<SelectItemShape>({
      items: filterItems({ inputValue, items }),
      onIsOpenChange,
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

    const { floatingStyles } = useFloating({
      elements: {
        floating: listRef.current,
        reference: inputRef.current,
      },
      middleware: [
        offset(4),
        flip({
          crossAxis: true,
          fallbackAxisSideDirection: "start",
        }),
      ],
      // open: isOpen,
      placement: "bottom",
      whileElementsMounted: autoUpdate,
    });

    /** --------------------------------------------- */

    return (
      <Box position="relative" {...wrapperProps}>
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
          slotRight={getSlotRight({
            inputValue,
            isClearable,
            isFilterable,
            onSelectedItemsChange,
            reset,
            selectedItems,
            setInputValue,
            setSelectedItems,
            slotRight,
          })}
          {...getInputProps?.({
            ...getDropdownProps({
              preventKeyAction: isOpen,
              ref: inputRef,
            }),
            ...rest,
            disabled,
            id,
            name,
            placeholder: getInputPlaceholder({
              placeholder,
              selectedItems,
              selectedItemsToString,
            }),
            value: inputValue,
          })}
        />
        <SelectItemList
          getIsItemSelected={getIsItemSelected}
          getItemProps={getItemProps}
          getMenuProps={getMenuProps}
          getSelectedItemProps={getSelectedItemProps}
          highlightedIndex={highlightedIndex}
          isMulti
          isOpen={isOpen}
          items={filterItems({ inputValue, items })}
          ref={listRef}
          removeSelectedItem={removeSelectedItem}
          size={size}
          style={floatingStyles}
        />
      </Box>
    );
  }
);
