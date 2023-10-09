import { Box } from "../box";
import { fieldsGridStyle } from "./styles.css";

import type { BoxProps } from "@alex-mcgovern/boondoggle.design";
import type { ReactNode } from "react";

export type FieldsGridProps = BoxProps & {
    children: ReactNode;
};

export function FieldsGrid({ children, ...rest }: FieldsGridProps) {
    return (
        <Box
            className={fieldsGridStyle}
            {...rest}
        >
            {children}
        </Box>
    );
}
