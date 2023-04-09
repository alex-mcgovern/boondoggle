import React from "react";

import { Box } from "../src/components/box";
import { darkTheme } from "../src/styles/theme.css";

import type { StoryFn } from "@storybook/react";

interface StoryWrapperProps {
  Story: StoryFn;
  className?: string;
}

function StoryWrapper({ Story, className }: StoryWrapperProps) {
  return (
    <Box
      position="relative"
      className={className}
      padding="spacing3"
      background="bg_default"
    >
      <Story />
    </Box>
  );
}
const GRID_TEMPLATE_COLUMNS = { desktop: "2x", mobile: "1x" } as const;

export function StoryWithDecorators(Story: StoryFn) {
  // return Story;

  return (
    <Box display="grid" gridTemplateColumns={GRID_TEMPLATE_COLUMNS}>
      <StoryWrapper Story={Story} />
      <StoryWrapper Story={Story} className={darkTheme} />
    </Box>
  );
}
