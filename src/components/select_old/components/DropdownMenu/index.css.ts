import { style } from "@vanilla-extract/css";

import { globalFocusStyles } from "../../../../styles/common/globalFocusStyles.css";
import { vars } from "../../../../styles/theme.css";
import { createAccessibleTransition } from "../../../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../../../styles/utils/get_sprinkles.css";

export const dropdownMenu = style([
  globalFocusStyles,
  getSprinkles({
    marginTop: "spacing1",
    width: "max-content",
    minWidth: "100%",
    maxWidth: "gridSpan3",
    display: "block",
    margin: "none",
    // isolation: "isolate",

    /** Style as a card */
    borderRadius: "sm",
    overflow: "hidden",

    background: "bg_default",
    boxShadow: "sm",
    border: "border_default",
    overflowY: "auto",
  }),
  createAccessibleTransition({
    transition: `border-color ease ${vars.transitionDuration.short}`,
  }),
  {
    zIndex: 9000,
    position: "absolute",
    top: "100%",
    left: 0,
    maxHeight: "33vh",

    selectors: {
      "&:is(:hover, :focus, :focus-within)": {
        borderColor: vars.color.border.border_default_active,
      },
      "&:empty": {
        display: "none",
      },
    },
  },
]);

export const dropdownListInner = style([
  getSprinkles({}),
  {
    maxHeight: "33vh",
  },
]);

export const dropdownMenuClosed = style({
  display: "none",
});
