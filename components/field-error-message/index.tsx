import { faExclamationCircle } from "@fortawesome/pro-solid-svg-icons"; import clsx from "clsx"; import { Box } from "../box/Box"; import { Icon } from "../icon"; import type { BoxProps } from "../box/Box"; import { theme } from "../../style.css";

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
				className={clsx(userClassName, theme.red)}
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
