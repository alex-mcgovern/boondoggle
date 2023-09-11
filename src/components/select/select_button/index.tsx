import { autoUpdate, flip, offset, useFloating } from "@floating-ui/react";
import { faAngleDown } from "@fortawesome/pro-solid-svg-icons";
import { useSelect } from "downshift";
import * as React from "react";

import { useForwardRef } from "../../../hooks/use_forward_ref";
import { Box } from "../../box";
import { Button } from "../../button";
import { Icon } from "../../icon";
import { SelectItemList } from "../select_item_list";

import type {
    WithName,
    WithOptionalLabel,
    WithSize,
    WithSlots,
    WithStateDisabled,
    WithStateInvalid,
} from "../../../common-types";
import type { SprinklesArgs } from "../../../styles/utils/get_sprinkles.css";
import type { ButtonProps } from "../../button";
import type { SelectItemShape } from "../types";
import type { Placement } from "@floating-ui/react";
import type { UseComboboxStateChange } from "downshift";

export type SelectButtonProps = SprinklesArgs &
    WithName &
    WithSize &
    WithSlots &
    WithStateDisabled &
    WithStateInvalid &
    WithOptionalLabel & {
        /**
         * Props to customise the button trigger node.
         */
        buttonProps?: Omit<ButtonProps, "size" | "name" | "disabled" | "id">;

        /**
         * The text to display in the button.
         */
        buttonText?: string;

        /**
         * An item preselected when the component mounts.
         */
        initialSelectedItem?: SelectItemShape;

        /**
         * The items to render in the dropdown.
         */
        isOpen?: boolean;

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

        /**
         * The placement of the dropdown relative to the button.
         */
        placement?: Placement;

        /**
         * Props to customise the wrapper Box component.
         */
        wrapperProps?: Omit<SprinklesArgs, "position">;
    };

export const SelectButton = React.forwardRef<HTMLButtonElement, SelectButtonProps>(
    (
        {
            buttonProps,
            buttonText,
            disabled,
            id,
            initialSelectedItem,
            items,
            name,
            onChange,
            placement,
            size,
            slotLeft,
            slotRight = [<Icon icon={faAngleDown} />],
            wrapperProps,
        },
        initialRef
    ) => {
        const ref = useForwardRef(initialRef);

        const { getItemProps, getMenuProps, getToggleButtonProps, highlightedIndex, isOpen } =
            useSelect({
                defaultHighlightedIndex: undefined,
                initialSelectedItem,
                isItemDisabled: (item) => {
                    return item.disabled;
                },
                items,
                onSelectedItemChange: (changes) => {
                    return onChange?.(changes.selectedItem);
                },
                // Ensure that onClick is called when the user presses Enter on an item.
                onStateChange(changes) {
                    if (changes.type === useSelect.stateChangeTypes.ToggleButtonKeyDownEnter) {
                        changes.selectedItem?.onClick?.();
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
            open: isOpen,
            placement: placement || "bottom-start",
            whileElementsMounted: autoUpdate,
        });

        return (
            <Box
                position="relative"
                {...wrapperProps}
            >
                <Button
                    size={size}
                    slotLeft={slotLeft}
                    slotRight={slotRight}
                    {...getToggleButtonProps?.({
                        ...buttonProps,
                        disabled,
                        id,
                        name,
                        ref,
                    })}
                >
                    {buttonText}
                </Button>

                <SelectItemList
                    getIsItemSelected={undefined}
                    getItemProps={getItemProps}
                    getMenuProps={getMenuProps}
                    getSelectedItemProps={undefined}
                    highlightedIndex={highlightedIndex}
                    isMulti={false}
                    isOpen={isOpen}
                    items={items}
                    ref={isOpen ? refs.setFloating : undefined}
                    size={size}
                    style={isOpen ? floatingStyles : {}}
                />
            </Box>
        );
    }
);
