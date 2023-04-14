import { ArgTypes, Parameters } from "@storybook/react";

import "../src/styles/stylesheet.css";
import "../src/styles/theme.css";
import {
  responsiveSprinklesProperties,
  sprinklesProperties,
} from "../src/styles/utils/get_sprinkles.css";
import { getSprinklesControls } from "./utils/get_storybook_controls_sprinkles";

/**
 * Common {@link ArgTypes} definitions for all Storybook stories.
 */

export const argTypes: ArgTypes = {
  ...getSprinklesControls(sprinklesProperties),
  ...getSprinklesControls(responsiveSprinklesProperties),
};

/**
 * Common {@link Parameters} definitions for all Storybook stories.
 */

export const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    sort: "requiredFirst",
    expanded: false,
    argTypes,
    viewMode: "docs",
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
