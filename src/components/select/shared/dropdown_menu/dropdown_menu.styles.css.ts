import { style } from "@vanilla-extract/css";

import { a11yFocus } from "../../../../styles/common/a11y.css";
import { getSprinkles } from "../../../../styles/utils/get_sprinkles.css";

export const dropdownListWrapper = style([
  a11yFocus,
  getSprinkles({
    overflow: "hidden",
    overflowY: "auto",
    width: "100%",
  }),
  {
    listStyle: "none",
    maxHeight: "15rem",
    selectors: {
      "&:empty": {
        display: "none",
      },
    },
  },
]);
