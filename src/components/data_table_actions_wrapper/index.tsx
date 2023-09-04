import { Children } from "react";

import { Box } from "../box";

import type { ReactNode } from "react";

type DataTableActionsWrapperProps = {
    /**
     * Action shown on the left-hand side
     */
    leftAction?: ReactNode;

    /**
     * Action shown on the right-hand side
     */
    rightActions?: ReactNode | [ReactNode?, ReactNode?];
};

/**
 * Wraps actions for a data table.
 */
export function DataTableActionsWrapper({
    leftAction,
    rightActions,
}: DataTableActionsWrapperProps) {
    if (!leftAction && !rightActions) {
        return null;
    }

    return (
        <Box
            alignItems="center"
            borderBottom="border_default"
            display="flex"
            gap="space_2"
            padding="space_4"
        >
            {leftAction && <Box>{leftAction}</Box>}
            {rightActions && (
                <Box
                    alignItems="center"
                    display="flex"
                    gap="space_2"
                    marginLeft="auto"
                >
                    {Children.map(rightActions, (action) => action)}
                </Box>
            )}
        </Box>
    );
}
