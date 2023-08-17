import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { variantColorOverlay } from "../../styles/color_palette.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const size = styleVariants({
  lg: [
    getSprinkles({
      fontStyle: "body_md",
    }),
  ],
  md: [
    getSprinkles({
      fontStyle: "body_sm",
    }),
  ],
  sm: [
    getSprinkles({
      fontStyle: "body_xs",
    }),
  ],
});

export const getProgressBarStyles = recipe({
  base: [
    variantColorOverlay.blue,
    getSprinkles({
      alignItems: "center",
      border: "border_active",
      borderRadius: "sm",
      color: "text_low_contrast",
      display: "flex",
      fontWeight: "medium",
      justifyContent: "center",
      minWidth: "space_12",
      overflow: "hidden",
      paddingX: "space_2",
      paddingY: "space_1",
      position: "relative",
      whiteSpace: "nowrap",
    }),
  ],
  defaultVariants: {
    size: "md",
  },
  variants: {
    size,
  },
});

export const progressBarInnerStyles = style([
  getSprinkles({
    background: "tint_active",
  }),
  {
    inset: "0",
    position: "absolute",
  },
]);
