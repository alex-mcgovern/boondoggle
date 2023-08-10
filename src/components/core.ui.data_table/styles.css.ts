import { globalStyle, style } from "@vanilla-extract/css";

export const dataTableFilterCellStyle = style({
  padding: "0 !important",
});

export const dataTableStyle = style({
  width: "100%",
});

globalStyle(`${dataTableStyle} td, ${dataTableStyle} th`, {
  // minWidth: "10rem",
  // whiteSpace: "nowrap",
  // width: "1px",
});
