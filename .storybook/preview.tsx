import React from "react";
import { ArgTypes, Parameters } from "@storybook/react";
import "../src/styles/stylesheet.css";
import "../src/styles/theme.css";
import {
  responsiveSprinklesProperties,
  sprinklesProperties,
} from "../src/styles/utils/get_sprinkles.css";
// import { type SprinklesArgs } from "../src/styles/utils/get_sprinkles.css";
// import { getFontAwesomeControls } from "./utils/get_storybook_controls_font_awesome";
import { getSprinklesControls } from "./utils/get_storybook_controls_sprinkles";

/** -----------------------------------------------------------------------------
 * Common {@link ArgTypes} definitions for all Storybook stories.
 * ------------------------------------------------------------------------------- */

export const argTypes: ArgTypes = {
  ...getSprinklesControls(sprinklesProperties),
  ...getSprinklesControls(responsiveSprinklesProperties),
};

/** -----------------------------------------------------------------------------
 * Common {@link Parameters} definitions for all Storybook stories.
 * ------------------------------------------------------------------------------- */

export const parameters: Parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },

  controls: {
    sort: "requiredFirst",
    expanded: false,

    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

/** -----------------------------------------------------------------------------
 * Decorators to add additional context to stories
 * ------------------------------------------------------------------------------- */

export const decorators = [
  (Story) => (
    <div>
      <Story />
    </div>
  ),
];
