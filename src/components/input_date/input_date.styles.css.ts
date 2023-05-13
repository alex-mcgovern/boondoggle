import { style } from "@vanilla-extract/css";

export const inputDate = style({
  selectors: {
    "&:hover": {
      cursor: "pointer",
    },
  },
  textAlign: "left",
});

export const datePickerClosed = style({
  display: "none",
  visibility: "hidden",
});
