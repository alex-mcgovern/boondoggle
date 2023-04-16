import { ArgTypes, Decorator, Parameters } from "@storybook/react";

import "../src/styles/stylesheet.css";
import "../src/styles/theme.css";
import {
  responsiveSprinklesProperties,
  sprinklesProperties,
} from "../src/styles/utils/get_sprinkles.css";
import { getSprinklesControls } from "./utils/get_storybook_controls_sprinkles";
import { WithDarkLightMode } from "./with_dark_light_mode";

export const argTypes: ArgTypes = {
  ...getSprinklesControls(sprinklesProperties),
  ...getSprinklesControls(responsiveSprinklesProperties),
};

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
  layout: "fullscreen",
};

export const decorators: Array<Decorator> = [WithDarkLightMode];
