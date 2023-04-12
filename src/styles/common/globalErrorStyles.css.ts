import { style } from "@vanilla-extract/css";

import { getTheme, vars } from "../theme.css";

export const globalErrorStyles = style([
  getTheme({ intent: "bad" }),
  {
    borderColor: vars.color.border_active,
    selectors: {
      [`&:is(&:focus, &:focus-visible), &:focus-within`]: {
        outline: `2px solid ${vars.color.border_active}`,
        outlineOffset: "2px",
      },
    },
  },
]);
