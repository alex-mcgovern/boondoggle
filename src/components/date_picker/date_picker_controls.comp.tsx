import {
  faAngleDown,
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";

import { Box } from "../box";
import { Button } from "../button";
import { Icon } from "../icon";

import type { BoxProps } from "../box";
import type {
  DPCalendar,
  DPUseMonthsPropGetters,
  DPUseYearsPropGetters,
  DPYear,
} from "@rehookify/datepicker";

type DatePickerControlsProps = {
  isShowingYears: boolean;
  month: DPCalendar["month"];
  nextMonthButton: ReturnType<DPUseMonthsPropGetters>["nextMonthButton"];
  nextYearsButton: ReturnType<DPUseYearsPropGetters>["nextYearsButton"];
  onToggleYears: () => void;
  previousMonthButton: ReturnType<DPUseMonthsPropGetters>["previousMonthButton"];
  previousYearsButton: ReturnType<DPUseYearsPropGetters>["previousYearsButton"];
  year: DPCalendar["year"];
  years: Array<DPYear>;
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
        alignItems="center"
        display="flex"
        gap="spacing1"
        justifyContent="space-between"
        marginBottom="spacing2"
        width="100%"
      >
        <Button
          {...(isShowingYears ? previousYearsButton() : previousMonthButton())}
          appearance="ghost"
          name="prev"
          size="square"
          slotLeft={<Icon icon={faAngleLeft} />}
        />

        <Button appearance="ghost" name="toggle_years" onClick={onToggleYears}>
          {isShowingYears ? (
            <> {`${years[0].year} - ${years[years.length - 1].year}`}</>
          ) : (
            <>
              {month} {year}
            </>
          )}
          <Icon icon={faAngleDown} />
        </Button>

        <Button
          {...(isShowingYears ? nextYearsButton() : nextMonthButton())}
          appearance="ghost"
          name="next"
          size="square"
          slotLeft={<Icon icon={faAngleRight} />}
        />
      </Box>
    </Box>
  );
}
