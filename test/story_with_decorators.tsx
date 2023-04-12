import React from "react";

import { Box } from "../src/components/box_component";
import { getTheme } from "../src/styles/theme.css";

import type { StoryFn } from "@storybook/react";

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
      background="background"
    >
      {title && (
        <Box
          position="absolute"
          top="0"
          right="0"
          __fontSize="12px"
          padding="spacing0"
          __background="#2d2d2d50"
        >
          {title}
        </Box>
      )}
      <Story />
    </Box>
  );
}
const GRID_TEMPLATE_COLUMNS = { desktop: "2x", mobile: "1x" } as const;

export function StoryWithDecorators(Story: StoryFn) {
  return (
    <Box
      width="100%"
      display="grid"
      gridTemplateColumns={GRID_TEMPLATE_COLUMNS}
    >
      <StoryWrapper Story={Story} title="Light mode" />
      <StoryWrapper
        Story={Story}
        className={getTheme({ darkMode: true })}
        title="Dark mode"
      />
    </Box>
  );
}
