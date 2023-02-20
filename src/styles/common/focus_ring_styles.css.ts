import type { StyleRule } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const focusBaseStyle: StyleRule = {
  outline: `2px solid ${vars.color.accent_primary_active}`,
  outlineOffset: "2px",
  borderColor: vars.color.accent_border_interactiveActive,
};

export const focusedStateStyle = style([
  {
    selectors: {
      [`&:focus:not(:focus-visible)`]: {
        outline: "none",
      },

      [`&:focus-visible`]: {
        ...focusBaseStyle,
      },
    },
  },
]);
