import { autoUpdate, flip, offset, useFloating, useMergeRefs } from "@floating-ui/react";
import { faAngleDown } from "@fortawesome/sharp-regular-svg-icons";
import { useSelect } from "downshift";
import * as React from "react";

import { Box } from "../../box";
import { Button } from "../../button";
import { Icon } from "../../icon";
import { SelectItemList } from "../t_select_item_list";

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
import type { UseComboboxStateChange, UseSelectStateChange } from "downshift";

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
        onChange?: (changes: UseSelectStateChange<SelectItemShape>) => void;
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
        ref
    ) => {
        const { getItemProps, getMenuProps, getToggleButtonProps, highlightedIndex, isOpen } =
            useSelect({
                initialSelectedItem,
                items,
                onSelectedItemChange: onChange,
                // Ensure that onClick is called when the user presses Enter on an item.
                onStateChange(changes) {
                    if (changes.type === useSelect.stateChangeTypes.ToggleButtonKeyDownEnter) {
                        changes.selectedItem?.onClick?.();
                    }
                },
            });

        const { floatingStyles, refs } = useFloating({
            middleware: [
                offset(4),
                flip({
                    crossAxis: true,
                    fallbackAxisSideDirection: "start",
                }),
            ],
            placement: placement || "bottom-start",
            whileElementsMounted: autoUpdate,
        });

        const triggerRef = useMergeRefs([refs.setReference, ref]);

        /**
         * ---------------------------------------------
         */

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
                        ref: triggerRef,
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
                    ref={refs.setFloating}
                    removeSelectedItem={undefined}
                    size={size}
                    style={floatingStyles}
                />
            </Box>
        );
    }
);
