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

export const elementPaddingLeft = styleVariants({
  lg: [getSprinkles({ paddingLeft: "spacing2" })],
  md: [getSprinkles({ paddingLeft: "spacing1.5" })],
  sm: [getSprinkles({ paddingLeft: "spacing1" })],
});

export const elementPaddingRight = styleVariants({
  lg: [getSprinkles({ paddingRight: "spacing2" })],
  md: [getSprinkles({ paddingRight: "spacing1.5" })],
  sm: [getSprinkles({ paddingRight: "spacing1" })],
});

export const elementPaddingY = styleVariants({
  lg: [getSprinkles({ paddingY: "spacing1.5" })],
  md: [getSprinkles({ paddingY: "spacing1" })],
  sm: [getSprinkles({ paddingY: "spacing0" })],
});

export type ElementSizeEnum = keyof typeof elementFontSize &
  keyof typeof elementPaddingLeft &
  keyof typeof elementPaddingRight &
  keyof typeof elementPaddingY;
