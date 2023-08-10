import { globalStyle, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";

export const sortControlBase = style({});

export const getSortControlStyle = recipe({
  base: [sortControlBase],
  variants: {
    isSorted: {
      false: {},
      true: {},
    },
  },
});

export const sortIconStyle = style({
  opacity: 0,
  ...createAccessibleTransition({
    transition: `opacity ${vars.transitionDuration.short} ease`,
  }),
});

globalStyle(`${sortControlBase}:hover ${sortIconStyle}`, {
  opacity: 0.5,
});
