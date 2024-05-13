import type { ComboBoxProps as AriaComboBoxProps } from "react-aria-components";

import { faAnglesUpDown } from "@fortawesome/pro-solid-svg-icons/faAnglesUpDown";
import clsx from "clsx";
import { forwardRef } from "react";
import { ComboBox as AriaCombobox } from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";

import type { IterableListBoxItem } from "../list-box";

import { FieldButton } from "../field-button";
import { FieldError } from "../field-error";
import { Icon } from "../icon";
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
 * import { ComboBox, ComboBoxButton } from "boondoggle/combobox";
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
                {(values) => (
                    <>
                        {typeof children === "function"
                            ? children(values)
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

/**
 * A `FormComboBox` connects a `ComboBox` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/ComboBox.html)
 */
export function FormComboBox<TItemId extends string = string>({
    children,
    ...props
}: AriaComboBoxProps<IterableListBoxItem<TItemId>>) {
    if (!props.name) {
        throw new Error("FormComboBox requires a name prop");
    }

    const { control } = useFormContext();

    const {
        field: { disabled, onChange, ref, value = "", ...field },
        fieldState: { error, invalid },
    } = useController({
        control,
        defaultValue: props.selectedKey || props.defaultSelectedKey,
        disabled: props.isDisabled,
        name: props.name,
    });

    return (
        <ComboBox
            {...props}
            {...field}
            isDisabled={disabled}
            isInvalid={invalid}
            onSelectionChange={(k) => {
                onChange(k);
                props.onSelectionChange?.(k);
            }}
            ref={ref}
            selectedKey={value}
            validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
        >
            {() => {
                return (
                    <>
                        {children}
                        <FieldError>{error?.message}</FieldError>
                    </>
                );
            }}
        </ComboBox>
    );
}
