import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { useDatePicker } from "@rehookify/datepicker";
import { useState } from "react";

import { Box } from "../box";
import { Button } from "../button";
import { Card } from "../card";
import { Icon } from "../icon";

import type { MouseEvent } from "react";

export function DatePicker() {
  const [selectedDates, onDatesChange] = useState<Date[]>([]);
  const {
    data: { weekDays, calendars },
    propGetters: { dayButton, previousMonthButton, nextMonthButton },
  } = useDatePicker({
    selectedDates,
    onDatesChange,
  });

  // calendars[0] is always present, this is an initial calendar
  const { year, month, days } = calendars[0];

  const onDayClick = (evt: MouseEvent<HTMLElement>, date: Date) => {
    // In case you need any action with evt
    evt.stopPropagation();

    // In case you need any additional action with date
    console.log(date);
  };

  // selectedDates is an array of dates
  // formatted with date.toLocaleDateString(locale, options)
  return (
    <Card as="section" width="max-content">
      {selectedDates.length > 0 && <h1>{selectedDates[0]}</h1>}
      <header>
        <Box
          display="flex"
          width="100%"
          gap="spacing1"
          justifyContent="space-between"
        >
          <Button
            appearance="secondary"
            name="prev-month"
            size="square"
            slotLeft={<Icon icon={faAngleLeft} />}
            {...previousMonthButton()}
          />
          <Box as="p" fontWeight="semibold">
            {month} {year}
          </Box>
          <Button
            appearance="secondary"
            name="next-month"
            size="square"
            slotLeft={<Icon icon={faAngleRight} />}
            {...nextMonthButton()}
          />
        </Box>
        <Box
          gap="spacing1"
          display="grid"
          __gridTemplateColumns="repeat(7, 1fr)"
        >
          {weekDays.map((day) => {
            return <Box key={`${month}-${day}`}>{day}</Box>;
          })}
        </Box>
      </header>
      <Box gap="spacing1" display="grid" __gridTemplateColumns="repeat(7, 1fr)">
        {days.map((dpDay) => {
          return (
            <Box key={`${month}-${dpDay.day}`}>
              <Button
                appearance="secondary"
                name={`${month}-${dpDay.day}`}
                size="square"
                {...dayButton(dpDay, { onClick: onDayClick })}
              >
                {dpDay.day}
              </Button>
            </Box>
          );
        })}
      </Box>
    </Card>
  );
}
