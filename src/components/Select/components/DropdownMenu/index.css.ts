import { style } from "@vanilla-extract/css";
import { focusedStateStyle } from "../../../../styles/common/focus_ring_styles.css";
import { createAccessibleTransition } from "../../../../styles/css_preprocessing_utils/createAccessibleTransition";
import { getSprinkles } from "../../../../styles/getSprinkles.css";
import { vars } from "../../../../styles/theme.css";

export const dropdownMenu = style([
  focusedStateStyle,
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

    background: "neutral_background_raised",
    boxShadow: "sm",
    border: "neutral_border_interactive",
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
      "&:is(&:not([disabled]):hover, &:not([disabled]):focus)": {
        borderColor: vars.color.accent_border_interactiveActive,
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
