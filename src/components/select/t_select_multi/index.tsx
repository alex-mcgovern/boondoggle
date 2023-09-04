import { autoUpdate, flip, offset, useFloating } from "@floating-ui/react";
import { faAngleDown } from "@fortawesome/sharp-regular-svg-icons";
import clsx from "clsx";
import { useCombobox, useMultipleSelection } from "downshift";
import { forwardRef, useCallback, useState } from "react";

import { getOptionalLabelProps } from "../../../common-types";
import { useForwardRef } from "../../../hooks/use_forward_ref";
import { arrayHasLength } from "../../../lib/array_has_length";
import { Box } from "../../box";
import { Icon } from "../../icon";
import { Input } from "../../input";
import { filterSelectItems } from "../lib/filter_select_items";
import { getSlotRight } from "../lib/get_slot_right";
import { getIsSelected } from "../select_utils";
import { selectInputCursorStyles } from "../shared/select_input.styles.css";
import { SelectItemList } from "../t_select_item_list";
import { selectMultiInputSelectedItemsStyle } from "./styles.css";

import type {
    WithName,
    WithOptionalIsClearable,
    WithOptionalLabel,
    WithOptionalPlaceholder,
    WithSize,
    WithSlots,
    WithStateDisabled,
    WithStateInvalid,
    WithWrapperProps,
} from "../../../common-types";
import type { InputProps } from "../../input";
import type { SelectItemShape } from "../types";
import type { UseComboboxStateChange } from "downshift";

type GetPlaceholderArgs = {
    /**
     * The placeholder text to display when no items are selected.
     */
    placeholder: string | undefined;

    /**
     * The selected items.
     */
    selectedItems: Array<SelectItemShape> | undefined;

    /**
     * A function that returns a string representation of the selected items.
     */
    selectedItemsToString: ((selectedItems: Array<SelectItemShape>) => string) | undefined;
};

/**
 * Returns the value to display in the input.
 */
const getPlaceholder = ({
    placeholder,
    selectedItems,
    selectedItemsToString,
}: GetPlaceholderArgs) => {
    if (!arrayHasLength(selectedItems)) {
        return placeholder;
    }

    if (selectedItemsToString) {
        return selectedItemsToString(selectedItems);
    }

    return `${selectedItems.length} selected`;
};

export type SelectMultiProps = Partial<WithOptionalLabel> &
    WithStateInvalid &
    Omit<WithOptionalIsClearable, "readOnly"> &
    WithSlots &
    WithSize &
    WithStateDisabled &
    WithName &
    WithWrapperProps &
    WithOptionalPlaceholder & {
        /**
         * Item to be preselected when the component mounts.
         */
        initialSelectedItems?: Array<SelectItemShape>;

        /**
         * Props to customise the input element.
         */
        inputProps?: Partial<InputProps>;

        /**
         * Whether the Select should be filterable by typing.
         */
        isFilterable?: boolean;

        /**
         * Prop to toggle the open state of the dropdown.
         */
        isOpen?: boolean;

        /**
         * The items to render in the dropdown.
         */
        items: Array<SelectItemShape>;

        /**
         * Function called with the selected items when the selection changes.
         */
        onChange?: (selection: Array<SelectItemShape> | undefined) => void;

        /**
         * Function called with the new open state when the dropdown is opened or closed.
         */
        onIsOpenChange?: (changes: UseComboboxStateChange<SelectItemShape>) => void;

        /**
         * An array of selected items, used to control the component from outside.
         */
        selectedItems?: Array<SelectItemShape>;

        /**
         * A function that returns a string representation of the selected items.
         */
        selectedItemsToString?: (selectedItems: Array<SelectItemShape>) => string;
    };

export const SelectMulti = forwardRef<HTMLInputElement, SelectMultiProps>(
    (
        {
            disabled,
            errorMessage,
            id,
            initialSelectedItems = [],
            invalid,
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
        },
        initialRef
    ) => {
        const ref = useForwardRef(initialRef);

        const [inputValue, setInputValue] = useState("");

        const items = isFilterable
            ? filterSelectItems({
                  inputValue,
                  items: initialItems,
              })
            : initialItems;

        const {
            addSelectedItem,
            getDropdownProps,
            getSelectedItemProps,
            removeSelectedItem,
            selectedItems,
        } = useMultipleSelection<SelectItemShape>({
            initialSelectedItems: controlledSelectedItems || [
                ...initialSelectedItems,
                ...initialItems.filter((i) => i.isSelected),
            ],
            onSelectedItemsChange: (c) => onChange?.(c.selectedItems),
        });

        const getIsItemSelected = useCallback(
            (item: SelectItemShape) =>
                getIsSelected({
                    isMulti: true,
                    item,
                    selectedItems,
                }),
            [selectedItems]
        );

        const {
            getInputProps,
            getItemProps,
            getLabelProps,
            getMenuProps,
            highlightedIndex,
            isOpen,
            reset,
        } = useCombobox<SelectItemShape>({
            defaultHighlightedIndex: 0,
            items,
            onIsOpenChange, // after selection, highlight the first item.
            onStateChange({ inputValue: newInputValue, selectedItem: newItem, type }) {
                switch (type) {
                    case useCombobox.stateChangeTypes.InputKeyDownEnter:
                    case useCombobox.stateChangeTypes.ItemClick: {
                        if (!newItem) {
                            return;
                        }

                        newItem?.onClick?.();

                        if (getIsItemSelected(newItem)) {
                            removeSelectedItem(newItem);
                        } else {
                            addSelectedItem(newItem);
                        }

                        break;
                    }

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
            stateReducer(_, actionAndChanges) {
                const { changes, type } = actionAndChanges;

                switch (type) {
                    case useCombobox.stateChangeTypes.InputKeyDownEnter:
                    case useCombobox.stateChangeTypes.ItemClick:
                        return {
                            ...changes,
                            highlightedIndex: 0, // with the first option highlighted.
                            isOpen: true, // keep the menu open after selection.
                        };

                    default:
                        return changes;
                }
            },
        });

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

        return (
            <Box
                position="relative"
                {...wrapperProps}
            >
                <Input
                    errorMessage={errorMessage}
                    invalid={invalid}
                    size={size}
                    slotLeft={slotLeft}
                    slotRight={getSlotRight({
                        isClearable:
                            (!!isFilterable && !!inputValue) ||
                            (!!isClearable && arrayHasLength(selectedItems)),
                        reset,
                        slotRight,
                    })}
                    {...getInputProps?.({
                        className: clsx(selectInputCursorStyles, {
                            [selectMultiInputSelectedItemsStyle]: arrayHasLength(selectedItems),
                        }),
                        disabled,
                        id,
                        name,
                        placeholder: getPlaceholder({
                            placeholder,
                            selectedItems,
                            selectedItemsToString,
                        }),
                        readOnly: !isFilterable,
                        value: inputValue,
                        ...getDropdownProps({
                            preventKeyAction: isOpen,
                            ref,
                        }),
                        ...getOptionalLabelProps({
                            id,
                            label,
                            labelProps: getLabelProps({
                                htmlFor: id,
                            }),
                            labelTooltip,
                        }),
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
                    items={filterSelectItems({
                        inputValue,
                        items,
                    })}
                    ref={refs.setFloating}
                    size={size}
                    style={floatingStyles}
                />
            </Box>
        );
    }
);
