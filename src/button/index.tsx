import type {
    ButtonProps as RACButtonProps,
    LinkProps as RACLinkProps,
} from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { Button as RACButton, Link as RACLink } from "react-aria-components";

import type { ButtonVariants } from "./styles.css";

import { buttonCSS } from "./styles.css";

/** -----------------------------------------------------------------------------
 * Button
 * ------------------------------------------------------------------------------- */

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
                className={clsx(
                    className,
                    buttonCSS({ alignment, appearance, colorOverlay, size }),
                )}
                ref={ref}
            />
        );
    },
);

/** -----------------------------------------------------------------------------
 * LinkButton
 * ------------------------------------------------------------------------------- */

export type LinkButtonProps = RACLinkProps & ButtonVariants;

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
                className={clsx(
                    className,
                    buttonCSS({ alignment, appearance, colorOverlay, size }),
                )}
                ref={ref}
            />
        );
    },
);
