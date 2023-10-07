import clsx from "clsx";

import { mainStyles } from "./styles.css";

import type { HTMLProps } from "react";

/**
 * Main HTML element.
 */
export function Main({
    children,
    className,
    ...rest
}: HTMLProps<HTMLElement> & {
    /**
     * Main content.
     */
    children: React.ReactNode;
}) {
    return (
        <main
            className={clsx(className, mainStyles)}
            {...rest}
        >
            {children}
        </main>
    );
}
