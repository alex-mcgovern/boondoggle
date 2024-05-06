import type { HTMLProps, ReactNode } from "react";

import clsx from "clsx";

/**
 * Main HTML element.
 */
export function Main({
    children,
    className,
    size = "lg",
    ...rest
}: Omit<HTMLProps<HTMLElement>, "size"> & {
    /**
     * Main content.
     */
    children: ReactNode;

    /**
     * Width of the main element.
     */
    size?: "lg" | "md" | "sm";
}) {
    return (
        <main
            className={clsx(className, "main", size)}
            {...rest}
        >
            {children}
        </main>
    );
}
