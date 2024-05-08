import type {
    ButtonProps as RACButtonProps,
    LinkProps as RACLinkProps,
} from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { Button as RACButton, Link as RACLink } from "react-aria-components";

import "./styles.css";

type ButtonVariants = {
    /**
     * The appearance of the button.
     */
    appearance?: "ghost" | "primary" | "secondary";
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
};

export type ButtonProps = RACButtonProps & ButtonVariants;

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
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ appearance = "primary", className, size, ...props }, ref) => {
        return (
            <RACButton
                {...props}
                className={clsx("btn", className, appearance, size)}
                ref={ref}
            />
        );
    },
);

export type LinkButtonProps = RACLinkProps &
    ButtonVariants & {
        /**
         * Whether the link points to the current page or resource.
         */
        isCurrent?: boolean;
    };

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
export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
    ({ appearance = "primary", className, size, ...props }, ref) => {
        return (
            <RACLink
                {...props}
                className={clsx("btn", className, appearance, size)}
                ref={ref}
            />
        );
    },
);
