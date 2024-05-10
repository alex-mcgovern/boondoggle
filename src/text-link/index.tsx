import type { ForwardedRef } from "react";
import type { LinkProps as AriaLinkProps } from "react-aria-components";

import clsx from "clsx";
import { Link as AriaLink } from "react-aria-components";

import "./styles.css";

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
export function TextLink({
    ref,
    ...props
}: AriaLinkProps & { ref?: ForwardedRef<HTMLAnchorElement> }) {
    return (
        <AriaLink
            {...props}
            className={clsx(props.className, "text-link")}
            ref={ref}
        />
    );
}
