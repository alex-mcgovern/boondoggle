import { styleVariants } from "@vanilla-extract/css";

import { getSprinkles } from "../utils/get_sprinkles.css";

export const elementFontSize = styleVariants({
  lg: [
    getSprinkles({
      fontStyle: "body_lg",
    }),
  ],
  md: [
    getSprinkles({
      fontStyle: "body_md",
    }),
  ],
  sm: [
    getSprinkles({
      fontStyle: "body_sm",
    }),
  ],
});

export const elementPaddingX = styleVariants({
  lg: [getSprinkles({ paddingX: "spacing2" })],
  md: [getSprinkles({ paddingX: "spacing1.5" })],
  sm: [getSprinkles({ paddingX: "spacing1" })],
});

export const elementPaddingY = styleVariants({
  lg: [getSprinkles({ paddingY: "spacing1.5" })],
  md: [getSprinkles({ paddingY: "spacing1" })],
  sm: [getSprinkles({ paddingY: "spacing0" })],
});

export type ElementSizeEnum = keyof typeof elementFontSize &
  keyof typeof elementPaddingX &
  keyof typeof elementPaddingY;
