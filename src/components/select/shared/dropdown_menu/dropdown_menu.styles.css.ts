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
    
border: "border_default",
    
/** Style as a card */
borderRadius: "sm",

    
    boxShadow: "sm",
    display: "block",
    overflow: "hidden",
    overflowY: "auto",
    position: "absolute",
    width: "auto",
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
