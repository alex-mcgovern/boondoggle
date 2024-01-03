import clsx from "clsx";
import * as React from "react";
import {
	TextField as RACTextField,
	type TextFieldProps as RACTextFieldProps,
} from "react-aria-components";
import { FieldDescription } from "../../v1/field-description";
import { FieldLabelProps } from "../../v1/field-label";
import { V2FieldError } from "../field-error";
import { Input } from "../input";
import { InputProps } from "../input/types";
import { V2Label } from "../label";
import { textFieldCSS } from "./styles.css";

export type TextFieldProps = Omit<
	RACTextFieldProps,
	"children" | "ref" | "aria-label" | "aria-labelledby"
> & {
	// ===== INPUT PROPS =====

	/**
	 * Unique name for the element.
	 * @important Should be a *snake_case* string.
	 * @important This will be used as the HTML element ID.
	 */
	name: string;

	/**
	 * Additional text to display below the input.
	 */
	description?: string | null;

	// ===== VALIDATION PROPS =====

	/**
	 * Error message to display when the input is invalid.
	 */
	errorMessage?: string | null;

	/**
	 * Placeholder for the text field.
	 */
	placeholder?: string;

	// ===== LABEL PROPS =====

	/**
	 * Label text for the text field.
	 * @note This is mandatory, if you do not want to display a label, use `isLabelVisible={false}`.
	 */
	label: string;

	/**
	 * Whether the label is visible or not.
	 */
	isLabelVisible?: boolean;

	/**
	 * Additional props for the label component.
	 */
	labelProps?: Omit<FieldLabelProps, "label"> | undefined;

	/**
	 * A tooltip to display on the label.
	 */
	labelTooltip?: string;

	// ===== SLOT PROPS =====

	slotRightProps?: InputProps["slotRightProps"];
	slotLeftProps?: InputProps["slotLeftProps"];

	// ===== ACTION PROPS =====

	addonClearButton?: InputProps["addonClearButton"];
	addonCopyButton?: InputProps["addonCopyButton"];
	addonVisibilityToggle?: InputProps["addonVisibilityToggle"];
};

export const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>((
	{className, ...props},
	ref,
) => {
	return (
		<RACTextField
			className={clsx(
				className,
				textFieldCSS({
					isDisabled: props.isDisabled,
					isInvalid: props.isInvalid,
				}),
			)}
			id={props.name}
			ref={ref}
			{...props}
		>
			<V2Label
				htmlFor={props.name}
				isInvalid={props.isInvalid}
				isLabelVisible={props.isLabelVisible}
				label={props.label}
				labelTooltip={props.labelTooltip}
			/>

			<Input
				addonClearButton={props.addonClearButton}
				addonCopyButton={props.addonCopyButton}
				defaultValue={props.defaultValue}
				disabled={props.isDisabled}
				invalid={props.isInvalid}
				label={props.label}
				name={props.name}
				slotLeftProps={props.slotLeftProps}
				slotRightProps={props.slotRightProps}
				value={props.value}
				addonVisibilityToggle={props.addonVisibilityToggle}
			/>

			{props.description && !props.isInvalid && props.errorMessage ? (
				<FieldDescription description={props.description} />
			) : null}

			{props.isInvalid && props.errorMessage && (
				<V2FieldError>{props.errorMessage}</V2FieldError>
			)}
		</RACTextField>
	);
});
