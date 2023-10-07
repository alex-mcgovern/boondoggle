import clsx from "clsx";

import { headerStyles } from "./styles.css";

import type { HTMLProps } from "react";

/**
 * Header HTML element.
 */
export function Header({
    children,
    className,
    ...rest
}: HTMLProps<HTMLElement> & {
    /**
     * Header content.
     */
    children: React.ReactNode;
}) {
    return (
        <header
            className={clsx(className, headerStyles)}
            {...rest}
        >
            {children}
        </header>
    );
}
