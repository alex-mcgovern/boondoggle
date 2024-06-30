import type { ComponentProps } from "react";

import { useController, useFormContext } from "react-hook-form";

import { DatePicker } from "../../date-picker";
import { FieldError } from "../../field-error";

/**
 * A `FormDatePicker` connects a `DatePicker` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/DatePicker.html)
 */
export function FormDatePicker({
    children,
    defaultValue,
    ...props
}: ComponentProps<typeof DatePicker.Root>) {
    if (!props.name) {
        throw new Error("FormDatePicker requires a name prop");
    }

    const { control } = useFormContext();

    const {
        field: { disabled: isDisabled, onChange, ref, value, ...field },
        fieldState: { error, invalid },
    } = useController({
        control,
        defaultValue: defaultValue,
        disabled: props.isDisabled,
        name: props.name,
    });

    return (
        <DatePicker.Root
            {...props}
            {...field}
            isDisabled={isDisabled}
            isInvalid={invalid}
            onChange={(v) => {
                onChange(v);
                props.onChange?.(v);
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
        </DatePicker.Root>
    );
}
