import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const a11yError = style([
  {
    borderColor: `${vars.color.semanticRed.border.interactive} !important`,
    selectors: {
      [`&:is(&:focus, &:focus-visible), &:focus-within`]: {
        outline: `2px solid ${vars.color.semanticRed.border.interactive}`,
        outlineOffset: "2px",
      },
    },
  },
]);
