import type { NumberFieldProps as AriaNumberFieldProps } from "react-aria-components";

import { faMinus } from "@fortawesome/pro-solid-svg-icons/faMinus";
import { faPlus } from "@fortawesome/pro-solid-svg-icons/faPlus";
import clsx from "clsx";
import { forwardRef } from "react";
import { NumberField as AriaNumberField } from "react-aria-components";

import { FieldButton } from "../field-button";
import { Icon } from "../icon";
import "./styles.css";

/**
 * A `FieldButton` to decrement the number field value. [Built with React Button component](https://react-spectrum.adobe.com/react-aria/Button.html)
 */
function NumberFieldIncrementButton() {
    return (
        <FieldButton slot="increment">
            <Icon icon={faPlus} />
        </FieldButton>
    );
}

/**
 * A `FieldButton` to increment the number field value. [Built with React Button component](https://react-spectrum.adobe.com/react-aria/Button.html)
 */
function NumberFieldDecrementButton() {
    return (
        <FieldButton slot="decrement">
            <Icon icon={faMinus} />
        </FieldButton>
    );
}

const NumberFieldRoot = forwardRef<HTMLInputElement, AriaNumberFieldProps>(
    (props, ref) => {
        return (
            <AriaNumberField
                {...props}
                className={clsx(props.className, "number-field")}
                ref={ref}
            />
        );
    },
);

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
 * ```tsx
 * import { NumberField, Label, Group, Input } from "boondoggle";
 *
 * <NumberField.Root>
 * 	<Label>Count</Label>
 * 	<Group>
 * 		<Input unstyled />
 * 		<NumberField.DecrementButton />
 * 		<NumberField.IncrementButton />
 * 	</Group>
 * </NumberField.Root>
 * ```
 */
export const NumberField = {
    DecrementButton: NumberFieldDecrementButton,
    IncrementButton: NumberFieldIncrementButton,
    Root: NumberFieldRoot,
};
