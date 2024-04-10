import { faMinus } from "@fortawesome/pro-solid-svg-icons/faMinus";
import { faPlus } from "@fortawesome/pro-solid-svg-icons/faPlus";
import clsx from "clsx";
import { forwardRef } from "react";
import {
    NumberField as RACNumberField,
    type NumberFieldProps as RACNumberFieldProps,
} from "react-aria-components";

import { FieldButton } from "../field-button";
import { Icon } from "../icon";
import { numberFieldCSS } from "./styles.css";

/**
 * A `FieldButton` to decrement the number field value. [Built with React Button component](https://react-spectrum.adobe.com/react-aria/Button.html)
 */
export function NumberFieldIncrementButton() {
    return (
        <FieldButton slot="increment">
            <Icon icon={faPlus} />
        </FieldButton>
    );
}

/**
 * A `FieldButton` to increment the number field value. [Built with React Button component](https://react-spectrum.adobe.com/react-aria/Button.html)
 */
export function NumberFieldDecrementButton() {
    return (
        <FieldButton slot="decrement">
            <Icon icon={faMinus} />
        </FieldButton>
    );
}

export type NumberFieldProps = RACNumberFieldProps;

/**
 * A number field allows a user to enter a number, and increment or decrement the value using stepper buttons. [Built with React Aria NumberField component](https://react-spectrum.adobe.com/react-aria/NumberField.html)
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
 * import { NumberField, type NumberFieldProps } from "boondoggle/number-field"
 * ```
 */
export const NumberField = forwardRef<HTMLInputElement, NumberFieldProps>(
    (props, ref) => {
        return (
            <RACNumberField
                {...props}
                className={clsx(props.className, numberFieldCSS)}
                ref={ref}
            />
        );
    },
);
