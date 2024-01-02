import { faExclamationCircle } from "@fortawesome/pro-solid-svg-icons/faExclamationCircle";
import clsx from "clsx";
import { forwardRef } from "react";
import {
	FieldError as ReactAriaFieldError,
	FieldErrorProps as ReactAriaFieldErrorProps,
} from "react-aria-components";
import { variantColorOverlay } from "../../index.css";
import { Icon } from "../icon";
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
