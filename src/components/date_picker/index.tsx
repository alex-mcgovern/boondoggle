import { useDatePicker } from "@rehookify/datepicker";
import clsx from "clsx";
import { forwardRef, useCallback, useState } from "react";

import { Box } from "../box";
import { DatePickerControls } from "./components/date_picker_controls.comp";
import { DatePickerDays } from "./components/date_picker_days.comp";
import { DatePickerYears } from "./components/date_picker_years.comp";
import * as styles from "./styles.css";

import type { BoxProps } from "../box";
import type { MouseEvent, Ref } from "react";

export type DatePickerProps = {
    /**
     * Optional CSS class name.
     */
    className?: string;

    /**
     * Callback when a day is selected.
     */
    onDayClick: (evt: MouseEvent<HTMLElement>, date: Date) => void;
} & BoxProps;

export const DatePicker = forwardRef(
    (
        {
            className: userClassName,
            onDayClick,

            ...rest
        }: DatePickerProps,
        ref: Ref<HTMLElement>
    ) => {
        const [selectedDates, onDatesChange] = useState<Date[]>([]);

        const [isShowingYears, setIsShowingYears] = useState(false);

        const {
            data: { calendars, years },
            propGetters: {
                dayButton,
                nextMonthButton,
                nextYearsButton,
                previousMonthButton,
                previousYearsButton,
                yearButton,
            },
        } = useDatePicker({
            calendar: {
                mode: "static",
            },
            dates: {
                mode: "single",
            },
            onDatesChange,
            selectedDates,
            years: {
                numberOfYears: 20,
                step: 20,
            },
        });

        const { days, month, year } = calendars[0];

        const onToggleYears = useCallback(() => {
            setIsShowingYears((prev) => {return !prev});
        }, []);

        const onYearClick = useCallback(() => {
            setIsShowingYears(false);
        }, []);

        return (
            <Box
                __minWidth="24rem"
                as="section"
                className={clsx(userClassName, styles.datePickerRoot)}
                ref={ref}
                {...rest}
            >
                <DatePickerControls
                    isShowingYears={isShowingYears}
                    month={month}
                    nextMonthButton={nextMonthButton}
                    nextYearsButton={nextYearsButton}
                    onToggleYears={onToggleYears}
                    previousMonthButton={previousMonthButton}
                    previousYearsButton={previousYearsButton}
                    year={year}
                    years={years}
                />

                <Box
                    display="grid"
                    gap="space_2"
                    gridTemplateColumns={isShowingYears ? "4x" : "7x"}
                >
                    {isShowingYears ? (
                        <DatePickerYears
                            onYearClick={onYearClick}
                            yearButton={yearButton}
                            years={years}
                        />
                    ) : (
                        <DatePickerDays
                            dayButton={dayButton}
                            days={days}
                            month={month}
                            onDayClick={onDayClick}
                        />
                    )}
                </Box>
            </Box>
        );
    }
);
