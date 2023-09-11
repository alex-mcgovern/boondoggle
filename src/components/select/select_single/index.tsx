import { autoUpdate, flip, offset, useFloating } from "@floating-ui/react";
import { faAngleDown } from "@fortawesome/sharp-regular-svg-icons";
import { useCombobox } from "downshift";
import { forwardRef, useCallback, useState } from "react";

import { getOptionalLabelProps } from "../../../common-types";
import { useForwardRef } from "../../../hooks/use_forward_ref";
import { Box } from "../../box";
import { Icon } from "../../icon";
import { Input } from "../../input";
import { filterSelectItems } from "../lib/filter_select_items";
import { getSlotRight } from "../lib/get_slot_right";
import { SelectItemList } from "../select_item_list";
import { getIsSelected } from "../select_utils";
import { selectInputCursorStyles } from "../shared/select_input.styles.css";

import type {
    WithId,
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

export type SelectSingleProps = Omit<WithOptionalIsClearable, "readOnly"> &
    WithName &
    WithOptionalPlaceholder &
    WithSize &
    WithSlots &
    WithStateDisabled &
    WithStateInvalid &
    WithWrapperProps &
    WithId &
    WithOptionalLabel & {
        /**
         * Item to be preselected when the component mounts.
         */
        initialSelectedItem?: SelectItemShape;

        /**
         * Props to customise the input element.
         */
        inputProps?: Partial<
            Omit<
                InputProps,
                | "id"
                | "isClearable"
                | "isCopyable"
                | "isVisibilityToggleable"
                | "isVisible"
                | "label"
                | "labelProps"
                | "size"
                | "labelTooltip"
                | "width"
            >
        >;

        /**
         * Whether the Select should be filterable by typing.
         */
        isFilterable?: boolean;

        /**
         * Prop to toggle the open state of the dropdown.
         */
        isOpen?: boolean;

        /**
         * Function to convert an item to a string.
         */
        itemToString?: (item: SelectItemShape | null) => string;

        /**
         * The items to render in the dropdown.
         */
        items: Array<SelectItemShape>;

        /**
         * Function called with the new selected item when the selection changes.
         */
        onChange?: (selection: SelectItemShape | null | undefined) => void;

        /**
         * Function called with the new open state when the dropdown is opened or closed.
         */
        onIsOpenChange?: (changes: UseComboboxStateChange<SelectItemShape>) => void;
    };

export const SelectSingle = forwardRef<HTMLInputElement, SelectSingleProps>(
    (
        {
            disabled,
            errorMessage,
            id,
            initialSelectedItem,
            inputProps,
            invalid,
            isClearable,
            isFilterable,
            isOpen: controlledIsOpen,
            itemToString = (item: SelectItemShape | null) => {
                return item?.label || "";
            },
            items: initialItems,
            label,
            labelTooltip,
            name,
            onChange,
            onIsOpenChange,
            placeholder,
            size,
            slotLeft,
            slotRight = [<Icon icon={faAngleDown} />],
            wrapperProps,
        },
        initialRef
    ) => {
        const ref = useForwardRef(initialRef);

        const initialItem =
            initialSelectedItem ||
            initialItems.find((item) => {
                return item.isSelected;
            });

        const [inputValue, setInputValue] = useState(initialItem?.label || "");

        const items = isFilterable
            ? filterSelectItems({ inputValue, items: initialItems })
            : initialItems;

        const {
            getInputProps,
            getItemProps,
            getLabelProps,
            getMenuProps,
            highlightedIndex,
            isOpen,
            reset,
            selectedItem,
        } = useCombobox({
            initialSelectedItem: initialItem,
            inputValue,
            isItemDisabled: (item) => {
                return item.disabled;
            },
            isOpen: controlledIsOpen,
            items,
            itemToString,
            onInputValueChange: (changes) => {
                setInputValue(changes.inputValue || "");
            },
            onIsOpenChange,
            onSelectedItemChange: (changes) => {
                return onChange?.(changes.selectedItem);
            },
            // Ensure that onClick is called when the user presses Enter on an item.
            onStateChange(changes) {
                if (changes.type === useCombobox.stateChangeTypes.InputKeyDownEnter) {
                    changes.selectedItem?.onClick?.();
                }
            },
        });

        const getIsItemSelected = useCallback(
            (item: SelectItemShape) => {
                return getIsSelected({
                    item,
                    selectedItem,
                });
            },
            [selectedItem]
        );

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
            open: isOpen,
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
                    size={size}
                    slotLeft={selectedItem?.slotLeft || slotLeft}
                    slotRight={getSlotRight({
                        isClearable:
                            (!!isFilterable && !!inputValue) || (!!isClearable && !!selectedItem),
                        reset,
                        slotRight,
                    })}
                    {...getInputProps({
                        className: selectInputCursorStyles,
                        disabled,
                        id,
                        invalid,
                        isClearable: undefined,
                        name,
                        placeholder,
                        readOnly: !isFilterable,
                        ref,
                        value: inputValue,
                        ...getOptionalLabelProps({
                            id,
                            label,
                            labelProps: getLabelProps({
                                htmlFor: id,
                            }),
                            labelTooltip,
                        }),
                        ...inputProps,
                    })}
                />

                <SelectItemList
                    getIsItemSelected={getIsItemSelected}
                    getItemProps={getItemProps}
                    getMenuProps={getMenuProps}
                    getSelectedItemProps={undefined}
                    highlightedIndex={highlightedIndex}
                    isMulti={false}
                    isOpen={isOpen}
                    items={items}
                    ref={isOpen ? refs.setFloating : undefined}
                    size={size}
                    style={floatingStyles}
                />
            </Box>
        );
    }
);
