import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { variantColorOverlay } from "../../styles/color_palette.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const size = styleVariants({
  sm: [
    getSprinkles({
      fontStyle: "body_xs",
    }),
  ],
  md: [
    getSprinkles({
      fontStyle: "body_sm",
    }),
  ],
  lg: [
    getSprinkles({
      fontStyle: "body_md",
    }),
  ],
});

export type ProgressBarSizeEnum = keyof typeof size;

export const getProgressBarStyles = recipe({
  base: [
    variantColorOverlay.blue,
    getSprinkles({
      alignItems: "center",
      border: "border_active",
      borderRadius: "sm",
      color: "text_low_contrast",
      display: "flex",
      justifyContent: "center",
      overflow: "hidden",
      paddingX: "spacing1",
      paddingY: "spacing0",
      whiteSpace: "nowrap",
      position: "relative",
      minWidth: "spacing7",
      fontWeight: "medium",
    }),
  ],
  variants: {
    size,
  },
  defaultVariants: {
    size: "md",
  },
});

export const progressBarInnerStyles = style([
  getSprinkles({
    background: "tint_active",
  }),
  {
    position: "absolute",
    inset: "0",
  },
]);
