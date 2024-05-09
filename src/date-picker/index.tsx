import type { CalendarDate, ZonedDateTime } from "@internationalized/date";
import type { DatePickerProps as RACDatePickerProps } from "react-aria-components";

import { faCalendar } from "@fortawesome/pro-solid-svg-icons/faCalendar";
import { forwardRef } from "react";
import { DatePicker as RACDatePicker } from "react-aria-components";

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

export type DatePickerProps = RACDatePickerProps<CalendarDate | ZonedDateTime>;

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
            </RACDatePicker>
        );
    },
);
