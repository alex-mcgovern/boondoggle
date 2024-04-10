import type { TextProps as RACTextProps } from "react-aria-components";

import clsx from "clsx";
import { Text as RACText } from "react-aria-components";

import { descriptionCSS } from "./styles.css";

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
            className={clsx(props.className, descriptionCSS)}
            slot="description"
        />
    );
}
