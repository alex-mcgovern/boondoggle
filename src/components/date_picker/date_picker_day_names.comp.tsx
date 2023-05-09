import { Box } from "../box";

import type { Calendar, UseDatePickerValue } from "@rehookify/datepicker";

type DatePickerDayNamesProps = {
  weekDays: UseDatePickerValue["data"]["weekDays"];
  month: Calendar["month"];
};

export function DatePickerDayNames({
  weekDays,
  month,
}: DatePickerDayNamesProps) {
  return (
    <>
      {weekDays.map((day) => {
        return (
          <Box
            color="text_low_contrast"
            fontStyle="body_sm"
            textAlign="center"
            key={`${month}-${day}`}
          >
            {day}
          </Box>
        );
      })}
    </>
  );
}
