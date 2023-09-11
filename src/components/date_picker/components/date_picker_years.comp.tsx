import { Button } from "../../button";

import type { DPUseYearsPropGetters, DPYear } from "@rehookify/datepicker";

type DatePickerYearsProps = {
    /**
     * Callback when a year is selected.
     */
    onYearClick: () => void;

    /**
     * Props getter for a year button.
     */
    yearButton: ReturnType<DPUseYearsPropGetters>["yearButton"];

    /**
     * Array of currently visible years.
     */
    years: Array<DPYear>;
};

/**
 * Renders a grid of year buttons for the date picker.
 */
export function DatePickerYears({ onYearClick, yearButton, years }: DatePickerYearsProps) {
    return (
        <>
            {years.map((calendarYear) => {return (
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
            )})}
        </>
    );
}
