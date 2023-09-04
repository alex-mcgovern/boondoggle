import { Box } from "../box";
import { getDialogModalOuterStyle } from "./styles.css";

import type { ForwardedRef, ReactNode } from "react";

type DialogModalOuterProps = {
    children: ReactNode;

    dialogRef: ForwardedRef<HTMLDialogElement>;

    isOpen?: boolean;
};

export function DialogModalOuter({ children, dialogRef, isOpen }: DialogModalOuterProps) {
    return (
        <Box
            as="dialog"
            className={getDialogModalOuterStyle()}
            open={isOpen}
            ref={dialogRef}
        >
            {children}
        </Box>
    );
}
