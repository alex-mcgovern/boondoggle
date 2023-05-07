import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import {
  elementFontSize,
  elementPadding,
} from "../../styles/common/element_size.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const size = styleVariants({
  sm: [elementFontSize.sm, elementPadding.sm],
  md: [elementFontSize.md, elementPadding.md],
  lg: [elementFontSize.lg, elementPadding.lg],
});

export const getProgressBarStyles = recipe({
  base: [
    getSprinkles({
      background: "background",
      alignItems: "center",
      border: "border_default",
      borderRadius: "md",
      color: "text_low_contrast",
      display: "flex",
      justifyContent: "center",
      overflow: "hidden",
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
