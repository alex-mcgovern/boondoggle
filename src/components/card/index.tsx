import { Box } from "../box";
import { CardActionsWrapper } from "../card_actions_wrapper";

import type { ReactNode } from "react";

export type CardProps = {
  /** Action shown on the right-hand side of a card. */
  actions?: ReactNode | [ReactNode?, ReactNode?];
  /** The components to render in the card */
  children: ReactNode;
  /** The description of the card */
  description?: string;
  /** Whether the card has padding or not */
  hasPadding?: boolean;
  /** The title of the card */
  title?: string;
};

/**
 * The card component is used to group related content together.
 */
export function Card({
  actions,
  children,
  description,
  hasPadding = true,
  title,
}: CardProps) {
  return (
    <Box
      as="section"
      border="border_default"
      borderRadius="md"
      marginY="space_5"
      paddingBottom={hasPadding ? "space_6" : undefined}
      paddingLeft={hasPadding ? "space_5" : undefined}
      paddingRight={hasPadding ? "space_5" : undefined}
      paddingTop={hasPadding ? "space_5" : undefined}
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

          {actions && <CardActionsWrapper actions={actions} />}
        </Box>
      )}

      {children}
    </Box>
  );
}
