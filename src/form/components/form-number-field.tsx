import type { ComponentProps } from "react";

import { useController, useFormContext } from "react-hook-form";

import { FieldError } from "../../field-error";
import { NumberField } from "../../number-field";

/**
 * A form number field connects a `NumberField` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/NumberField.html)
 */
export function FormNumberField({
    children,
    ...props
}: ComponentProps<typeof NumberField.Root>) {
    if (!props.name) {
        throw new Error("FormNumberField requires a name prop");
    }

    const { control } = useFormContext();

    const {
        field: {
            disabled: isDisabled,
            name,
            onBlur,
            onChange,
            ref,
            value = "",
        },
        fieldState: { error, invalid },
    } = useController({
        control,
        defaultValue: props.value || props.defaultValue,
        disabled: props.isDisabled,
        name: props.name,
    });

    return (
        <NumberField.Root
            {...props}
            defaultValue={value}
            isDisabled={isDisabled}
            isInvalid={invalid}
            name={name}
            onBlur={onBlur}
            onChange={(k) => {
                onChange(k);
                props.onChange?.(k);
            }}
            ref={ref}
            validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
            value={value}
        >
            {(renderProps) => {
                return (
                    <>
                        {typeof children === "function"
                            ? children(renderProps)
                            : children}
                        <FieldError>{error?.message}</FieldError>
                    </>
                );
            }}
        </NumberField.Root>
    );
}
