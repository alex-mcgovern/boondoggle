import { Box } from "../box";

import type { ReactNode } from "react";

export type SectionProps = {
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
export function Section({ children, description, title }: SectionProps) {
  return (
    <Box as="section" marginY="spacing_5" padding="spacing_5">
      {title && (
        <Box as="header" marginBottom="spacing_6">
          <Box as="h3">{title}</Box>
          <Box as="p" color="text_low_contrast">
            {description}
          </Box>
        </Box>
      )}

      {children}
    </Box>
  );
}
