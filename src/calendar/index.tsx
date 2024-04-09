import type {
    CalendarProps as RACCalendarProps,
    DateValue as RACDateValue,
} from "react-aria-components";

import { faAngleLeft } from "@fortawesome/pro-solid-svg-icons/faAngleLeft";
import { faAngleRight } from "@fortawesome/pro-solid-svg-icons/faAngleRight";
import clsx from "clsx";
import {
    Calendar as RACCalendar,
    CalendarCell as RACCalendarCell,
    CalendarGrid as RACCalendarGrid,
    CalendarGridBody as RACCalendarGridBody,
    CalendarGridHeader as RACCalendarGridHeader,
    CalendarHeaderCell as RACCalendarHeaderCell,
    Heading as RACHeading,
} from "react-aria-components";

import { Button } from "../button";
import { Icon } from "../icon";
import {
    calendarCSS,
    calendarCellCSS,
    calendarGridHeaderCSS,
    calendarGridHeaderCellCSS,
    calendarHeaderCSS,
    calendarHeadingCSS,
} from "./styles.css";

/**
 * Calendars display a grid of days in one or more months and allow users to select a single date.
 *
 * > [Built with React Aria Calendar](https://react-spectrum.adobe.com/react-aria/Calendar.html)
 */
export function Calendar<TDateValue extends RACDateValue>(
    props: RACCalendarProps<TDateValue>,
) {
    return (
        <RACCalendar
            {...props}
            className={clsx(props.className, calendarCSS)}
        >
            <header className={calendarHeaderCSS}>
                <Button
                    appearance="ghost"
                    slot="previous"
                >
                    <Icon icon={faAngleLeft} />
                </Button>
                <RACHeading className={calendarHeadingCSS} />
                <Button
                    appearance="ghost"
                    slot="next"
                >
                    <Icon icon={faAngleRight} />
                </Button>
            </header>
            <RACCalendarGrid>
                <RACCalendarGridHeader className={calendarGridHeaderCSS}>
                    {(day) => (
                        <RACCalendarHeaderCell
                            className={calendarGridHeaderCellCSS}
                        >
                            {day}
                        </RACCalendarHeaderCell>
                    )}
                </RACCalendarGridHeader>
                <RACCalendarGridBody>
                    {(date) => (
                        <RACCalendarCell
                            className={({
                                isDisabled,
                                isFocused,
                                isFocusVisible,
                                isHovered,
                                isInvalid,
                                isOutsideMonth,
                                isOutsideVisibleRange,
                                isPressed,
                                isSelected,
                                isSelectionEnd,
                                isSelectionStart,
                                isUnavailable,
                            }) =>
                                calendarCellCSS({
                                    isDisabled,
                                    isFocused,
                                    isFocusVisible,
                                    isHovered,
                                    isInvalid,
                                    isOutsideMonth,
                                    isOutsideVisibleRange,
                                    isPressed,
                                    isSelected,
                                    isSelectionEnd,
                                    isSelectionStart,
                                    isUnavailable,
                                })
                            }
                            date={date}
                        />
                    )}
                </RACCalendarGridBody>
            </RACCalendarGrid>
        </RACCalendar>
    );
}
