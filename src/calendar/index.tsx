import {
	Calendar as RACCalendar,
	CalendarProps as RACCalendarProps,
	CalendarCell as RACCalendarCell,
	CalendarGrid as RACCalendarGrid,
	Heading as RACHeading,
	type DateValue as RACDateValue,
	CalendarGridBody as RACCalendarGridBody,
	CalendarGridHeader as RACCalendarGridHeader,
	CalendarHeaderCell as RACCalendarHeaderCell,
} from "react-aria-components";
import { Button } from "../button";
import { Icon } from "../icon";
import { faAngleRight } from "@fortawesome/pro-regular-svg-icons/faAngleRight";
import { faAngleLeft } from "@fortawesome/pro-regular-svg-icons/faAngleLeft";
import {
	calendarCSS,
	calendarCellCSS,
	calendarGridHeaderCellCSS,
	calendarHeaderCSS,
	calendarHeadingCSS,
} from "./styles.css";
import clsx from "clsx";

export const Calendar = <TDateValue extends RACDateValue>(
	props: RACCalendarProps<TDateValue>,
) => {
	return (
		<RACCalendar {...props} className={clsx(props.className, calendarCSS)}>
			<header className={calendarHeaderCSS}>
				<Button appearance="ghost" slot="previous">
					<Icon icon={faAngleLeft} />
				</Button>
				<RACHeading className={calendarHeadingCSS} />
				<Button appearance="ghost" slot="next">
					<Icon icon={faAngleRight} />
				</Button>
			</header>
			<RACCalendarGrid>
				<RACCalendarGridHeader>
					{(day) => (
						<RACCalendarHeaderCell
							className={calendarGridHeaderCellCSS}
						>
							{day}
						</RACCalendarHeaderCell>
					)}
				</RACCalendarGridHeader>
				<RACCalendarGridBody>
					{(date) => (
						<RACCalendarCell
							className={calendarCellCSS}
							date={date}
						/>
					)}
				</RACCalendarGridBody>
			</RACCalendarGrid>
		</RACCalendar>
	);
};
