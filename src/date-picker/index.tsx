import type { CalendarDate, ZonedDateTime } from "@internationalized/date";
import type { ReactNode } from "react";
import type { DatePickerProps as AriaDatePickerProps } from "react-aria-components";

import { faCalendar } from "@fortawesome/pro-solid-svg-icons/faCalendar";
import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import { useContext } from "react";
import { forwardRef } from "react";
import { DatePickerStateContext } from "react-aria-components";
import { Dialog } from "react-aria-components";
import { DatePicker as AriaDatePicker } from "react-aria-components";

import { Button } from "../button";
import { Calendar } from "../calendar";
import { FieldButton } from "../field-button";
import { Icon } from "../icon";
import { Popover } from "../popover";

function DatePickerButton() {
    return (
        <FieldButton>
            <Icon icon={faCalendar} />
        </FieldButton>
    );
}

function DatePickerClearButton() {
    const { setValue, value } = useContext(DatePickerStateContext)!;

    if (!value) {
        return null;
    }
    return (
        <FieldButton
            aria-label="Clear"
            className="clear-button"
            onPress={() => setValue(null)}
            slot={null}
        >
            <Icon icon={faTimes} />
        </FieldButton>
    );
}

function DatePickerPreset({
    children,
    date,
}: {
    children: ReactNode;
    date: ZonedDateTime;
}) {
    const { setValue } = useContext(DatePickerStateContext);

    const onPress = () => {
        setValue(date);
    };

    return (
        <Button
            appearance="secondary"
            onPress={onPress}
            slot={null}
        >
            {children}
        </Button>
    );
}

const DatePickerRoot = forwardRef<
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
                            className="p-1"
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
 * import { DatePicker, DatePickerButton } from "boondoggle";
 * ```
 */
export const DatePicker = {
    Button: DatePickerButton,
    ClearButton: DatePickerClearButton,
    Preset: DatePickerPreset,
    Root: DatePickerRoot,
};
