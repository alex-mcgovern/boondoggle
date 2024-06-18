import type {
    CalendarProps as AriaCalendarProps,
    DateValue as AriaDateValue,
} from "react-aria-components";

import { faAngleLeft } from "@fortawesome/pro-solid-svg-icons/faAngleLeft";
import { faAngleRight } from "@fortawesome/pro-solid-svg-icons/faAngleRight";
import clsx from "clsx";
import {
    Calendar as AriaCalendar,
    CalendarCell as AriaCalendarCell,
    CalendarGrid as AriaCalendarGrid,
    CalendarGridBody as AriaCalendarGridBody,
    CalendarGridHeader as AriaCalendarGridHeader,
    CalendarHeaderCell as AriaCalendarHeaderCell,
    Heading as AriaHeading,
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
 * import { Calendar } from "boondoggle";
 * ```
 */
export function Calendar<TDateValue extends AriaDateValue>(
    props: AriaCalendarProps<TDateValue>,
) {
    return (
        <AriaCalendar
            {...props}
            className={clsx(props.className, "calendar")}
        >
            <header className="header">
                <Button
                    appearance="ghost"
                    size="sm"
                    slot="previous"
                    square
                >
                    <Icon icon={faAngleLeft} />
                </Button>
                <AriaHeading
                    className="heading"
                    level={3}
                />
                <Button
                    appearance="ghost"
                    size="sm"
                    slot="next"
                    square
                >
                    <Icon icon={faAngleRight} />
                </Button>
            </header>
            <AriaCalendarGrid>
                <AriaCalendarGridHeader className="grid-header">
                    {(day) => (
                        <AriaCalendarHeaderCell className="cell">
                            {day}
                        </AriaCalendarHeaderCell>
                    )}
                </AriaCalendarGridHeader>
                <AriaCalendarGridBody className="grid-body">
                    {(date) => {
                        const isToday = date.day === new Date().getDate();

                        return (
                            <AriaCalendarCell
                                className="cell"
                                data-today={isToday}
                                date={date}
                            />
                        );
                    }}
                </AriaCalendarGridBody>
            </AriaCalendarGrid>
        </AriaCalendar>
    );
}
