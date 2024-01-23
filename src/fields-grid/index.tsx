import type { ReactNode } from "react";

import type { BoxProps } from "../box";

import { Box } from "../box";
import { fieldsGridCSS } from "./styles.css";

export type FieldsGridProps = BoxProps & {
    children: ReactNode;
};

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
