import type { CalendarDate, ZonedDateTime } from "@internationalized/date";
import type { ComponentProps, ReactNode } from "react";
import type { DatePickerProps as AriaDatePickerProps } from "react-aria-components";

import { faCalendar } from "@fortawesome/pro-solid-svg-icons/faCalendar";
import { faTimes } from "@fortawesome/pro-solid-svg-icons/faTimes";
import { useContext } from "react";
import { forwardRef } from "react";
import { DatePickerStateContext } from "react-aria-components";
import { Dialog } from "react-aria-components";
import { DatePicker as AriaDatePicker } from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";

import { Button } from "../button";
import { Calendar } from "../calendar";
import { FieldButton } from "../field-button";
import { FieldError } from "../field-error";
import { Icon } from "../icon";
import { Popover } from "../popover";

/**
 * Button for triggering the DatePicker.
 */
export function DatePickerButton() {
	return (
		<FieldButton>
			<Icon icon={faCalendar} />
		</FieldButton>
	);
}

/**
 * Clear button for the DatePicker.
 */
export function DatePickerClearButton() {
	const { setValue, value } = useContext(DatePickerStateContext)!;

	if (!value) {
		return null;
	}
	return (
		<FieldButton
			aria-label="Clear"
			className="clear-button"
			onPress={() => setValue(null)}
			slot={null}
		>
			<Icon icon={faTimes} />
		</FieldButton>
	);
}

/**
 * Preset component for the DatePicker.
 */
export function DatePickerPreset({
	children,
	date,
}: {
	children: ReactNode;
	date: ZonedDateTime;
}) {
	const { setValue } = useContext(DatePickerStateContext);

	const onPress = () => {
		setValue(date);
	};

	return (
		<Button
			appearance="secondary"
			onPress={onPress}
			slot={null}
		>
			{children}
		</Button>
	);
}

/**
 * A date picker combines a DateField and a Calendar popover to allow users to enter or select a date and time value.
 * [Built with React Aria DatePicker](https://react-spectrum.adobe.com/react-aria/DatePicker.html)
 *
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 * ## Usage
 *
 * ```ts
 * import { DatePicker, DatePickerButton } from "boondoggle";
 * ```
 */
export const DatePicker = forwardRef<
	HTMLDivElement,
	AriaDatePickerProps<CalendarDate | ZonedDateTime>
>((props, ref) => {
	return (
		<AriaDatePicker
			{...props}
			ref={ref}
		>
			{(values) => {
				return (
					<>
						{typeof props.children === "function"
							? props.children(values)
							: props.children}
						<Popover
							className="p-1"
							placement="bottom end"
						>
							<Dialog>
								<Calendar />
							</Dialog>
						</Popover>
					</>
				);
			}}
		</AriaDatePicker>
	);
});

/**
 * A `FormDatePicker` connects a `DatePicker` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/DatePicker.html)
 */
export function FormDatePicker({
	children,
	defaultValue,
	...props
}: ComponentProps<typeof DatePicker>) {
	if (!props.name) {
		throw new Error("FormDatePicker requires a name prop");
	}

	const { control } = useFormContext();

	const {
		field: { disabled: isDisabled, onChange, ref, value, ...field },
		fieldState: { error, invalid },
	} = useController({
		control,
		defaultValue: defaultValue,
		disabled: props.isDisabled,
		name: props.name,
	});

	return (
		<DatePicker
			{...props}
			{...field}
			isDisabled={isDisabled}
			isInvalid={invalid}
			onChange={(v) => {
				onChange(v);
				props.onChange?.(v);
			}}
			ref={ref}
			validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
			value={value}
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
