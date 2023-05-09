import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import { Box } from "../box";
import { Button } from "../button";
import { Icon } from "../icon";
import * as styles from "./date_picker.styles.css";

import type { BoxProps } from "../box";
import type {
  Calendar,
  CalendarYear,
  UseDatePickerValue,
} from "@rehookify/datepicker";

type DatePickerControlsProps = {
  isShowingYears: boolean;
  month: Calendar["month"];
  nextMonthButton: UseDatePickerValue["propGetters"]["nextMonthButton"];
  nextYearsButton: UseDatePickerValue["propGetters"]["nextYearsButton"];
  onToggleYears: () => void;
  previousMonthButton: UseDatePickerValue["propGetters"]["previousMonthButton"];
  previousYearsButton: UseDatePickerValue["propGetters"]["previousYearsButton"];
  year: Calendar["year"];
  years: Array<CalendarYear>;
} & BoxProps;

export function DatePickerControls({
  isShowingYears,
  month,
  year,
  years,
  previousYearsButton,
  nextYearsButton,
  previousMonthButton,
  nextMonthButton,
  onToggleYears,
  ...rest
}: DatePickerControlsProps) {
  return (
    <Box as="header" {...rest}>
      <Box
        display="flex"
        width="100%"
        gap="spacing1"
        justifyContent="space-between"
        alignItems="center"
        marginBottom="spacing2"
      >
        <Button
          appearance="ghost"
          name="prev-month"
          size="square"
          slotLeft={<Icon icon={faAngleLeft} />}
          {...(isShowingYears ? previousYearsButton() : previousMonthButton())}
        />

        <button
          type="button"
          onClick={onToggleYears}
          className={styles.titleButton}
        >
          {isShowingYears ? (
            <> {`${years[0].year} - ${years[years.length - 1].year}`}</>
          ) : (
            <>
              {month} {year}
            </>
          )}
          <Icon icon={faAngleDown} />
        </button>

        <Button
          appearance="ghost"
          name="next-month"
          size="square"
          slotLeft={<Icon icon={faAngleRight} />}
          {...(isShowingYears ? nextYearsButton() : nextMonthButton())}
        />
      </Box>
    </Box>
  );
}
