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
    ButtonVariants & { isCurrent?: boolean };

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
