import { Box } from "../box";

import type { ReactNode } from "react";

type CardActionsWrapperProps = {
  /** Action shown on the right-hand side of a card. */
  actions?: ReactNode | [ReactNode?, ReactNode?];
};

/**
 * Wraps actions for a card.
 */
export function CardActionsWrapper({ actions }: CardActionsWrapperProps) {
  if (!actions) {
    return null;
  }

  return (
    <Box alignItems="center" display="flex" gap="space_2" marginLeft="auto">
      {actions}
    </Box>
  );
}
