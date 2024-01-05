import { faExclamationCircle } from "@fortawesome/pro-solid-svg-icons/faExclamationCircle";
import clsx from "clsx";
import { variantColorOverlay } from "../index.css";
import { Icon } from "../icon";
import { Box } from "../box";
import type { BoxProps } from "../box";

export type FieldErrorMessageProps = BoxProps & {
	/**
	 * The error message shown to the user.
	 */
	message?: React.ReactNode;
};

/**
 * Renders an inline error message for a form field.
 */
export function FieldErrorMessage({
	className: userClassName,
	message,
	...rest
}: FieldErrorMessageProps) {
	if (!message) {
		return null;
	}

	if (message) {
		return (
			<Box
				alignItems="center"
				className={clsx(userClassName, variantColorOverlay.red)}
				color="text_low_contrast"
				display="flex"
				fontStyle="bodySm"
				gap="space_1"
				marginY="space_1"
				role="alert"
				{...rest}
			>
				<Icon icon={faExclamationCircle} />
				{message}
			</Box>
		);
	}
	return null;
}
