import { Box } from "../box";

import type { ReactNode } from "react";

type SectionActionsWrapperProps = {
  /** Action shown on the right-hand side of a section. */
  actions?: ReactNode | [ReactNode?, ReactNode?];
};

/**
 * Wraps actions for a section.
 */
export function SectionActionsWrapper({ actions }: SectionActionsWrapperProps) {
  if (!actions) {
    return null;
  }

  return (
    <Box alignItems="center" display="flex" gap="space_2" marginLeft="auto">
      {actions}
    </Box>
  );
}
