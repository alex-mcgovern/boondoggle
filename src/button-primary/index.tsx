import type {
    ButtonProps as RACButtonProps,
    LinkProps as RACLinkProps,
} from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { Button as RACButton, Link as RACLink } from "react-aria-components";

import { buttonPrimaryCSS } from "./styles.css";

/** -----------------------------------------------------------------------------
 * ButtonPrimary
 * ------------------------------------------------------------------------------- */

export type ButtonPrimaryProps = RACButtonProps;

export const ButtonPrimary = forwardRef<HTMLButtonElement, ButtonPrimaryProps>(
    (props, ref) => {
        return (
            <RACButton
                {...props}
                className={(p) => clsx(props.className, buttonPrimaryCSS(p))}
                ref={ref}
            />
        );
    },
);

/** -----------------------------------------------------------------------------
 * ButtonLinkPrimary
 * ------------------------------------------------------------------------------- */

export type ButtonLinkPrimaryProps = RACLinkProps;

export const ButtonLinkPrimary = forwardRef<
    HTMLAnchorElement,
    ButtonLinkPrimaryProps
>((props, ref) => {
    return (
        <RACLink
            {...props}
            className={(p) => clsx(props.className, buttonPrimaryCSS(p))}
            ref={ref}
        />
    );
});
