import type { HTMLProps, ReactNode } from "react";

import clsx from "clsx";

import { actionsCSS, headerCSS } from "./styles.css";

/**
 * A header is used at the top of a page, and usually contains a title, actions, and tabs.
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
 * import { Header, type HeaderProps } from "boondoggle/header"
 * ```
 */
export function Header({
    actions,
    children,
    className,
    tabs,
    ...rest
}: HTMLProps<HTMLElement> & {
    /**
     * Actions to be displayed on the right side of the header.
     */
    actions?: ReactNode;

    /**
     * Main content.
     */
    children: ReactNode;

    /**
     * Tabs to be displayed underneath the header.
     * @deprecated Compose tabs outside the scope of the header instead.
     */
    tabs?: ReactNode;
}) {
    return (
        <>
            <header
                className={clsx(className, headerCSS)}
                {...rest}
            >
                {children}
                {actions && <div className={actionsCSS}>{actions}</div>}
            </header>
            {tabs && tabs}
        </>
    );
}
