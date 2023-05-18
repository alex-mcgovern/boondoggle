import { Button } from "../button";

import type { UseDatePickerValue } from "@rehookify/datepicker";

type DatePickerYearsProps = {
  onYearClick: () => void;
  yearButton: UseDatePickerValue["propGetters"]["yearButton"];
  years: UseDatePickerValue["data"]["years"];
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
            key={calendarYear.year.toString()}
            name={calendarYear.year.toString()}
            width="100%"
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
