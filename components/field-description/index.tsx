import type { TextProps as RACTextProps } from "react-aria-components";

import clsx from "clsx";
import { Text as RACText } from "react-aria-components";

import "./styles.css";

/**
 * A FieldDescription adds help text within a `TextField`, `DateField` or `NumberField`.
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
 * import { FieldDescription, type FieldDescriptionProps } from "boondoggle/field-description"
 * ```
 */
export function FieldDescription(props: RACTextProps) {
    return (
        <RACText
            {...props}
            className={clsx(props.className, "description")}
            slot="description"
        />
    );
}
