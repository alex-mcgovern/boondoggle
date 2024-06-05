import type { ReactNode } from "react";

import clsx from "clsx";

import "./styles.css";

/**
 * A <Grid> lays out fields in a grid.
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
 * import { Grid } from "boondoggle";
 * ```
 */
export function Grid({
    children,
    ...props
}: {
    /**
     * The children of the Grid.
     */
    children: ReactNode;
    /**
     * CSS class name.
     */
    className?: string;
    /**
     * The number of columns in the grid.
     */
    columns?: 1 | 2 | 3 | 4;
    /**
     * The gap between grid items in 0.25rem increments.
     */
    gap?: 1 | 2 | 3 | 4;
}) {
    return (
        <div
            {...props}
            className={clsx(
                props.className,
                "grid",
                `x${props.columns}`,
                `gap-${props.gap}`,
            )}
        >
            {children}
        </div>
    );
}
