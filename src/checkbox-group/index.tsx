import type { CheckboxGroupProps as RACCheckboxGroupProps } from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { CheckboxGroup as RACCheckboxGroup } from "react-aria-components";

import { checkboxGroupCSS } from "./styles.css";

export type CheckboxGroupProps = RACCheckboxGroupProps;

/**
 * A checkbox group allows a user to select multiple items from a list of options.
 *
 * > [Built with React Aria CheckboxGroup](https://react-spectrum.adobe.com/react-aria/CheckboxGroup.html)
 */
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
