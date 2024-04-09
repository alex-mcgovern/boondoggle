import type {
    ButtonProps as RACButtonProps,
    LinkProps as RACLinkProps,
} from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { Button as RACButton, Link as RACLink } from "react-aria-components";

import type { ButtonVariants } from "./styles.css";

import { buttonCSS } from "./styles.css";

export type ButtonProps = RACButtonProps & ButtonVariants;

/**
 * A button allows a user to perform an action, with mouse, touch, and keyboard interactions.
 *
 * > [Built with React Aria Button](https://react-spectrum.adobe.com/react-aria/Button.html)
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    (
        {
            alignment = "center",
            appearance = "primary",
            className,
            colorOverlay,
            size = "sm",
            ...props
        },
        ref,
    ) => {
        return (
            <RACButton
                {...props}
                className={(renderProps) =>
                    clsx(
                        className,
                        buttonCSS({
                            ...renderProps,
                            alignment,
                            appearance,
                            colorOverlay,
                            size,
                        }),
                    )
                }
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
 * > [Built with React Aria Link](https://react-spectrum.adobe.com/react-aria/Link.html)
 */
export const LinkButton = forwardRef<HTMLAnchorElement, LinkButtonProps>(
    (
        {
            alignment = "center",
            appearance = "primary",
            className,
            colorOverlay,
            size = "sm",
            ...props
        },
        ref,
    ) => {
        return (
            <RACLink
                {...props}
                className={(renderProps) =>
                    clsx(
                        className,
                        buttonCSS({
                            ...renderProps,
                            alignment,
                            appearance,
                            colorOverlay,
                            isCurrent: props.isCurrent || renderProps.isCurrent,
                            size,
                        }),
                    )
                }
                ref={ref}
            />
        );
    },
);
