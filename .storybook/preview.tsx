import { ArgTypes, Decorator, Parameters } from "@storybook/react";

import "../src/styles/stylesheet.css";
import "../src/styles/theme.css";
import {
  responsiveSprinklesProperties,
  sprinklesProperties,
} from "../src/styles/utils/get_sprinkles.css";
import { StoryWithDecorators } from "../test/story_with_decorators";
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
  layout: "fullscreen",
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

export const decorators: Array<Decorator> = [StoryWithDecorators];
