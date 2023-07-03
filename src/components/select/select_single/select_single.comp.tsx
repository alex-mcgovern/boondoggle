import { faTimesCircle } from "@fortawesome/pro-light-svg-icons";
import clsx from "clsx";
import { useCombobox } from "downshift";
import { forwardRef, useCallback, useMemo, useState } from "react";

import { a11yFocus } from "../../../styles/common/a11y.css";
import { getSprinkles } from "../../../styles/utils/get_sprinkles.css";
import { Box } from "../../box";
import { Icon } from "../../icon";
import { Input } from "../../input";
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
    const [selectedItem, setSelectedItem] = useState(
      initialSelectedItem ||
        items.find((item) => {
          return item.isSelected;
        }) ||
        null
    );

    const [inputValue, setInputValue] = useState(
      initialSelectedItem?.label || ""
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
          <button
            type="button"
            className={clsx(
              getSprinkles({
                alignItems: "center",
                display: "flex",
                height: "spacing_3",
                justifyContent: "center",
                width: "spacing_3",
              }),
              a11yFocus
            )}
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
