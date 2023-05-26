import { styleVariants } from "@vanilla-extract/css";

import { getSprinkles } from "../utils/get_sprinkles.css";

import type { SprinklesArgs } from "../utils/get_sprinkles.css";

export const elementHeight: Record<
  ElementSizeEnum,
  SprinklesArgs["height"] & SprinklesArgs["minHeight"]
> = {
  lg: "spacing6",
  md: "spacing5",
  sm: "spacing4",
};

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

export const elementPadding = styleVariants({
  lg: [getSprinkles({ paddingX: "spacing2", paddingY: "spacing1.5" })],
  md: [getSprinkles({ paddingX: "spacing1.5", paddingY: "spacing1" })],
  sm: [getSprinkles({ paddingX: "spacing1", paddingY: "spacing0" })],
});

export type ElementSizeEnum = keyof typeof elementFontSize &
  keyof typeof elementPadding;
