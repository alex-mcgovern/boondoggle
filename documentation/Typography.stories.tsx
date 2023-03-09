import React from "react";
import type { ComponentMeta } from "@storybook/react";
import { Box } from "../src/components/Box";

export default {
  title: "Documentation/Typography",
  component: Box,
} as ComponentMeta<typeof Box>;

export function Typography() {
  return (
    <Box>
      <Box as="h1">
        H1 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Box>

      <Box as="h2">
        H2 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Box>

      <Box as="h3">H3 , consectetur adipisicing elit.</Box>

      <Box as="h4">
        H4 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Box>

      <Box as="h5">
        H5 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Box>

      <Box as="h6">
        H6 Lorem ipsum dolor sit amet, consectetur adipisicing elit.
      </Box>

      <Box as="p">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis
        eaque libero assumenda et! Porro consequuntur ipsum ab omnis
        voluptatibus mollitia repellendus necessitatibus, maiores ipsa nulla
        quod unde consectetur eligendi iusto!
      </Box>
    </Box>
  );
}
