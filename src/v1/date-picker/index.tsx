import { faAngleDown } from "@fortawesome/pro-solid-svg-icons/faAngleDown";
import { faAngleLeft } from "@fortawesome/pro-solid-svg-icons/faAngleLeft";
import { faAngleRight } from "@fortawesome/pro-solid-svg-icons/faAngleRight";
import {
	type DPCalendar,
	type DPDay,
	type DPUseMonthsPropGetters,
	type DPUseYearsPropGetters,
	type DPYear,
	useDatePicker,
	useDaysPropGetters,
} from "@rehookify/datepicker";
import clsx from "clsx";
import { forwardRef, useCallback, useState } from "react";
import type { MouseEvent, Ref } from "react";
import { variantColorOverlay } from "../../index.css";
import { Icon } from "../../v2/icon";
import { Box } from "../box";
import type { BoxProps } from "../box";
import { Button } from "../button";
import { sprinkles } from "../sprinkles/index.css";
import { datePickerRootCSS } from "./styles.css";

export function DatePickerYears({
	onYearClick,
	yearButton,
	years,
}: {
	onYearClick: () => void;
	yearButton: ReturnType<DPUseYearsPropGetters>["yearButton"];
	years: Array<DPYear>;
}) {
	return (
		<>
			{years.map((calendarYear) => {
				return (
					<Button
						appearance={calendarYear.selected ? "primary" : "ghost"}
						key={calendarYear.year.toString()}
						name={calendarYear.year.toString()}
						className={sprinkles({
							width: "100%",
						})}
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

export function DatePickerDays({
	dayButton,
	days,
	onDayClick,
}: {
	dayButton: ReturnType<typeof useDaysPropGetters>["dayButton"];
	days: Array<DPDay>;
	month: DPCalendar["month"];
	onDayClick: (evt: MouseEvent<HTMLElement>, date: Date) => void;
}) {
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
						appearance={getDayButtonAppearance({
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
}: {
	isShowingYears: boolean;
	month: DPCalendar["month"];
	nextMonthButton: ReturnType<DPUseMonthsPropGetters>["nextMonthButton"];
	nextYearsButton: ReturnType<DPUseYearsPropGetters>["nextYearsButton"];
	onToggleYears: () => void;
	previousMonthButton: ReturnType<DPUseMonthsPropGetters>["previousMonthButton"];
	previousYearsButton: ReturnType<DPUseYearsPropGetters>["previousYearsButton"];
	year: DPCalendar["year"];
	years: Array<DPYear>;
}) {
	return (
		<Box as="header">
			<Box
				alignItems="center"
				display="flex"
				gap="space_2"
				justifyContent="space-between"
				marginBottom="space_4"
				width="100%"
			>
				<Button
					{...(isShowingYears
						? previousYearsButton()
						: previousMonthButton())}
					appearance="ghost"
					name="prev"
					size="square_md"
				>
					<Icon icon={faAngleLeft} />
				</Button>

				<Button
					appearance="ghost"
					name="toggle_years"
					onClick={onToggleYears}
				>
					{isShowingYears ? (
						<>
							{" "}
							{`${years[0].year} - ${
								years[years.length - 1].year
							}`}
						</>
					) : (
						<>
							{month} {year}
						</>
					)}
					<Icon icon={faAngleDown} />
				</Button>

				<Button
					{...(isShowingYears
						? nextYearsButton()
						: nextMonthButton())}
					appearance="ghost"
					name="next"
					size="square_md"
				>
					<Icon icon={faAngleRight} />
				</Button>
			</Box>
		</Box>
	);
}

export type DatePickerProps = {
	/**
	 * Optional CSS class name.
	 */
	className?: string;

	/**
	 * Callback when a day is selected.
	 */
	onDayClick: (evt: MouseEvent<HTMLElement>, date: Date) => void;
} & BoxProps;

export const DatePicker = forwardRef(
	(
		{ className: userClassName, onDayClick, ...rest }: DatePickerProps,
		ref: Ref<HTMLElement>,
	) => {
		const [selectedDates, onDatesChange] = useState<Date[]>([]);

		const [isShowingYears, setIsShowingYears] = useState(false);

		const {
			data: { calendars, years },
			propGetters: {
				dayButton,
				nextMonthButton,
				nextYearsButton,
				previousMonthButton,
				previousYearsButton,
				yearButton,
			},
		} = useDatePicker({
			calendar: {
				mode: "static",
			},
			dates: {
				mode: "single",
			},
			onDatesChange,
			selectedDates,
			years: {
				numberOfYears: 20,
				step: 20,
			},
		});

		const { days, month, year } = calendars[0];

		const onToggleYears = useCallback(() => {
			setIsShowingYears((prev) => {
				return !prev;
			});
		}, []);

		const onYearClick = useCallback(() => {
			setIsShowingYears(false);
		}, []);

		return (
			<Box
				__minWidth="24rem"
				as="section"
				className={clsx(
					userClassName,
					datePickerRootCSS,
					variantColorOverlay.default,
				)}
				ref={ref}
				{...rest}
			>
				<DatePickerControls
					isShowingYears={isShowingYears}
					month={month}
					nextMonthButton={nextMonthButton}
					nextYearsButton={nextYearsButton}
					onToggleYears={onToggleYears}
					previousMonthButton={previousMonthButton}
					previousYearsButton={previousYearsButton}
					year={year}
					years={years}
				/>

				<Box
					display="grid"
					gap="space_2"
					gridTemplateColumns={isShowingYears ? "4x" : "7x"}
				>
					{isShowingYears ? (
						<DatePickerYears
							onYearClick={onYearClick}
							yearButton={yearButton}
							years={years}
						/>
					) : (
						<DatePickerDays
							dayButton={dayButton}
							days={days}
							month={month}
							onDayClick={onDayClick}
						/>
					)}
				</Box>
			</Box>
		);
	},
);
