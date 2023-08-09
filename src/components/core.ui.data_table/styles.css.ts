import { getSprinkles } from "@alex-mcgovern/boondoggle.design/dist/styles/utils/get_sprinkles.css";
import { globalStyle, style } from "@vanilla-extract/css";

import { GLOBAL_MAX_WIDTH } from "../core/constants/ui_constants";

export const data_table_filter_cell_style = style({
  padding: "0 !important",
});

export const data_table_wrapper_style = style([
  getSprinkles({
    background: "tint_default",
    border: "border_default",
    borderRadius: "sm",
  }),
  {
    maxWidth: GLOBAL_MAX_WIDTH,
    minHeight: "28.5rem",
    overflowX: "auto",
    overflowY: "hidden",
    position: "relative",
    tableLayout: "fixed",
    width: "100%",
  },
]);

export const data_table_style = style({
  margin: "-1px",
  width: "auto",
});

globalStyle(`${data_table_style} td, ${data_table_style} th`, {
  minWidth: "10rem",
  whiteSpace: "nowrap",
  width: "1px",
});
