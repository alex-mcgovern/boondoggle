import type { CalendarDate, ZonedDateTime } from "@internationalized/date";
import type { ForwardedRef } from "react";
import type { DatePickerProps as AriaDatePickerProps } from "react-aria-components";

import { faCalendar } from "@fortawesome/pro-solid-svg-icons/faCalendar";
import { DatePicker as AriaDatePicker } from "react-aria-components";

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
export function DatePicker({
    children,
    ref,
    ...props
}: AriaDatePickerProps<CalendarDate | ZonedDateTime> & {
    ref?: ForwardedRef<HTMLDivElement>;
}) {
    return (
        <AriaDatePicker
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
}
