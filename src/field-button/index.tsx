import type { ButtonProps as AriaButtonProps } from "react-aria-components";

import clsx from "clsx";
import { Button as AriaButton } from "react-aria-components";

import "./styles.css";

/**
 * A field button is a button that is intended to be used inside a `Group` component
 * to add additional functionality to a field. The `slot` prop is used to connect the
 * button to the field. [Built with React Aria Button](https://react-spectrum.adobe.com/react-aria/Button.html)
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
 * import { FieldButton, type FieldButtonProps } from "boondoggle/field-button"
 * ```
 */
export function FieldButton({ ...props }: AriaButtonProps) {
    return (
        <AriaButton
            {...props}
            className={clsx(props.className, "field-button")}
            excludeFromTabOrder
        />
    );
}
