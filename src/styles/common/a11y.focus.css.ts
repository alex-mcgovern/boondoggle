import type { StyleRule } from "@vanilla-extract/css";
import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const a11yFocusStyleRule: StyleRule = {
  outline: `2px solid ${vars.color.accent.border.interactive}`,
  outlineOffset: "2px",
  borderColor: vars.color.accent.border.interactiveActive,
};

export const classnamesFocusedState = style([
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
