import type { LinkProps as RACLinkProps } from "react-aria-components";

import clsx from "clsx";
import { forwardRef } from "react";
import { Link as RACLink } from "react-aria-components";

import { textLinkCSS } from "./styles.css";

export type TextLinkProps = RACLinkProps;

/**
 * A link allows a user to navigate to another page or resource within a web page or application. [Built with React Aria](https://react-spectrum.adobe.com/react-aria/Link.html)
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
 * import { Link, type LinkProps } from "boondoggle/link"
 * ```
 */
export const TextLink = forwardRef<HTMLAnchorElement, TextLinkProps>(
    (props, ref) => {
        return (
            <RACLink
                {...props}
                className={clsx(props.className, textLinkCSS)}
                ref={ref}
            />
        );
    },
);
