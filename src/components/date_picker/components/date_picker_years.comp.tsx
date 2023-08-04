import { Button } from "../../interactive.button";

import type { DPUseYearsPropGetters, DPYear } from "@rehookify/datepicker";

type DatePickerYearsProps = {
  onYearClick: () => void;
  yearButton: ReturnType<DPUseYearsPropGetters>["yearButton"];
  years: Array<DPYear>;
};

export function DatePickerYears({
  onYearClick,
  yearButton,
  years,
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
