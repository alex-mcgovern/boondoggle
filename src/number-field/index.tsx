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

export const NumberFieldIncrementButton = () => {
    return (
        <FieldButton slot="increment">
            <Icon icon={faPlus} />
        </FieldButton>
    );
};

export const NumberFieldDecrementButton = () => {
    return (
        <FieldButton slot="decrement">
            <Icon icon={faMinus} />
        </FieldButton>
    );
};

export type NumberFieldProps = RACNumberFieldProps;

/**
 * A number field allows a user to enter a number, and increment or decrement the value using stepper buttons.
 *
 * [React Aria Documentation](https://react-spectrum.adobe.com/react-aria/NumberField.html)
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
