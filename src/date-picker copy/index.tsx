import {
	Button as RACButton,
	ButtonProps as RACButtonProps,
	Calendar as RACCalendar,
	CalendarProps as RACCalendarProps,
	CalendarCell as RACCalendarCell,
	CalendarCellProps as RACCalendarCellProps,
	CalendarGrid as RACCalendarGrid,
	CalendarGridProps as RACCalendarGridProps,
	DateInput as RACDateInput,
	DateInputProps as RACDateInputProps,
	DatePicker as RACDatePicker,
	DatePickerProps as RACDatePickerProps,
	DateSegment as RACDateSegment,
	DateSegmentProps as RACDateSegmentProps,
	Dialog as RACDialog,
	DialogProps as RACDialogProps,
	Group as RACGroup,
	GroupProps as RACGroupProps,
	Heading as RACHeading,
	HeadingProps as RACHeadingProps,
	Label as RACLabel,
	LabelProps as RACLabelProps,
	Popover as RACPopover,
	PopoverProps as RACPopoverProps,
	type DateValue as RACDateValue,
} from "react-aria-components";
import { Popover } from "../popover";
import { Button } from "../button";
import { Icon } from "../icon";
import { faAngleLeft, faAngleRight } from "@fortawesome/pro-regular-svg-icons";

/** -----------------------------------------------------------------------------
 * DateInput
 * ------------------------------------------------------------------------------- */

const DateInput = (props: RACDateInputProps) => {
	return (
		<RACDateInput {...props}>
			{(segment) => <RACDateSegment segment={segment} />}
		</RACDateInput>
	);
};

/** -----------------------------------------------------------------------------
 * Calendar
 * ------------------------------------------------------------------------------- */

const Calendar = <TDateValue extends RACDateValue>(
	props: RACCalendarProps<TDateValue>,
) => {
	return (
		<RACCalendar {...props}>
			<header>
				<Button appearance="ghost" slot="previous">
					<Icon icon={faAngleLeft} />
				</Button>
				<RACHeading />
				<Button appearance="ghost" slot="next">
					<Icon icon={faAngleRight} />
				</Button>
			</header>
			<RACCalendarGrid>
				{(date) => <RACCalendarCell date={date} />}
			</RACCalendarGrid>
		</RACCalendar>
	);
};

/** -----------------------------------------------------------------------------
 * DatePicker
 * ------------------------------------------------------------------------------- */

const DatePicker = <TDateValue extends RACDateValue>(
	props: RACDatePickerProps<TDateValue>,
) => {
	return (
		<RACDatePicker>
			<>
				{/* {(values) =>
					typeof props.children === "function"
						? props.children(values)
						: props.children
				} */}
				<Popover>
					<RACDialog>
						<Calendar>
							<header>
								<Button slot="previous">◀</Button>
								<Heading />
								<Button slot="next">▶</Button>
							</header>
							<CalendarGrid>
								{(date) => <CalendarCell date={date} />}
							</CalendarGrid>
						</Calendar>
					</RACDialog>
				</Popover>
			</>
		</RACDatePicker>
	);
};
