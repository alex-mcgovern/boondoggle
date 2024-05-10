import type { ComponentProps, ForwardedRef } from "react";

import { faMinus } from "@fortawesome/pro-solid-svg-icons/faMinus";
import { faPlus } from "@fortawesome/pro-solid-svg-icons/faPlus";
import clsx from "clsx";
import { useEffect } from "react";
import {
    NumberField as AriaNumberField,
    type NumberFieldProps as AriaNumberFieldProps,
} from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";

import { FieldButton } from "../field-button";
import { FieldError } from "../field-error";
import { Icon } from "../icon";
import "./styles.css";

/**
 * A `FieldButton` to decrement the number field value. [Built with React Button component](https://react-spectrum.adobe.com/react-aria/Button.html)
 */
export function NumberFieldIncrementButton() {
    return (
        <FieldButton slot="increment">
            <Icon icon={faPlus} />
        </FieldButton>
    );
}

/**
 * A `FieldButton` to increment the number field value. [Built with React Button component](https://react-spectrum.adobe.com/react-aria/Button.html)
 */
export function NumberFieldDecrementButton() {
    return (
        <FieldButton slot="decrement">
            <Icon icon={faMinus} />
        </FieldButton>
    );
}

/**
 * A number field allows a user to enter a number, and increment or decrement the value using stepper buttons. [Built with React Aria NumberField component](https://react-spectrum.adobe.com/react-aria/NumberField.html)
 *
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 * ## Usage
 *
 * ```ts
 * import { NumberField, type NumberFieldProps } from "boondoggle/number-field"
 * ```
 */
export function NumberField({
    ref,
    ...props
}: AriaNumberFieldProps & { ref?: ForwardedRef<HTMLInputElement> }) {
    return (
        <AriaNumberField
            {...props}
            className={clsx(props.className, "number-field")}
            ref={ref}
        />
    );
}

/** -----------------------------------------------------------------------------
 * FormNumberField
 * ------------------------------------------------------------------------------- */

/**
 * A form number field connects a `NumberField` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/NumberField.html)
 */
export function FormNumberField({
    children,
    ...props
}: ComponentProps<typeof NumberField>) {
    if (!props.name) {
        throw new Error("FormNumberField requires a name prop");
    }

    const { control } = useFormContext();

    const {
        field: {
            disabled: isDisabled,
            onChange,
            ref,
            value = props.value,
            ...field
        },
        fieldState: { error, invalid },
    } = useController({
        control,
        defaultValue: props.defaultValue,
        disabled: props.isDisabled,
        name: props.name,
    });

    useEffect(() => {
        onChange(props.value);
    }, [onChange, props.value]);

    return (
        <NumberField
            {...props}
            {...field}
            isDisabled={isDisabled}
            isInvalid={invalid}
            onChange={(k) => {
                onChange(k);
                props.onChange?.(k);
            }}
            ref={ref}
            validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
            value={value}
        >
            {() => {
                return (
                    <>
                        {children}
                        <FieldError>{error?.message}</FieldError>
                    </>
                );
            }}
        </NumberField>
    );
}
