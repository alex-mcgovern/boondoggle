import { style } from "@vanilla-extract/css";

export const globalDisabledStyles = style({
  selectors: {
    "&[disabled]:hover, &[aria-disabled='true']:hover": {
      cursor: "not-allowed",
    },
    "&[disabled], &[aria-disabled='true']": {
      opacity: 0.3,
    },
  },
});
