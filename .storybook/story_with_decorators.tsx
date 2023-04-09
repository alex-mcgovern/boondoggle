import { StoryFn } from "@storybook/react";
import React from "react";

import { Box } from "../src/components/box";
import { darkTheme } from "../src/styles/theme.css";

interface StoryWrapperProps {
  Story: StoryFn;
  className?: string;
  title: string;
}

function StoryWrapper({ Story, className, title }: StoryWrapperProps) {
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

export const StoryWithDecorators = (Story: StoryFn) => {
  return (
    <Box display="grid" gridTemplateColumns={GRID_TEMPLATE_COLUMNS}>
      <StoryWrapper Story={Story} title="Light mode" />
      <StoryWrapper Story={Story} className={darkTheme} title="Dark mode" />
    </Box>
  );
};
