import { style } from "@vanilla-extract/css";

import { vars } from "../theme.css";

export const globalErrorStyles = style([
  {
    borderColor: `${vars.color.red.border.interactive} !important`,
    selectors: {
      [`&:is(&:focus, &:focus-visible), &:focus-within`]: {
        outline: `2px solid ${vars.color.red.border.interactive}`,
        outlineOffset: "2px",
      },
    },
  },
]);
