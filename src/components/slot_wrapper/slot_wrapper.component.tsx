import { Box } from "../box";

import type { BoxProps } from "../box";
import type { ReactNode } from "react";

export interface SlotWrapperProps extends BoxProps {
    slotLeft?: ReactNode;
    slotRight?: ReactNode;
    children?: ReactNode;
}

export function SlotWrapper({
    slotLeft,
    slotRight,
    children,
    className: userClassName,
    ...rest
}: SlotWrapperProps) {
    return (
        <Box
            className={userClassName}
            display="flex"
            alignItems="start"
            gap="spacing2"
            {...rest}
        >
            {slotLeft && (
                <Box paddingY="spacing1" color="text_low_contrast">
                    {slotLeft}
                </Box>
            )}

            {children}

            {slotRight && (
                <Box paddingY="spacing1" color="text_low_contrast">
                    {slotRight}
                </Box>
            )}
        </Box>
    );
}
