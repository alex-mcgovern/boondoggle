import * as React from "react";
import {
	NumberField as RACNumberField,
	type NumberFieldProps as RACNumberFieldProps,
} from "react-aria-components";
import { numberFieldCSS } from "./styles.css";
import clsx from "clsx";
import { useController, useFormContext } from "react-hook-form";
import { FieldError } from "../__DONE__field-error";
import { FieldButton } from "../__DONE__field-button";
import { faPlus } from "@fortawesome/pro-regular-svg-icons/faPlus";
import { Icon } from "../__DONE__icon";
import { faMinus } from "@fortawesome/pro-regular-svg-icons/faMinus";

/** -----------------------------------------------------------------------------
 * NumberFieldIncrementButton
 * ------------------------------------------------------------------------------- */

export const NumberFieldIncrementButton = () => {
	return (
		<FieldButton slot="increment">
			<Icon icon={faPlus} />
		</FieldButton>
	);
};

/** -----------------------------------------------------------------------------
 * NumberFieldDecrementButton
 * ------------------------------------------------------------------------------- */

export const NumberFieldDecrementButton = () => {
	return (
		<FieldButton slot="decrement">
			<Icon icon={faMinus} />
		</FieldButton>
	);
};

/** -----------------------------------------------------------------------------
 * NumberField
 * ------------------------------------------------------------------------------- */

export type NumberFieldProps = RACNumberFieldProps;

/**
 * A number field allows a user to enter a number, and increment or decrement the value using stepper buttons.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/NumberField.html)
 */
export const NumberField = React.forwardRef<HTMLInputElement, NumberFieldProps>(
	(props, ref) => {
		return (
			<RACNumberField
				{...props}
				className={clsx(props.className, numberFieldCSS)}
				ref={ref}
			/>
		);
	},
);

/** -----------------------------------------------------------------------------
 * FormNumberField
 * ------------------------------------------------------------------------------- */

/**
 * A form number field connects a `NumberField` to a `Form` component using `react-hook-form`.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/NumberField.html)
 */
export function FormNumberField({ children, ...props }: NumberFieldProps) {
	if (!props.name) {
		throw new Error("FormNumberField requires a name prop");
	}

	const { control } = useFormContext();

	const {
		field: { ref, value = "", disabled: isDisabled, ...field },
		fieldState: { error, invalid },
	} = useController({
		control,
		defaultValue: props.defaultValue,
		name: props.name,
	});

	return (
		<NumberField
			{...props}
			{...field}
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
		</NumberField>
	);
}
