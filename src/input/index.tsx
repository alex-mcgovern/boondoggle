import type { ReactNode } from "react";
import type { InputProps as AriaInputProps } from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { Input as AriaInput } from "react-aria-components";

import "./styles.css";

/**
 * An `Input` component, for use with a `TextField` component. [Built with React Aria Input component](https://react-spectrum.adobe.com/react-aria/TextField.html#input)
 */
export const Input = forwardRef<
    HTMLInputElement,
    AriaInputProps & {
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
    }
>((props) => {
    return (
        <div className="input-container">
            {props.icon && <div className="icon">{props.icon}</div>}
            <AriaInput
                {...props}
                className={clsx(props.className, "input", {
                    "has-icon": !!props.icon,
                    unstyled: props.variant === "unstyled",
                })}
            />
        </div>
    );
});
