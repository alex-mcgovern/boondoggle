import React from "react";

import { Box } from "../box_component/box.component";
import { Card } from "../card_component";
import { Tag } from "../tag_component";

import type { CardProps } from "../card_component";
import type { ReactNode } from "react";

export interface ListItemProps extends CardProps {
  aspectRatio?: "square" | "wide" | "tall";
  description?: string;
  subtitle?: string;
  className?: string;
  title: ReactNode;
  tags?: string[];
  leadingNode?: ReactNode;
  children?: ReactNode | Array<ReactNode>;
  /** Callback on click. */
  onClick?(...args: unknown[]): unknown;
}

export function ListItem({
  children,
  description,
  leadingNode,
  subtitle,
  tags,
  title,
  ...rest
}: ListItemProps) {
  return (
    <Card {...rest}>
      {leadingNode}

      <Box as="header">
        {title && (
          <Box fontSize="body_lg" fontWeight="medium">
            {title}
          </Box>
        )}
        {subtitle && (
          <Box
            color="neutral_text_lowContrast"
            fontSize="body_sm"
            fontWeight="medium"
          >
            {subtitle}
          </Box>
        )}

        {description && <Box as="p">{description}</Box>}
      </Box>
      {children}
      <Box>
        {tags && tags.length > 0 && (
          <Box
            marginTop="spacing3"
            display="flex"
            flexWrap="wrap"
            gap="spacing1"
          >
            {tags?.map((tag) => {
              return <Tag key={tag} title={tag} />;
            })}
          </Box>
        )}
      </Box>
    </Card>
  );
}
