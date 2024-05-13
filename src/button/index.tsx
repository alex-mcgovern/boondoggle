import type { ForwardedRef } from "react";
import type {
    ButtonProps as AriaButtonProps,
    LinkProps as AriaLinkProps,
} from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { Button as AriaButton, Link as AriaLink } from "react-aria-components";

import "./styles.css";

/**
 * A button allows a user to perform an action, with mouse, touch, and keyboard interactions.
 * [Built with React Aria Button](https://react-spectrum.adobe.com/react-aria/Button.html)
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
 * import { Button } from "boondoggle"
 * ```
 */
export const Button = forwardRef<
    HTMLButtonElement,
    AriaButtonProps & {
        /**
         * Alignment for the LinkButton.
         */
        align?: "center" | "start";
        /**
         * The appearance of the button.
         */
        appearance?: "ghost" | "primary" | "secondary";
        /**
         * React ref for the button element.
         */
        ref?: ForwardedRef<HTMLButtonElement>;
        /**
         * The size of the button.
         */
        size?: "lg" | "md" | "sm";
        /**
         * Whether the button is square.
         */
        square?: boolean;
    }
>(
    (
        { align, appearance = "primary", className, size, ...props },
        ref: ForwardedRef<HTMLButtonElement>,
    ) => {
        return (
            <AriaButton
                {...props}
                className={clsx("btn", className, appearance, size, align, {
                    square: props.square,
                })}
                ref={ref}
            />
        );
    },
);

/**
 * A link allows a user to navigate to another page or resource within a web page or application.
 *
 * [Built with React Aria Link](https://react-spectrum.adobe.com/react-aria/Link.html)
 */
export function LinkButton({
    align,
    appearance = "primary",
    className,
    size,
    ...props
}: AriaLinkProps & {
    /**
     * Alignment for the LinkButton.
     */
    align?: "center" | "start";
    /**
     * The appearance of the button.
     */
    appearance?: "ghost" | "primary" | "secondary";
    /**
     * Whether the link points to the current page or resource.
     */
    isCurrent?: boolean;
    /**
     * The size of the button.
     */
    size?: "lg" | "md" | "sm";
    /**
     * Whether the button is square.
     */
    square?: boolean;
}) {
    return (
        <AriaLink
            {...props}
            className={clsx("btn", className, appearance, size, align, {
                square: props.square,
            })}
        />
    );
}
