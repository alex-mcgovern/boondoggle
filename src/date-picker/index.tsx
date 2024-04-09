import type { CalendarDate, ZonedDateTime } from "@internationalized/date";
import type { DatePickerProps as RACDatePickerProps } from "react-aria-components";

import { faCalendar } from "@fortawesome/pro-solid-svg-icons/faCalendar";
import { forwardRef } from "react";
import { DatePicker as RACDatePicker } from "react-aria-components";

import { Calendar } from "../calendar";
import { css } from "../css/index.css";
import { Dialog } from "../dialog";
import { FieldButton } from "../field-button";
import { Icon } from "../icon";
import { Popover } from "../popover";

export function DatePickerButton() {
    return (
        <FieldButton>
            <Icon icon={faCalendar} />
        </FieldButton>
    );
}

/**
 * A date picker combines a DateField and a Calendar popover to allow users to enter or select a date and time value.
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/DatePicker.html)
 */

export type DatePickerProps = RACDatePickerProps<CalendarDate | ZonedDateTime>;

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
                                className={css({ padding: "space_2" })}
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
