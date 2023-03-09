import { style } from "@vanilla-extract/css";
import { classnamesFocusedState } from "../../../../styles/common/a11y.focus.css";
import { vars } from "../../../../styles/theme.css";
import { createAccessibleTransition } from "../../../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../../../styles/utils/get_sprinkles.css";

export const dropdownMenu = style([
  classnamesFocusedState,
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

    background: "base",
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
        borderColor: vars.color.accent.border.interactiveActive,
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
