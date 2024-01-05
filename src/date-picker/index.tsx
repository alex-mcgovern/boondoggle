import {
	DatePicker as RACDatePicker,
	DatePickerProps as RACDatePickerProps,
	Dialog as RACDialog,
	type DateValue as RACDateValue,
	DatePickerProps,
} from "react-aria-components";
import { Popover } from "../popover";
import { Calendar } from "../calendar";
import { faCalendar } from "@fortawesome/pro-regular-svg-icons/faCalendar";
import { FieldButton } from "../field-button";
import { Icon } from "../icon";
import { menuCSS } from "../_css/menu.css";
import { FieldError } from "../field-error";
import { useController, useFormContext } from "react-hook-form";

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

export const DatePicker = <TDateValue extends RACDateValue>({
	children,
	...props
}: RACDatePickerProps<TDateValue>) => {
	return (
		<RACDatePicker {...props}>
			{(values) => {
				return (
					<>
						{typeof children === "function"
							? children(values)
							: children}
						<Popover placement="bottom" className={menuCSS}>
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
 * FORM TEXT FIELD
 * ------------------------------------------------------------------------------- */

/**
 * A form text field connects a `DatePicker` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/DatePicker.html)
 */
export function FormDatePicker<TDateValue extends RACDateValue>({
	children,
	...props
}: DatePickerProps<TDateValue>) {
	if (!props.name) {
		throw new Error("FormDatePicker requires a name prop");
	}

	const { control } = useFormContext();

	const {
		field: { ref, value = "", disabled: isDisabled, onChange, ...field },
		fieldState: { error, invalid },
	} = useController({
		control,
		defaultValue: props.defaultValue,
		name: props.name,
	});

	return (
		<DatePicker<TDateValue>
			{...props}
			{...field}
			onChange={(v) => {
				onChange(v);
				props.onChange?.(v);
			}}
			value={value}
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
