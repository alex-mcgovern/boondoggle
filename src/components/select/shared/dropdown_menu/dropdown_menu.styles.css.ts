import { keyframes, style } from "@vanilla-extract/css";

import { a11yFocus } from "../../../../styles/common/a11y.css";
import { vars } from "../../../../styles/theme.css";
import { createAccessibleTransition } from "../../../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../../../styles/utils/get_sprinkles.css";

const contentShow = keyframes({
  "0%": { opacity: 0 },
  "100%": { opacity: 1 },
});

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
  createAccessibleTransition({
    animation: `${contentShow} ${vars.transitionDuration.medium} ease forwards`,
    transition: `transform ${vars.transitionDuration.very_long} ease`,
  }),
]);
