import { Button } from "../button";

import type { UseDatePickerValue } from "@rehookify/datepicker";

type DatePickerYearsProps = {
  years: UseDatePickerValue["data"]["years"];
  yearButton: UseDatePickerValue["propGetters"]["yearButton"];
  onYearClick: () => void;
};

export function DatePickerYears({
  years,
  yearButton,
  onYearClick,
}: DatePickerYearsProps) {
  return (
    <>
      {years.map((calendarYear) => {
        return (
          <Button
            appearance={calendarYear.selected ? "primary" : "ghost"}
            width="100%"
            name={calendarYear.year.toString()}
            {...yearButton(calendarYear, {
              onClick: onYearClick,
            })}
          >
            {calendarYear.year}
          </Button>
        );
      })}
    </>
  );
}
