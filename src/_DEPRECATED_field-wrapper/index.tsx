import clsx from "clsx";
import type { ReactNode } from "react";
import { hideLastpassStyle, variantColorOverlay } from "../index.css";
import type {
	WithColorOverlay,
	WithDescription,
	WithHideLastpass,
	WithStateInvalid,
	WithWrapperProps,
} from "../types";
import { Label } from "../__DONE__label";
import { Box } from "../__DONE__box";
import { FieldDescription } from "../__DONE__field-description";
import { FieldError } from "../__DONE__field-error";

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
		label?: string;
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
			<Label>{label}</Label>

			{children}

			{invalid && errorMessage && <FieldError>{errorMessage}</FieldError>}

			{description && !invalid && (
				<FieldDescription>{description}</FieldDescription>
			)}
		</Box>
	);
}
