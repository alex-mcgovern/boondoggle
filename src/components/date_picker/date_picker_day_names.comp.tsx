import { Box } from "../box";

import type { UseDatePickerValue } from "@rehookify/datepicker";

type DatePickerDayNamesProps = {
  weekDays: UseDatePickerValue["data"]["weekDays"];
};

export function DatePickerDayNames({ weekDays }: DatePickerDayNamesProps) {
  return (
    <>
      {weekDays.map((day) => {
        return (
          <Box
            color="text_low_contrast"
            fontStyle="body_sm"
            key={day}
            textAlign="center"
          >
            {day}
          </Box>
        );
      })}
    </>
  );
}
