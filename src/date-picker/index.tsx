import type { CalendarDate, ZonedDateTime } from "@internationalized/date";
import type { ComponentProps } from "react";
import type { DatePickerProps as AriaDatePickerProps } from "react-aria-components";

import { faCalendar } from "@fortawesome/pro-solid-svg-icons/faCalendar";
import { forwardRef } from "react";
import { FieldError } from "react-aria-components";
import { DatePicker as AriaDatePicker } from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";

import { Calendar } from "../calendar";
import { Dialog } from "../dialog";
import { FieldButton } from "../field-button";
import { Icon } from "../icon";
import { Popover } from "../popover";

/**
 * Button for triggering the DatePicker.
 */
export function DatePickerButton() {
    return (
        <FieldButton>
            <Icon icon={faCalendar} />
        </FieldButton>
    );
}

/**
 * A date picker combines a DateField and a Calendar popover to allow users to enter or select a date and time value.
 * [Built with React Aria DatePicker](https://react-spectrum.adobe.com/react-aria/DatePicker.html)
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
 * import { DatePicker, DatePickerButton type DatePickerProps } from "boondoggle/date-picker"
 * ```
 */
export const DatePicker = forwardRef<
    HTMLDivElement,
    AriaDatePickerProps<CalendarDate | ZonedDateTime>
>((props, ref) => {
    return (
        <AriaDatePicker
            {...props}
            ref={ref}
        >
            {(values) => {
                return (
                    <>
                        {typeof props.children === "function"
                            ? props.children(values)
                            : props.children}
                        <Popover
                            className="p2"
                            placement="bottom end"
                        >
                            <Dialog>
                                <Calendar />
                            </Dialog>
                        </Popover>
                    </>
                );
            }}
        </AriaDatePicker>
    );
});

/**
 * A `FormDatePicker` connects a `DatePicker` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/DatePicker.html)
 */
export function FormDatePicker({
    children,
    defaultValue,
    ...props
}: ComponentProps<typeof DatePicker>) {
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
        <DatePicker
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
        </DatePicker>
    );
}
