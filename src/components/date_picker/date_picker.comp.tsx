import { useDatePicker } from "@rehookify/datepicker";
import { forwardRef, useCallback, useState } from "react";

import { Box } from "../box";
import { DatePickerControls } from "./date_picker_controls.comp";
import { DatePickerDayNames } from "./date_picker_day_names.comp";
import { DatePickerDays } from "./date_picker_days.comp";
import { DatePickerYears } from "./date_picker_years.comp";

import type { BoxProps } from "../box";
import type { MouseEvent, Ref } from "react";

type DatePickerProps = {
  onDayClick: (evt: MouseEvent<HTMLElement>, date: Date) => void;
} & BoxProps;

export const DatePicker = forwardRef(
  ({ onDayClick, ...rest }: DatePickerProps, ref: Ref<HTMLButtonElement>) => {
    console.log("DatePicker");

    const [selectedDates, onDatesChange] = useState<Date[]>([]);
    const [isShowingYears, setIsShowingYears] = useState(false);

    const {
      data: { weekDays, calendars, years },
      propGetters: {
        dayButton,
        previousMonthButton,
        nextMonthButton,
        previousYearsButton,
        nextYearsButton,
        yearButton,
      },
    } = useDatePicker({
      selectedDates,
      onDatesChange,
      dates: {
        mode: "single",
      },
      calendar: {
        mode: "static",
      },
      years: {
        numberOfYears: 24,
        step: 24,
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
        background="background"
        border="border_default"
        borderRadius="md"
        padding="spacing2"
        as="section"
        width="max-content"
        __minWidth="24rem"
        ref={ref}
        {...rest}
      >
        {/** ----------------------------------------------------------------------------
         * Controls
         * ------------------------------------------------------------------------------- */}

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

        {/** ----------------------------------------------------------------------------
         * Days
         * ------------------------------------------------------------------------------- */}

        <Box
          gap="spacing1"
          display="grid"
          __gridTemplateColumns="repeat(7, 1fr)"
        />

        <Box
          gap="spacing1"
          display="grid"
          __gridTemplateColumns={
            isShowingYears ? "repeat(4, 1fr)" : "repeat(7, 1fr)"
          }
        >
          {!isShowingYears && (
            <DatePickerDayNames month={month} weekDays={weekDays} />
          )}

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
