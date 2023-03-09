import { style } from "@vanilla-extract/css";

export const classnamesDisabledState = style({
  selectors: {
    "&:not([disabled]):hover": {
      cursor: "pointer",
    },
    "&[disabled]:hover": {
      cursor: "not-allowed",
    },
    "&[disabled]": {
      opacity: 0.3,
    },
  },
});
