import type { ReactNode } from "react";

import clsx from "clsx";

import "./styles.css";

export type FieldsGridProps = {
    /**
     * The children of the FieldsGrid.
     */
    children: ReactNode;
    /**
     * CSS class name.
     */
    className?: string;
};

/**
 * A <FieldsGrid> lays out fields in a grid.
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
 * import { FieldsGrid, type FieldsGridProps } from "boondoggle/fields-grid"
 * ```
 */
export function FieldsGrid({ children, ...props }: FieldsGridProps) {
    return (
        <div
            className={clsx(props.className, "fields-grid")}
            {...props}
        >
            {children}
        </div>
    );
}
