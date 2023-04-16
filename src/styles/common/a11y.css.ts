import { style } from "@vanilla-extract/css";

import { vars } from "../theme.css";

import type { StyleRule } from "@vanilla-extract/css";

export const a11yError = style([
  {
    borderColor: vars.color.button_default,
    selectors: {
      [`&:is(&:focus, &:focus-visible), &:focus-within`]: {
        outline: `2px solid ${vars.color.border_active}`,
        outlineOffset: "2px",
      },
    },
  },
]);

export const a11yDisabled = style({
  selectors: {
    "&[disabled]:hover, &[aria-disabled='true']:hover": {
      cursor: "not-allowed",
    },
    "&[disabled], &[aria-disabled='true']": {
      opacity: 0.3,
    },
  },
});

export const a11yFocusStyleRule: StyleRule = {
  outline: `2px solid ${vars.color.button_default}`,
  outlineOffset: "2px",
  borderColor: vars.color.button_default,
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
