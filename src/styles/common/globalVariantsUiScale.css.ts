import { styleVariants } from "@vanilla-extract/css";

import { getSprinkles } from "../utils/get_sprinkles.css";

export const globalVariantsUiScale = styleVariants({
  sm: [
    getSprinkles({
      fontStyle: "body_md",
    }),
  ],
  md: [
    getSprinkles({
      fontStyle: "body_lg",
    }),
  ],
  lg: [
    getSprinkles({
      fontStyle: "body_xl",
    }),
  ],
});

export type SharedUiScale = keyof typeof globalVariantsUiScale;
