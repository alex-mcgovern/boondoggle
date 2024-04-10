import type { ReactNode } from "react";

import type { BoxProps } from "../box";

import { Box } from "../box";
import { fieldsGridCSS } from "./styles.css";

export type FieldsGridProps = BoxProps & {
    /**
     * The children of the FieldsGrid.
     */
    children: ReactNode;
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
export function FieldsGrid({ children, ...rest }: FieldsGridProps) {
    return (
        <Box
            className={fieldsGridCSS}
            {...rest}
        >
            {children}
        </Box>
    );
}
