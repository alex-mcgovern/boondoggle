import { style } from "@vanilla-extract/css";

import { vars } from "../../../styles/theme.css";

export const selectInputCursorStyles = style({
  selectors: {
    "&:read-only": {
      background: vars.color.background,
      cursor: "pointer",
    },
  }
});
