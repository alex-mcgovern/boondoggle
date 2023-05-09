import { Button } from "../button";

import type {
  Calendar,
  CalendarDay,
  useDaysPropGetters,
} from "@rehookify/datepicker";
import type { MouseEvent } from "react";

const getDayButtonAppearance = ({
  now,
  selected,
}: Pick<CalendarDay, "now" | "selected">) => {
  if (selected) {
    return "primary";
  }
  if (now) {
    return "secondary";
  }

  return "ghost";
};

type DatePickerDaysProps = {
  days: Array<CalendarDay>;
  dayButton: ReturnType<typeof useDaysPropGetters>["dayButton"];
  month: Calendar["month"];
  onDayClick: (evt: MouseEvent<HTMLElement>, date: Date) => void;
};

export function DatePickerDays({
  days,
  month,
  dayButton,
  onDayClick,
}: DatePickerDaysProps) {
  return (
    <>
      {days.map((calendarDay) => {
        return (
          <>
            {/* {`${month}-${calendarDay.day}`} */}
            <Button
              colorOverlay={
                calendarDay.inCurrentMonth || calendarDay.selected
                  ? undefined
                  : "grey"
              }
              key={`${month}-${calendarDay.day}`}
              appearance={getDayButtonAppearance({
                now: calendarDay.now,
                selected: calendarDay.selected,
              })}
              name={`${month}-${calendarDay.day}`}
              size="square"
              {...dayButton(calendarDay, {
                disabled: !calendarDay.inCurrentMonth,
                onClick: onDayClick,
              })}
            >
              {calendarDay.day}
            </Button>
          </>
        );
      })}
    </>
  );
}
