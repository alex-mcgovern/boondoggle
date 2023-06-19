import { style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

import { animateFadeIn } from "../../styles/common/animations.css";
import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const placement = styleVariants({
  "bottom-center": [
    {
      insetInlineStart: "50%",
      transform: "translateX(-50%)",
    },
  ],
  "bottom-end": {
    left: "auto",
  },
  "bottom-start": [],
});

export type DialogPlacementEnum = keyof typeof placement;

export const getDialogStyles = recipe({
  base: [
    animateFadeIn,
    {
      maxWidth: calc.subtract("100vw", vars.spacing.spacing_2),
      selectors: {
        "&:focus": {
          outline: "none",
        },
      },
    },
    getSprinkles({
      overflow: "hidden",
      padding: "none",
      zIndex: "1",
    }),
  ],
  defaultVariants: {
    placement: "bottom-start",
  },
  variants: {
    placement,
  },
});

export const dialogContentStyles = style({
  // transform: "translate3d(0, 0, 0)",
});
