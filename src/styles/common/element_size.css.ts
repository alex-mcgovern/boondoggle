import { styleVariants } from "@vanilla-extract/css";

import { getSprinkles } from "../utils/get_sprinkles.css";

export const elementFontSize = styleVariants({
  sm: [
    getSprinkles({
      fontStyle: "body_sm",
    }),
  ],
  md: [
    getSprinkles({
      fontStyle: "body_md",
    }),
  ],
  lg: [
    getSprinkles({
      fontStyle: "body_lg",
    }),
  ],
});

export const elementPadding = styleVariants({
  sm: [getSprinkles({ paddingX: "spacing1", paddingY: "spacing0" })],
  md: [getSprinkles({ paddingX: "spacing1.5", paddingY: "spacing1" })],
  lg: [getSprinkles({ paddingX: "spacing2", paddingY: "spacing1.5" })],
});

export type ElementSizeEnum = keyof typeof elementFontSize;
