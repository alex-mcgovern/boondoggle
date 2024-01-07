import type {
    ButtonProps as RACButtonProps,
    LinkProps as RACLinkProps,
} from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { Button as RACButton, Link as RACLink } from "react-aria-components";

import { buttonGhostCSS } from "./styles.css";

/** -----------------------------------------------------------------------------
 * ButtonGhost
 * ------------------------------------------------------------------------------- */

export type ButtonGhostProps = RACButtonProps;

export const ButtonGhost = forwardRef<HTMLButtonElement, ButtonGhostProps>(
    (props, ref) => {
        return (
            <RACButton
                {...props}
                className={(p) => clsx(props.className, buttonGhostCSS(p))}
                ref={ref}
            />
        );
    },
);

/** -----------------------------------------------------------------------------
 * ButtonLinkGhost
 * ------------------------------------------------------------------------------- */

export type ButtonLinkGhostProps = RACLinkProps;

export const ButtonLinkGhost = forwardRef<
    HTMLAnchorElement,
    ButtonLinkGhostProps
>((props, ref) => {
    return (
        <RACLink
            {...props}
            className={(p) => clsx(props.className, buttonGhostCSS(p))}
            ref={ref}
        />
    );
});
