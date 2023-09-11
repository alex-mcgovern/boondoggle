import { faAngleDown, faAngleLeft, faAngleRight } from "@fortawesome/pro-solid-svg-icons";

import { Box } from "../../box";
import { Button } from "../../button";
import { Icon } from "../../icon";

import type { BoxProps } from "../../box";
import type {
    DPCalendar,
    DPUseMonthsPropGetters,
    DPUseYearsPropGetters,
    DPYear,
} from "@rehookify/datepicker";

type DatePickerControlsProps = {
    /**
     * Whether the date picker is showing years or not.
     */
    isShowingYears: boolean;

    /**
     * The current month being displayed/
     */
    month: DPCalendar["month"];

    /**
     * The React node for the next month button.
     */
    nextMonthButton: ReturnType<DPUseMonthsPropGetters>["nextMonthButton"];

    /**
     * The React node for the next years button.
     */
    nextYearsButton: ReturnType<DPUseYearsPropGetters>["nextYearsButton"];

    /**
     * Callback when years view is toggled on/off.
     */
    onToggleYears: () => void;

    /**
     * The React node for the previous month button.
     */
    previousMonthButton: ReturnType<DPUseMonthsPropGetters>["previousMonthButton"];

    /**
     * The React node for the previous years button.
     */
    previousYearsButton: ReturnType<DPUseYearsPropGetters>["previousYearsButton"];

    /**
     * The current year.
     */
    year: DPCalendar["year"];

    /**
     * The current years in range.
     */
    years: Array<DPYear>;
} & BoxProps;

/**
 * Renders controls for the date picker.
 */
export function DatePickerControls({
    isShowingYears,
    month,
    nextMonthButton,
    nextYearsButton,
    onToggleYears,
    previousMonthButton,
    previousYearsButton,
    year,
    years,
    ...rest
}: DatePickerControlsProps) {
    return (
        <Box
            as="header"
            {...rest}
        >
            <Box
                alignItems="center"
                display="flex"
                gap="space_2"
                justifyContent="space-between"
                marginBottom="space_4"
                width="100%"
            >
                <Button
                    {...(isShowingYears ? previousYearsButton() : previousMonthButton())}
                    appearance="ghost"
                    name="prev"
                    size="square_md"
                    slotLeft={[<Icon icon={faAngleLeft} />]}
                />

                <Button
                    appearance="ghost"
                    name="toggle_years"
                    onClick={onToggleYears}
                >
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
                    size="square_md"
                    slotLeft={[<Icon icon={faAngleRight} />]}
                />
            </Box>
        </Box>
    );
}
