import type { CheckboxGroupProps as RACCheckboxGroupProps } from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { CheckboxGroup as RACCheckboxGroup } from "react-aria-components";

import { checkboxGroupCSS } from "./styles.css";

export type CheckboxGroupProps = RACCheckboxGroupProps;

export const CheckboxGroup = forwardRef<HTMLDivElement, RACCheckboxGroupProps>(
    (props, ref) => {
        return (
            <RACCheckboxGroup
                {...props}
                className={({
                    isDisabled,
                    isInvalid,
                    isReadOnly,
                    isRequired,
                }) =>
                    clsx(
                        props.className,
                        checkboxGroupCSS({
                            isDisabled,
                            isInvalid,
                            isReadOnly,
                            isRequired,
                        }),
                    )
                }
                ref={ref}
            />
        );
    },
);
