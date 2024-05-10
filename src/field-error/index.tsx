import type { ForwardedRef } from "react";
import type { FieldErrorProps as AriaFieldErrorProps } from "react-aria-components";

import clsx from "clsx";
import { FieldError as AriaFieldError } from "react-aria-components";

import "./styles.css";

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
export function FieldError({
    ref,
    ...props
}: AriaFieldErrorProps & { ref?: ForwardedRef<HTMLDivElement> }) {
    return (
        <AriaFieldError
            {...props}
            className={clsx(props.className, "field-error")}
            ref={ref}
        />
    );
}
