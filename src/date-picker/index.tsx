import type { CalendarDate } from "@internationalized/date";
import type { DatePickerProps as RACDatePickerProps } from "react-aria-components";

import { faCalendar } from "@fortawesome/pro-solid-svg-icons/faCalendar";
import { parseDate } from "@internationalized/date";
import { forwardRef } from "react";
import {
    DatePicker as RACDatePicker,
    Dialog as RACDialog,
} from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";

import { menuCSS } from "../_css/menu.css";
import { Calendar } from "../calendar";
import { FieldButton } from "../field-button";
import { FieldError } from "../field-error";
import { Icon } from "../icon";
import { Popover } from "../popover";

/** -----------------------------------------------------------------------------
 * DatePickerButton
 * ------------------------------------------------------------------------------- */

export const DatePickerButton = () => {
    return (
        <FieldButton>
            <Icon icon={faCalendar} />
        </FieldButton>
    );
};

/** -----------------------------------------------------------------------------
 * DatePicker
 * ------------------------------------------------------------------------------- */

/**
 * A date picker combines a DateField and a Calendar popover to allow users to enter or select a date and time value.
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/DatePicker.html)
 */

export type DatePickerProps = RACDatePickerProps<CalendarDate>;

export const DatePicker = forwardRef<HTMLDivElement, DatePickerProps>(
    ({ children, ...props }, ref) => {
        return (
            <RACDatePicker
                {...props}
                ref={ref}
            >
                {(values) => {
                    return (
                        <>
                            {typeof children === "function"
                                ? children(values)
                                : children}
                            <Popover
                                className={menuCSS}
                                placement="bottom end"
                            >
                                <RACDialog>
                                    <Calendar />
                                </RACDialog>
                            </Popover>
                        </>
                    );
                }}
            </RACDatePicker>
        );
    },
);

/** -----------------------------------------------------------------------------
 * FormDatePicker
 * ------------------------------------------------------------------------------- */

/**
 * A `FormDatePicker` connects a `DatePicker` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/DatePicker.html)
 */
export function FormDatePicker({ children, ...props }: DatePickerProps) {
    if (!props.name) {
        throw new Error("FormDatePicker requires a name prop");
    }

    const { control } = useFormContext();

    const {
        field: { disabled: isDisabled, onChange, ref, value = null, ...field },
        fieldState: { error, invalid },
    } = useController({
        control,
        defaultValue: props.defaultValue,
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
                onChange(v.toString());
                props.onChange?.(v);
            }}
            ref={ref}
            validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
            value={value ? parseDate(value) : value}
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
