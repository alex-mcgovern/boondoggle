import { style } from "@vanilla-extract/css";

import { a11yFocus } from "../../../../styles/common/a11y.css";
import { animateAppear } from "../../../../styles/common/animations.css";
import { getSprinkles } from "../../../../styles/utils/get_sprinkles.css";

export const dropdownWrapperClosed = style({
  display: "none",
  visibility: "hidden",
});

export const dropdownListWrapper = style([
  a11yFocus,
  getSprinkles({
    background: "background",
    width: "auto",
    display: "block",

    /** Style as a card */
    borderRadius: "sm",
    position: "absolute",
    overflow: "hidden",
    boxShadow: "sm",
    border: "border_default",
    overflowY: "auto",
  }),
  {
    maxHeight: "15rem",
    selectors: {
      "&:empty": {
        display: "none",
      },
    },
  },
  animateAppear,
]);
