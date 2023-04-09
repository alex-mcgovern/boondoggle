import { style } from "@vanilla-extract/css";

import { vars } from "../theme.css";

export const globalErrorStyles = style([
  {
    borderColor: vars.color.border.border_red_active,
    selectors: {
      [`&:is(&:focus, &:focus-visible), &:focus-within`]: {
        outline: `2px solid ${vars.color.border.border_red_active}`,
        outlineOffset: "2px",
      },
    },
  },
]);
