import { style } from "@vanilla-extract/css";

import { a11yFocus } from "../../styles/common/a11y.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const selectItemListWrapper = style([
  a11yFocus,
  getSprinkles({
    background: "background",
    border: "border_default",
    borderRadius: "md",
    boxShadow: "md",
    marginTop: "space_2",
    minWidth: "100%",
    overflow: "hidden",
    width: "max-content",
  }),
]);

export const selectItemListInner = style([
  getSprinkles({
    overflowY: "auto",
    padding: "space_1",
  }),
  {
    borderCollapse: "collapse",
    listStyle: "none",
    maxHeight: "15rem",
    minWidth: "10rem",
    selectors: {
      "&:empty": {
        display: "none",
      },
    },
  },
]);
