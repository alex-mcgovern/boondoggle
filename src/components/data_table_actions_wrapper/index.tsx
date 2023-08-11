import { Box } from "../box_comp";
import { dataTableActionsWrapperStyle } from "./styles.css";

import type { ReactNode } from "react";

type DataTableActionsWrapperProps = {
  /** Action shown on the left-hand side */
  leftAction?: ReactNode;
  /** Action shown on the right-hand side */
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
    <Box className={dataTableActionsWrapperStyle}>
      {leftAction && <Box>{leftAction}</Box>}
      <Box alignItems="center" display="flex" gap="spacing_1" marginLeft="auto">
        {rightActions}
      </Box>
    </Box>
  );
}
