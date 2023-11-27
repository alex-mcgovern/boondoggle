import { faExclamationCircle } from "@fortawesome/pro-solid-svg-icons/faExclamationCircle";
import clsx from "clsx";
import {
	FieldError as ReactAriaFieldError,
	FieldErrorProps as ReactAriaFieldErrorProps,
} from "react-aria-components";
import { Box } from "../box";
import type { BoxProps } from "../box";
import { Icon } from "../icon";
import { variantColorOverlay } from "../index.css";

/**
 * Renders an inline error message for a form field.
 */
export function V2FieldError({
	className: userClassName,
	message,
	...rest
}: BoxProps & ReactAriaFieldErrorProps) {
	return (
		<Box
			as={ReactAriaFieldError}
			alignItems="center"
			className={clsx(userClassName, variantColorOverlay.red)}
			color="text_low_contrast"
			display="flex"
			fontStyle="bodySm"
			gap="space_1"
			marginY="space_1"
			{...rest}
		>
			<Icon icon={faExclamationCircle} />
			{message}
		</Box>
	);
}
