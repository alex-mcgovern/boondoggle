import { style } from "@vanilla-extract/css";
import { vars } from "../theme.css";

export const a11yError = style([
  {
    borderColor: `${vars.color.semantic_red_highContrast} !important`,
    selectors: {
      [`&:is(&:focus, &:focus-visible), &:focus-within`]: {
        outline: `2px solid ${vars.color.accent_primary_active}`,
        outlineOffset: "2px",
      },
    },
  },
]);
