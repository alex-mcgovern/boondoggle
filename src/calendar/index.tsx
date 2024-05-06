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
import "./styles.css";

/**
 * Calendars display a grid of days in one or more months and allow users to select a single date. [Built with React Aria Calendar](https://react-spectrum.adobe.com/react-aria/Calendar.html)
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
 * import { Calendar, type CalendarProps } from "boondoggle/calendar"
 * ```
 */
export function Calendar<TDateValue extends RACDateValue>(
    props: RACCalendarProps<TDateValue>,
) {
    return (
        <RACCalendar
            {...props}
            className={clsx(props.className, "calendar")}
        >
            <header className="header">
                <Button
                    appearance="ghost"
                    slot="previous"
                    size="square_sm"
                >
                    <Icon icon={faAngleLeft} />
                </Button>
                <RACHeading className="heading" />
                <Button
                    appearance="ghost"
                    slot="next"
                    size="square_sm"
                >
                    <Icon icon={faAngleRight} />
                </Button>
            </header>
            <RACCalendarGrid>
                <RACCalendarGridHeader className="grid-header">
                    {(day) => (
                        <RACCalendarHeaderCell className="cell">
                            {day}
                        </RACCalendarHeaderCell>
                    )}
                </RACCalendarGridHeader>
                <RACCalendarGridBody className="grid-body">
                    {(date) => (
                        <RACCalendarCell
                            className="cell"
                            date={date}
                        />
                    )}
                </RACCalendarGridBody>
            </RACCalendarGrid>
        </RACCalendar>
    );
}
