import { autoUpdate, flip, offset, useFloating } from "@floating-ui/react";
import { faAngleDown } from "@fortawesome/sharp-regular-svg-icons";
import clsx from "clsx";
import { useCombobox, useMultipleSelection } from "downshift";
import { forwardRef, useCallback, useState } from "react";

import { useForwardRef } from "../../../hooks/use_forward_ref";
import { arrayHasLength } from "../../../lib/array_has_length";
import { Box } from "../../box";
import { Icon } from "../../icon";
import { Input } from "../../input";
import { filterSelectItems } from "../lib/filter_select_items";
import { getSlotRight } from "../lib/get_slot_right";
import { downshiftStateReducer, getIsSelected } from "../select_utils";
import { selectInputCursorStyles } from "../shared/select_input.styles.css";
import { SelectItemList } from "../t_select_item_list";
import { selectMultiInputSelectedItemsStyle } from "./styles.css";

import type {
  WithIsClearable,
  WithName,
  WithOptionalLabel,
  WithPlaceholder,
  WithSize,
  WithSlots,
  WithStateDisabled,
  WithStateInvalid,
  WithWrapperProps,
} from "../../../common-types";
import type { InputProps } from "../../input";
import type { SelectItemShape } from "../types";
import type { UseComboboxStateChange } from "downshift";

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
  if (!arrayHasLength(selectedItems)) {
    return placeholder;
  }

  if (selectedItemsToString) {
    return selectedItemsToString(selectedItems);
  }

  return `${selectedItems.length} selected`;
};

/** ----------------------------------------------------------------------------- */

export type SelectMultiProps = Partial<WithOptionalLabel> &
  WithStateInvalid &
  Omit<WithIsClearable, "readOnly"> &
  WithSlots &
  WithSize &
  WithStateDisabled &
  WithName &
  WithWrapperProps &
  WithPlaceholder & {
    /** Item to be preselected when the component mounts. */
    initialSelectedItems?: Array<SelectItemShape>;
    /** Props to customise the input element. */
    inputProps?: Partial<InputProps>;
    /** Whether the Select should be filterable by typing. */
    isFilterable?: boolean;
    /** Prop to toggle the open state of the dropdown. */
    isOpen?: boolean;
    /** The items to render in the dropdown. */
    items: Array<SelectItemShape>;
    /** Function called with the selected items when the selection changes. */
    onChange?: (selection: Array<SelectItemShape> | undefined) => void;
    /** Function called with the new open state when the dropdown is opened or closed. */
    onIsOpenChange?: (changes: UseComboboxStateChange<SelectItemShape>) => void;
    /** An array of selected items, used to control the component from outside. */
    selectedItems?: Array<SelectItemShape>;
    /** A function that returns a string representation of the selected items. */
    selectedItemsToString?: (selectedItems: Array<SelectItemShape>) => string;
  };

export const SelectMulti = forwardRef<HTMLInputElement, SelectMultiProps>(
  (
    {
      id,
      initialSelectedItems = [],
      inputProps,
      isClearable,
      isFilterable,
      items: initialItems,
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
      slotRight = [<Icon icon={faAngleDown} />],
      wrapperProps,
      ...rest
    },
    initialRef
  ) => {
    const ref = useForwardRef(initialRef);

    const [inputValue, setInputValue] = useState("");
    const [selectedItems, setSelectedItems] = useState<Array<SelectItemShape>>(
      controlledSelectedItems || [
          ...initialSelectedItems,
          ...initialItems.filter((item) => {
            return item.isSelected;
          }),
        ] ||
        []
    );

    const items = isFilterable
      ? filterSelectItems({ inputValue, items: initialItems })
      : initialItems;

    /** --------------------------------------------- */

    // const onSelectedItemsChange = useCallback(
    //   (newItems: Array<SelectItemShape>) => {
    //     onChange?.(newItems);
    //   },
    //   [onChange]
    // );

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
        onSelectedItemsChange: (changes) => {
          onChange?.(changes.selectedItems);
        },
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
      items,
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
              // onSelectedItemsChange(
              //   selectedItems.filter((prevSelectedItem) => {
              //     return prevSelectedItem.value !== newSelectedItem.value;
              //   })
              // );
              break;
            }

            if (newSelectedItem) {
              setSelectedItems([...selectedItems, newSelectedItem]);
              // onSelectedItemsChange([...selectedItems, newSelectedItem]);
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

    const { floatingStyles, refs } = useFloating({
      elements: {
        reference: ref.current,
      },
      middleware: [
        offset(4),
        flip({
          crossAxis: true,
          fallbackAxisSideDirection: "start",
        }),
      ],
      placement: "bottom-start",
      whileElementsMounted: autoUpdate,
    });

    /** --------------------------------------------- */

    return (
      <Box position="relative" {...wrapperProps}>
        <Input
          {...getInputProps?.({
            ...getDropdownProps({
              preventKeyAction: isOpen,
              ref,
            }),
            ...inputProps,
            ...rest,
            className: clsx(selectInputCursorStyles, {
              [selectMultiInputSelectedItemsStyle]:
                arrayHasLength(selectedItems),
            }),
            id,
            isClearable: undefined,
            label,
            labelProps: getLabelProps({
              htmlFor: id,
            }),
            labelTooltip,
            name,
            placeholder: getInputPlaceholder({
              placeholder,
              selectedItems,
              selectedItemsToString,
            }),

            readOnly: !isFilterable,
            size,
            slotLeft,
            slotRight: getSlotRight({
              canClear:
                (!!isFilterable && !!inputValue) ||
                (!!isClearable && arrayHasLength(selectedItems)),
              reset,
              slotRight,
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
          items={filterSelectItems({ inputValue, items })}
          ref={refs.setFloating}
          removeSelectedItem={removeSelectedItem}
          size={size}
          style={floatingStyles}
        />
      </Box>
    );
  }
);
