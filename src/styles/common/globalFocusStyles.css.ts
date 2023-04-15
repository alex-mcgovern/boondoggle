import { style } from "@vanilla-extract/css";

import { vars } from "../theme.css";

import type { StyleRule } from "@vanilla-extract/css";

export const a11yFocusStyleRule: StyleRule = {
  outline: `2px solid ${vars.color.focus_ring}`,
  outlineOffset: "2px",
  borderColor: vars.color.focus_ring,
};

export const globalFocusStyles = style([
  {
    selectors: {
      [`&:focus:not(:focus-visible)`]: {
        outline: "none",
      },

      [`&:focus-visible`]: {
        ...a11yFocusStyleRule,
      },
    },
  },
]);
