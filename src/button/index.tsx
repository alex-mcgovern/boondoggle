import type { ForwardedRef } from "react";
import type {
    ButtonProps as AriaButtonProps,
    LinkProps as AriaLinkProps,
} from "react-aria-components";

import clsx from "clsx";
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
 * import { Button, type ButtonProps } from "boondoggle/button"
 * ```
 */
export function Button({
    appearance = "primary",
    className,
    ref,
    size,
    ...props
}: AriaButtonProps & {
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
    size?:
        | "lg"
        | "md"
        | "sm"
        | "square_lg"
        | "square_md"
        | "square_sm"
        | "square_xs";
}) {
    return (
        <AriaButton
            {...props}
            className={clsx("btn", className, appearance, size)}
            ref={ref}
        />
    );
}

/**
 * A link allows a user to navigate to another page or resource within a web page or application.
 *
 * [Built with React Aria Link](https://react-spectrum.adobe.com/react-aria/Link.html)
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
 * import { LinkButton, type LinkButtonProps } from "boondoggle/button"
 * ```
 */
export function LinkButton({
    appearance = "primary",
    className,
    ref,
    size,
    ...props
}: AriaLinkProps & {
    /**
     * The appearance of the button.
     */
    appearance?: "ghost" | "primary" | "secondary";
    /**
     * Whether the link points to the current page or resource.
     */
    isCurrent?: boolean;
    /**
     * React ref for the button element.
     */
    ref?: ForwardedRef<HTMLAnchorElement>;
    /**
     * The size of the button.
     */
    size?:
        | "lg"
        | "md"
        | "sm"
        | "square_lg"
        | "square_md"
        | "square_sm"
        | "square_xs";
}) {
    return (
        <AriaLink
            {...props}
            className={clsx("btn", className, appearance, size)}
            ref={ref}
        />
    );
}
