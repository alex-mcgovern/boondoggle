import { faCalendar } from "@fortawesome/pro-regular-svg-icons/faCalendar";
import { type CalendarDate, parseDate } from "@internationalized/date";
import {
	DatePicker as RACDatePicker,
	DatePickerProps as RACDatePickerProps,
	Dialog as RACDialog,
} from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";
import { menuCSS } from "../_css/menu.css";
import { Calendar } from "../calendar";
import { FieldButton } from "../field-button";
import { FieldError } from "../field-error";
import { Icon } from "../icon";
import { Popover } from "../popover";

/** -----------------------------------------------------------------------------
 * DatePickerButton
 * ------------------------------------------------------------------------------- */

export const DatePickerButton = () => {
	return (
		<FieldButton>
			<Icon icon={faCalendar} />
		</FieldButton>
	);
};

/** -----------------------------------------------------------------------------
 * DatePicker
 * ------------------------------------------------------------------------------- */

/**
 * A date picker combines a DateField and a Calendar popover to allow users to enter or select a date and time value.
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/DatePicker.html)
 */

export type DatePickerProps = RACDatePickerProps<CalendarDate>;

export const DatePicker = ({
	children,
	...props
}: RACDatePickerProps<CalendarDate>) => {
	return (
		<RACDatePicker {...props}>
			{(values) => {
				return (
					<>
						{typeof children === "function"
							? children(values)
							: children}
						<Popover placement="bottom end" className={menuCSS}>
							<RACDialog>
								<Calendar />
							</RACDialog>
						</Popover>
					</>
				);
			}}
		</RACDatePicker>
	);
};

/** -----------------------------------------------------------------------------
 * FormDatePicker
 * ------------------------------------------------------------------------------- */

/**
 * A `FormDatePicker` connects a `DatePicker` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/DatePicker.html)
 */
export function FormDatePicker({ children, ...props }: DatePickerProps) {
	if (!props.name) {
		throw new Error("FormDatePicker requires a name prop");
	}

	const { control } = useFormContext();

	const {
		field: { ref, value = null, disabled: isDisabled, onChange, ...field },
		fieldState: { error, invalid },
	} = useController({
		control,
		defaultValue: props.defaultValue,
		name: props.name,
	});

	return (
		<DatePicker
			{...props}
			{...field}
			onChange={(v) => {
				onChange(v.toString());
				props.onChange?.(v);
			}}
			value={value ? parseDate(value) : value}
			validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
			isInvalid={invalid}
		>
			{() => {
				return (
					<>
						{children}
						<FieldError>{error?.message}</FieldError>
					</>
				);
			}}
		</DatePicker>
	);
}
