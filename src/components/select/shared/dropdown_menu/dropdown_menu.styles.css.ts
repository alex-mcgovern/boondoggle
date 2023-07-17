import { style } from "@vanilla-extract/css";

import { a11yFocus } from "../../../../styles/common/a11y.css";
import { getSprinkles } from "../../../../styles/utils/get_sprinkles.css";

export const dropdownListWrapper = style([
  a11yFocus,
  getSprinkles({
    background: "background",
    border: "border_default",
    borderRadius: "sm",
    boxShadow: "md",
    marginTop: "spacing_1",
    minWidth: "100%",
    overflow: "hidden",
    overflowY: "auto",
    width: "max-content",
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
