import clsx from "clsx";

import { variantColorOverlay } from "../../src/styles/color_palette.css";
import { hideLastpassStyle } from "../../src/styles/common/hide_lastpass.css";
import { Box } from "../box/Box";
import { FieldDescription } from "../field-description";
import { FieldErrorMessage } from "../field-error-message";
import { FieldLabel } from "../field-label";

import type { ReactNode } from "react";
import type {
	WithColorOverlay,
	WithDescription,
	WithHideLastpass,
	WithOptionalLabel,
	WithStateInvalid,
	WithWrapperProps,
} from "../../src/common-types";

type FieldWrapperProps = WithColorOverlay &
	WithOptionalLabel &
	WithHideLastpass &
	WithDescription &
	WithStateInvalid &
	WithWrapperProps &
	WithStateInvalid & {
		/**
		 * The field element to wrap.
		 */
		children: ReactNode;
	};

/**
 * A wrapper for a field.
 */
export function FieldWrapper({
	children,
	color,
	description,
	errorMessage,
	hideLastpass,
	invalid,
	isLabelVisible = true,
	label,
	labelProps,
	labelTooltip,
	name,
	wrapperProps,
}: FieldWrapperProps) {
	return (
		<Box
			className={clsx(color ? variantColorOverlay[color] : undefined, {
				[variantColorOverlay.red]: invalid,
				[hideLastpassStyle]: hideLastpass,
			})}
			color="text_low_contrast"
			position="relative"
			{...wrapperProps}
		>
			{label && name && (
				<FieldLabel
					htmlFor={name}
					isLabelVisible={isLabelVisible}
					label={label}
					labelTooltip={labelTooltip}
					{...labelProps}
				/>
			)}

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
