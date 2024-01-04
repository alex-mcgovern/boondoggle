import clsx from "clsx";
import type { ReactNode } from "react";
import { hideLastpassStyle, variantColorOverlay } from "../../index.css";
import type {
	V2Label,
	WithColorOverlay,
	WithDescription,
	WithHideLastpass,
	WithStateInvalid,
	WithWrapperProps,
} from "../../types";
import { Box } from "../box";
import { FieldDescription } from "../field-description";
import { FieldErrorMessage } from "../field-error-message";
import { Label } from "../../v2/label";

export type FieldWrapperProps = WithColorOverlay &
	WithHideLastpass &
	WithDescription &
	WithStateInvalid &
	WithWrapperProps &
	WithStateInvalid & {
		/**
		 * Name & ID of the field.
		 */
		name: string;

		/**
		 * The field element to wrap.
		 */
		children: ReactNode;

		/**
		 * Label config for the field.
		 */
		label: V2Label;
	};

/**
 * A wrapper for a field.
 */
export function FieldWrapper({
	children,
	colorOverlay,
	description,
	errorMessage,
	hideLastpass,
	invalid,
	label,
	name,
	wrapperProps,
}: FieldWrapperProps) {
	return (
		<Box
			className={clsx(
				colorOverlay ? variantColorOverlay[colorOverlay] : undefined,
				{
					[variantColorOverlay.red]: invalid,
					[hideLastpassStyle]: hideLastpass,
				},
			)}
			color="text_low_contrast"
			position="relative"
			{...wrapperProps}
		>
			<Label name={name} label={label} />

			{children}

			{invalid && errorMessage && (
				<FieldErrorMessage message={errorMessage} />
			)}

			{description && !invalid && (
				<FieldDescription description={description} />
			)}
		</Box>
	);
}
