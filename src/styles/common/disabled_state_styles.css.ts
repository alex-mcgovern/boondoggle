import { style } from "@vanilla-extract/css";

export const disabledStateStyles = style({
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
