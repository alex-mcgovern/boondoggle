import type { CalendarProps as RACCalendarProps } from "react-aria-components";

import { faAngleLeft } from "@fortawesome/pro-regular-svg-icons/faAngleLeft";
import { faAngleRight } from "@fortawesome/pro-regular-svg-icons/faAngleRight";
import clsx from "clsx";
import {
    Calendar as RACCalendar,
    CalendarCell as RACCalendarCell,
    CalendarGrid as RACCalendarGrid,
    CalendarGridBody as RACCalendarGridBody,
    CalendarGridHeader as RACCalendarGridHeader,
    CalendarHeaderCell as RACCalendarHeaderCell,
    type DateValue as RACDateValue,
    Heading as RACHeading,
} from "react-aria-components";

import { Button } from "../button";
import { Icon } from "../icon";
import {
    calendarCSS,
    calendarCellCSS,
    calendarGridHeaderCellCSS,
    calendarHeaderCSS,
    calendarHeadingCSS,
} from "./styles.css";

export const Calendar = <TDateValue extends RACDateValue>(
    props: RACCalendarProps<TDateValue>,
) => {
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
                <RACCalendarGridHeader>
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
                            className={calendarCellCSS}
                            date={date}
                        />
                    )}
                </RACCalendarGridBody>
            </RACCalendarGrid>
        </RACCalendar>
    );
};
