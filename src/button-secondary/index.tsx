import type {
    ButtonProps as RACButtonProps,
    LinkProps as RACLinkProps,
} from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { Button as RACButton, Link as RACLink } from "react-aria-components";

import { buttonSecondaryCSS } from "./styles.css";

/** -----------------------------------------------------------------------------
 * ButtonSecondary
 * ------------------------------------------------------------------------------- */

export type ButtonSecondaryProps = RACButtonProps;

export const ButtonSecondary = forwardRef<
    HTMLButtonElement,
    ButtonSecondaryProps
>((props, ref) => {
    return (
        <RACButton
            {...props}
            className={(p) => clsx(props.className, buttonSecondaryCSS(p))}
            ref={ref}
        />
    );
});

/** -----------------------------------------------------------------------------
 * ButtonLinkSecondary
 * ------------------------------------------------------------------------------- */

export type ButtonLinkSecondaryProps = RACLinkProps;

export const ButtonLinkSecondary = forwardRef<
    HTMLAnchorElement,
    ButtonLinkSecondaryProps
>((props, ref) => {
    return (
        <RACLink
            {...props}
            className={(p) => clsx(props.className, buttonSecondaryCSS(p))}
            ref={ref}
        />
    );
});
