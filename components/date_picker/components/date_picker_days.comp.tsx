import { Button } from "../../button/Button";

import type {
	DPCalendar,
	DPDay,
	useDaysPropGetters,
} from "@rehookify/datepicker";
import type { MouseEvent } from "react";

const getDayButtonAppearance = ({
	now,
	selected,
}: Pick<DPDay, "now" | "selected">) => {
	if (selected) {
		return "primary";
	}
	if (now) {
		return "secondary";
	}

	return "ghost";
};

type DatePickerDaysProps = {
	/**
	 * Props getter for a day button.
	 */
	dayButton: ReturnType<typeof useDaysPropGetters>["dayButton"];

	/**
	 * The currently visible days.
	 */
	days: Array<DPDay>;

	/**
	 * The current month.
	 */
	month: DPCalendar["month"];

	/**
	 * Callback when the suer clicks on a day.
	 */
	onDayClick: (evt: MouseEvent<HTMLElement>, date: Date) => void;
};

/**
 * Renders a grid of day buttons for the date picker component.
 */
export function DatePickerDays({
	dayButton,
	days,
	onDayClick,
}: DatePickerDaysProps) {
	return (
		<>
			{days.map((calendarDay) => {
				if (!calendarDay.inCurrentMonth) {
					return null;
				}

				return (
					<Button
						{...dayButton(calendarDay, {
							onClick: onDayClick,
						})}
						variant={getDayButtonAppearance({
							now: calendarDay.now,
							selected: calendarDay.selected,
						})}
						key={calendarDay.$date.toISOString()}
						name={calendarDay.$date.toISOString()}
						size="square_md"
					>
						{calendarDay.day}
					</Button>
				);
			})}
		</>
	);
}
