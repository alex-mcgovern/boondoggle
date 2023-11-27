import { faExclamationCircle } from "@fortawesome/pro-solid-svg-icons/faExclamationCircle";
import clsx from "clsx";
import {
	FieldError as ReactAriaFieldError,
	FieldErrorProps as ReactAriaFieldErrorProps,
} from "react-aria-components";
import { Icon } from "../icon";
import { variantColorOverlay } from "../index.css";
import { forwardRef } from "react";
import { fieldErrorCss } from "./styles.css";

/**
 * Renders an inline error message for a form field.
 */
export const V2FieldError = forwardRef<
	HTMLDivElement,
	ReactAriaFieldErrorProps
>(({ className, children }, ref) => {
	return (
		<div
			className={clsx(className, fieldErrorCss, variantColorOverlay.red)}
		>
			<Icon icon={faExclamationCircle} />
			<ReactAriaFieldError ref={ref}>{children}</ReactAriaFieldError>
		</div>
	);
});
