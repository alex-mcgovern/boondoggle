import { styleVariants } from "@vanilla-extract/css";

import { getSprinkles } from "../utils/get_sprinkles.css";

import type { SprinklesArgs } from "../utils/get_sprinkles.css";

export const elementHeight: Record<
  ElementSizeEnum,
  SprinklesArgs["height"] & SprinklesArgs["minHeight"]
> = {
  lg: "spacing_6",
  md: "spacing_5",
  sm: "spacing_4",
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
  lg: [getSprinkles({ paddingX: "spacing_2", paddingY: "spacing_1.5" })],
  md: [getSprinkles({ paddingX: "spacing_1.5", paddingY: "spacing_1" })],
  sm: [getSprinkles({ paddingX: "spacing_1", paddingY: "spacing_0.5" })],
});

export type ElementSizeEnum = keyof typeof elementFontSize &
  keyof typeof elementPadding;
