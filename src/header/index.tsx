import type { HTMLProps, ReactNode } from "react";

import clsx from "clsx";

import "./styles.css";

/**
 * A PageHeader is used at the top of a page, and usually contains a title, actions, and tabs.
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
 * import { PageHeader, type PageHeaderProps } from "boondoggle/pageheader"
 * ```
 */
export function PageHeader({
    actions,
    children,
    className,
    ...rest
}: HTMLProps<HTMLElement> & {
    /**
     * Actions to be displayed on the right side of the pageheader.
     */
    actions?: ReactNode;

    /**
     * Main content.
     */
    children: ReactNode;
}) {
    return (
        <header
            className={clsx(className, "page-header")}
            {...rest}
        >
            {children}
            {actions && <div className="actions">{actions}</div>}
        </header>
    );
}
