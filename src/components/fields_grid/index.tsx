import { Box } from "../box";
import { infoFieldWrapperStyle } from "./styles.css";

import type { BoxProps } from "@alex-mcgovern/boondoggle.design";
import type { ReactNode } from "react";

export type FieldsGridProps = BoxProps & {
    children: ReactNode;
};

export function FieldsGrid({ children, ...rest }: FieldsGridProps) {
    return (
        <Box
            className={infoFieldWrapperStyle}
            {...rest}
        >
            {children}
        </Box>
    );
}
