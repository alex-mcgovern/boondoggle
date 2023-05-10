import { style } from "@vanilla-extract/css";

export const inputDate = style({
  textAlign: "left",
  selectors: {
    "&:hover": {
      cursor: "pointer",
    },
  },
});

export const datePickerClosed = style({
  display: "none",
  visibility: "hidden",
});
