import type { ButtonProps as RACButtonProps } from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { Button as RACButton } from "react-aria-components";

import { fieldButtonCSS } from "./styles.css";

export type FieldButtonProps = RACButtonProps;

/**
 * A field button is a button that is intended to be used inside a `Group` component
 * to add additional functionality to a field. The `slot` prop is used to connect the
 * button to the field.
 */
export const FieldButton = forwardRef<HTMLButtonElement, FieldButtonProps>(
    (props: RACButtonProps, ref) => {
        return (
            <RACButton
                {...props}
                className={clsx(props.className, fieldButtonCSS)}
                excludeFromTabOrder
                ref={ref}
            />
        );
    },
);
