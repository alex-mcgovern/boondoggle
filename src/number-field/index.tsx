import type { ComponentProps } from "react";
import type { NumberFieldProps as AriaNumberFieldProps } from "react-aria-components";

import { faMinus } from "@fortawesome/pro-solid-svg-icons/faMinus";
import { faPlus } from "@fortawesome/pro-solid-svg-icons/faPlus";
import clsx from "clsx";
import { forwardRef } from "react";
import { NumberField as AriaNumberField } from "react-aria-components";
import { useController, useFormContext } from "react-hook-form";

import { FieldButton } from "../field-button";
import { FieldError } from "../field-error";
import { Icon } from "../icon";
import "./styles.css";

/**
 * A `FieldButton` to decrement the number field value. [Built with React Button component](https://react-spectrum.adobe.com/react-aria/Button.html)
 */
export function NumberFieldIncrementButton() {
	return (
		<FieldButton slot="increment">
			<Icon icon={faPlus} />
		</FieldButton>
	);
}

/**
 * A `FieldButton` to increment the number field value. [Built with React Button component](https://react-spectrum.adobe.com/react-aria/Button.html)
 */
export function NumberFieldDecrementButton() {
	return (
		<FieldButton slot="decrement">
			<Icon icon={faMinus} />
		</FieldButton>
	);
}

/**
 * A number field allows a user to enter a number, and increment or decrement the value using stepper buttons. [Built with React Aria NumberField component](https://react-spectrum.adobe.com/react-aria/NumberField.html)
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
 * import { NumberField } from "boondoggle";
 * ```
 */
export const NumberField = forwardRef<HTMLInputElement, AriaNumberFieldProps>(
	(props, ref) => {
		return (
			<AriaNumberField
				{...props}
				className={clsx(props.className, "number-field")}
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
export function FormNumberField({
	children,
	...props
}: ComponentProps<typeof NumberField>) {
	if (!props.name) {
		throw new Error("FormNumberField requires a name prop");
	}

	const { control } = useFormContext();

	const {
		field: {
			disabled: isDisabled,
			name,
			onBlur,
			onChange,
			ref,
			value = "",
		},
		fieldState: { error, invalid },
	} = useController({
		control,
		defaultValue: props.value || props.defaultValue,
		disabled: props.isDisabled,
		name: props.name,
	});

	return (
		<NumberField
			{...props}
			defaultValue={value}
			isDisabled={isDisabled}
			isInvalid={invalid}
			name={name}
			onBlur={onBlur}
			onChange={(k) => {
				onChange(k);
				props.onChange?.(k);
			}}
			ref={ref}
			validationBehavior="aria" // Let React Hook Form handle validation instead of the browser.
			value={value}
		>
			{(renderProps) => {
				return (
					<>
						{typeof children === "function"
							? children(renderProps)
							: children}
						<FieldError>{error?.message}</FieldError>
					</>
				);
			}}
		</NumberField>
	);
}
