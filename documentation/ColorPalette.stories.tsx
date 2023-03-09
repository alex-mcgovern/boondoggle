import React from "react";
import type { ComponentMeta } from "@storybook/react";
import { Box } from "../src/components/Box";
import { vars } from "../src/styles/theme.css";

export default {
  title: "Documentation/ColorPalette",
  component: Box,
} as ComponentMeta<typeof Box>;

export function ColorPalette() {
  return (
    <Box>
      {Object.entries(vars.color).map(([colorName, colorVar]) => {
        return (
          <Box display="flex" alignItems="center">
            <Box width="spacing5" height="spacing5" __background={colorVar} />
            {colorName}
          </Box>
        );
      })}
    </Box>
  );
}
