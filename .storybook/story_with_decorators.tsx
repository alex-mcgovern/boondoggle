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
      <Box
        position="absolute"
        top="0"
        right="0"
        fontStyle="body_sm"
        color="text_default_low_contrast"
        padding="spacing1"
        __background="#2d2d2d50"
      >
        {title}
      </Box>
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
