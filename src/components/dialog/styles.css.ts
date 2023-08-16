import { style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";

import { animateFadeIn } from "../../styles/common/animations.css";
import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const placement = styleVariants({
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

  /** -------------------------------------------- */

  "middle-start": [
    {
      insetBlock: "0% 50%",
      insetInlineStart: calc.add("100%", vars.spacing.spacing_1),
    },
  ],

  /** -------------------------------------------- */

  "top-center": [
    {
      insetBlockEnd: "100%",
      insetInlineStart: "50%",
      transform: "translateX(-50%)",
    },
  ],
  "top-end": [{ insetBlockEnd: "100%", left: "auto" }],

  "top-start": [{ insetBlockEnd: "100%" }],
});

export type DialogPlacementEnum = keyof typeof placement;

export const getDialogStyles = recipe({
  base: [
    animateFadeIn,
    {
      border: "none",
      maxWidth: calc.subtract("100vw", vars.spacing.spacing_2),
      selectors: {
        "&:focus": {
          outline: "none",
        },
      },
    },
    getSprinkles({
      // overflow: "hidden",
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
