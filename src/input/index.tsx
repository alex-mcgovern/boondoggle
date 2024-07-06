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
    {
        /**
         * The icon to display on the left side of the input.
         * Designed for use with the `Icon` component from boondoggle, but can be any React node.
         */
        icon?: ReactNode;
        /**
         * Aligns text to the right of the input
         */
        right?: boolean;

        /**
         * The size of the input.
         */
        size?: "lg" | "md" | "sm";
        /**
         * For use within a `Group` component, will remove all styles from the input.
         */
        unstyled?: boolean;
    } & AriaInputProps
>(({ icon, right, size, unstyled, ...props }, ref) => {
    return (
        <div className={clsx("input-container", size)}>
            {icon && <div className="input-icon-container">{icon}</div>}
            <AriaInput
                ref={ref}
                {...props}
                className={clsx(props.className, "input", {
                    "has-icon": !!icon,
                    right,
                    unstyled,
                })}
            />
        </div>
    );
});
