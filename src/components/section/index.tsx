import { Box } from "../box";
import { SectionActionsWrapper } from "../section_actions_wrapper";

import type { ReactNode } from "react";

export type SectionProps = {
  /** Action shown on the right-hand side of a section. */
  actions?: ReactNode | [ReactNode?, ReactNode?];
  /** The components to render in the section */
  children: ReactNode;
  /** The description of the section */
  description?: string;
  /** The title of the section */
  title?: string;
};

/**
 * The section component is used to group related content together.
 */
export function Section({
  actions,
  children,
  description,
  title,
}: SectionProps) {
  return (
    <Box
      as="section"
      border="border_default"
      borderRadius="md"
      marginY="space_5"
      paddingBottom="space_6"
      paddingLeft="space_5"
      paddingRight="space_5"
      paddingTop="space_5"
    >
      {(title || actions) && (
        <Box
          alignItems="center"
          as="header"
          display="flex"
          marginBottom="space_6"
        >
          {title && (
            <Box>
              <Box as="h3">{title}</Box>
              <Box as="p" color="text_low_contrast">
                {description}
              </Box>
            </Box>
          )}

          {actions && <SectionActionsWrapper actions={actions} />}
        </Box>
      )}

      {children}
    </Box>
  );
}
