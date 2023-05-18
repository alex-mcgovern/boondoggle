import { useDatePicker } from "@rehookify/datepicker";
import clsx from "clsx";
import { forwardRef, useCallback, useState } from "react";

import { Box } from "../box";
import * as styles from "./date_picker.styles.css";
import { DatePickerControls } from "./date_picker_controls.comp";
import { DatePickerDays } from "./date_picker_days.comp";
import { DatePickerYears } from "./date_picker_years.comp";

import type { BoxProps } from "../box";
import type { MouseEvent, Ref } from "react";

export type DatePickerProps = {
  className?:string;
  onDayClick: (evt: MouseEvent<HTMLElement>, date: Date) => void;
} & BoxProps;

export const DatePicker = forwardRef(
  (
    {
      onDayClick,
      className: userClassName,

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
        previousMonthButton,
        nextMonthButton,
        previousYearsButton,
        nextYearsButton,
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
    const { year, month, days } = calendars[0];

    const onToggleYears = useCallback(() => {
      setIsShowingYears((prev) => {
        return !prev;
      });
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
          gap="spacing1"
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
