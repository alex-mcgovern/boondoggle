import type { StyleRule } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const a11yFocusStyleRule: StyleRule = {
  outline: `2px solid ${vars.color.accent_primary_active}`,
  outlineOffset: "2px",
  borderColor: vars.color.accent_border_interactiveActive,
};

export const a11yFocus = style([
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
