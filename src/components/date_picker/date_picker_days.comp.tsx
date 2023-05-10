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
  dayButton,
  onDayClick,
}: DatePickerDaysProps) {
  return (
    <>
      {days.map((calendarDay) => {
        if (!calendarDay.inCurrentMonth) {
          return null;
        }

        return (
          <Button
            {...dayButton(calendarDay, {
              onClick: onDayClick,
            })}
            name={calendarDay.$date.toISOString()}
            key={calendarDay.$date.toISOString()}
            appearance={getDayButtonAppearance({
              now: calendarDay.now,
              selected: calendarDay.selected,
            })}
            size="square"
          >
            {calendarDay.day}
          </Button>
        );
      })}
    </>
  );
}
