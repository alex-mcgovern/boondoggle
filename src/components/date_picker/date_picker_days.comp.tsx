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
  dayButton: ReturnType<typeof useDaysPropGetters>["dayButton"];
  days: Array<CalendarDay>;
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
            appearance={getDayButtonAppearance({
              now: calendarDay.now,
              selected: calendarDay.selected,
            })}
            key={calendarDay.$date.toISOString()}
            name={calendarDay.$date.toISOString()}
            size="square"
          >
            {calendarDay.day}
          </Button>
        );
      })}
    </>
  );
}
