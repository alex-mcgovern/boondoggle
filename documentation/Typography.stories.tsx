import React from "react";

import { LOREM } from "../mocks/LOREM.mock";
import { Box } from "../src/components/box_component";

import type { ComponentMeta } from "@storybook/react";

export default {
  title: "Documentation/Typography",
  component: Box,
} as ComponentMeta<typeof Box>;

export function Typography() {
  return (
    <Box>
      <Box as="h1">H1 {LOREM.title_short}</Box>
      <Box as="h2">H2 {LOREM.title_short}</Box>
      <Box as="h3">H3 {LOREM.title_short}</Box>
      <Box as="h4">H4 {LOREM.title_short}</Box>
      <Box as="h5">H5 {LOREM.title_short}</Box>
      <Box as="h6">H6 {LOREM.title_short}</Box>

      <Box as="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        eaque libero assumenda et! Porro consequuntur ipsum ab omnis
        voluptatibus mollitia repellendus necessitatibus, maiores ipsa nulla
        quod unde consectetur eligendi iusto!
      </Box>
    </Box>
  );
}
