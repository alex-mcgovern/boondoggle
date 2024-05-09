import type { HTMLProps } from "react";

import clsx from "clsx";

import "./styles.css";

/**
 * Top bar HTML element.
 */
export function TopBar({
    children,
    className,
    ...rest
}: HTMLProps<HTMLElement>) {
    return (
        <header
            className={clsx(className, "top-bar")}
            {...rest}
        >
            {children}
        </header>
    );
}
