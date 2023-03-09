import { styleVariants } from "@vanilla-extract/css";
import { getSprinkles } from "../utils/get_sprinkles.css";

export const variantUiScale = styleVariants({
  sm: [
    getSprinkles({
      fontStyle: "body_md",
      paddingX: "spacing1",
      paddingY: "none",
    }),
  ],
  md: [
    getSprinkles({
      fontStyle: "body_lg",
      paddingX: "spacing2",
      paddingY: "spacing1",
    }),
  ],
  lg: [
    getSprinkles({
      fontStyle: "body_xl",
      paddingX: "spacing3",
      paddingY: "spacing2",
    }),
  ],
});

export type VariantUiScaleEnum = keyof typeof variantUiScale;
