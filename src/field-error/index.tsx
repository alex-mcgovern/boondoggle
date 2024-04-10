import type { FieldErrorProps as RACFieldErrorProps } from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { FieldError as RACFieldError } from "react-aria-components";

import { fieldErrorCss } from "./styles.css";

export type FieldErrorProps = RACFieldErrorProps;

/**
 * A <FieldError> displays validation errors.
 *
 * ## Install
 *
 * ```sh
 * npm i boondoggle
 * ```
 *
 * ## Usage
 *
 * ```ts
 * import { FieldError, type FieldErrorProps } from "boondoggle/field-error"
 * ```
 */
export const FieldError = forwardRef<HTMLDivElement, FieldErrorProps>(
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
