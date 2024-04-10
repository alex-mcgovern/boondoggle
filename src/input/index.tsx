import type { ReactNode } from "react";
import type { InputProps as RACInputProps } from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { Input as RACInput } from "react-aria-components";

import { inputCSS, inputContainerCSS, inputIconCSS } from "./styles.css";

export type InputProps = RACInputProps & {
    /**
     * The icon to display on the left side of the input.
     * Designed for use with the `Icon` component from boondoggle, but can be any React node.
     */
    icon?: ReactNode;
    /**
     * The variant of the input.
     * - `default` is the default input style.
     * - `unstyled` is for use within a `Group` component, and will remove all styles from the input.
     */
    variant?: "default" | "unstyled";
};

/**
 * An `Input` component, for use with a `TextField` component. [Built with React Aria Input component](https://react-spectrum.adobe.com/react-aria/TextField.html#input)
 */
export const Input = forwardRef<HTMLInputElement, InputProps>((props, ref) => {
    return (
        <div className={inputContainerCSS}>
            {props.icon && <div className={inputIconCSS}>{props.icon}</div>}
            <RACInput
                {...props}
                className={(renderProps) =>
                    clsx(
                        props.className,
                        inputCSS({
                            ...renderProps,
                            hasIcon: props.icon ? "true" : "false",
                            variant: props.variant ?? "default",
                        }),
                    )
                }
                ref={ref}
            />
        </div>
    );
});
