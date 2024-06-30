import type { ComponentProps } from "react";
import type { ComboBoxProps as AriaComboBoxProps } from "react-aria-components";

import { faAnglesUpDown } from "@fortawesome/pro-solid-svg-icons/faAnglesUpDown";
import clsx from "clsx";
import { forwardRef, useContext } from "react";
import {
    ComboBox as AriaCombobox,
    ComboBoxStateContext,
} from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";

import type { IterableListBoxItem } from "../list-box";

import { FieldButton } from "../field-button";
import { FieldError } from "../field-error";
import { Icon } from "../icon";
import { Input } from "../input";
import { ListBox } from "../list-box";
import { Popover } from "../popover";
import "./styles.css";

/**
 * Button for triggering the ComboBox.
 */
export function ComboBoxButton() {
    return (
        <FieldButton>
            <Icon icon={faAnglesUpDown} />
        </FieldButton>
    );
}

/**
 * Input for the ComboBox.
 */
export const ComboBoxInput = forwardRef<
    HTMLInputElement,
    ComponentProps<typeof Input>
>((props, ref) => {
    const state = useContext(ComboBoxStateContext);
    const { selectedItem, toggle } = state || {};
    const { value } = selectedItem || {};
    const { slotLeft } = value || {};

    return (
        <Input
            {...props}
            defaultValue={value?.name}
            icon={slotLeft}
            onClick={() => {
                toggle(null, "manual");
            }}
            placeholder={selectedItem ? selectedItem.value.name : ""}
            ref={ref}
        />
    );
});

/**
 * A combo box combines a text input with a listbox, allowing users to filter a list of options to items matching a query.
 *
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 * ## Usage
 *
 * ```tsx
 * import { ComboBox, ComboBoxButton } from "boondoggle";
 * ```
 */
export const ComboBox = forwardRef<HTMLDivElement, AriaComboBoxProps<object>>(
    ({ children, ...props }, ref) => {
        return (
            <AriaCombobox
                {...props}
                className={clsx(props.className, "combobox")}
                ref={ref}
            >
                {(renderProps) => (
                    <>
                        {typeof children === "function"
                            ? children(renderProps)
                            : children}

                        <Popover>
                            <ListBox<string> />
                        </Popover>
                    </>
                )}
            </AriaCombobox>
        );
    },
);
