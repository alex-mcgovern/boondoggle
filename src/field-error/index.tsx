import clsx from "clsx";
import { forwardRef } from "react";
import {
	FieldError as RACFieldError,
	FieldErrorProps as RACFieldErrorProps,
} from "react-aria-components";
import { fieldErrorCss } from "./styles.css";

export const FieldError = forwardRef<HTMLDivElement, RACFieldErrorProps>(
	(props, ref) => {
		return (
			<RACFieldError
				{...props}
				className={clsx(props.className, fieldErrorCss)}
				ref={ref}
			/>
		);
	},
);
