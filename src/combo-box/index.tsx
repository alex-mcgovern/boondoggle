import type { ForwardedRef } from "react";

import { faAnglesUpDown } from "@fortawesome/pro-regular-svg-icons/faAnglesUpDown";
import clsx from "clsx";
import { forwardRef } from "react";
import {
    type ComboBoxProps as RACComboBoxProps,
    ComboBox as RACCombobox,
} from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";

import type { IterableListBoxItem } from "../list-box";

import { FieldButton } from "../field-button";
import { FieldError } from "../field-error";
import { Icon } from "../icon";
import { ListBox } from "../list-box";
import { Popover } from "../popover";
import { comboBoxCSS } from "./styles.css";

/** -----------------------------------------------------------------------------
 * COMBOBOX BUTTON
 * ------------------------------------------------------------------------------- */

export const ComboBoxButton = () => {
    return (
        <FieldButton>
            <Icon icon={faAnglesUpDown} />
        </FieldButton>
    );
};

/** -----------------------------------------------------------------------------
 * ComboBox
 * ------------------------------------------------------------------------------- */

export type ComboBoxProps<TItemId extends string = string> = RACComboBoxProps<
    IterableListBoxItem<TItemId>
>;

function _ComboBox<TItemId extends string = string>(
    { children, ...props }: ComboBoxProps<TItemId>,
    ref: ForwardedRef<HTMLDivElement>,
) {
    return (
        <RACCombobox
            {...props}
            className={clsx(props.className, comboBoxCSS)}
            menuTrigger="input"
            ref={ref}
        >
            {(values) => (
                <>
                    {typeof children === "function"
                        ? children(values)
                        : children}

                    <Popover>
                        <ListBox<TItemId> />
                    </Popover>
                </>
            )}
        </RACCombobox>
    );
}

export const ComboBox = forwardRef(_ComboBox);

/** -----------------------------------------------------------------------------
 * FormComboBox
 * ------------------------------------------------------------------------------- */

/**
 * A `FormComboBox` connects a `ComboBox` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/ComboBox.html)
 */
export function FormComboBox<TItemId extends string = string>({
    children,
    ...props
}: ComboBoxProps<TItemId>) {
    if (!props.name) {
        throw new Error("FormComboBox requires a name prop");
    }

    const { control } = useFormContext();

    const {
        field: { disabled: isDisabled, onChange, ref, value = "", ...field },
        fieldState: { error, invalid },
    } = useController({
        control,
        defaultValue: props.selectedKey,
        name: props.name,
    });

    return (
        <ComboBox
            {...props}
            {...field}
            isDisabled={isDisabled}
            isInvalid={invalid}
            onSelectionChange={onChange}
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
