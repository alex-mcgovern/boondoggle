import { style } from "@vanilla-extract/css";
import { SELECTOR_LINK_BUTTON_HOVER_FOCUS } from "../../styles/common/css_selector_vars";
import { focusedStateStyle } from "../../styles/common/focus_ring_styles.css";
import { createAccessibleTransition } from "../../styles/css_preprocessing_utils/createAccessibleTransition";
import { getSprinkles } from "../../styles/getSprinkles.css";
import { darkTheme, vars } from "../../styles/theme.css";

export const cardStyle = style([
  getSprinkles({
    padding: "spacing2",
    display: "block",
    isolation: "isolate",
    // overflow: "hidden",
    textDecoration: "none",
    background: "neutral_secondary_base",
    border: "neutral_border_interactive",
    borderRadius: "md",
  }),
  focusedStateStyle,
  createAccessibleTransition({
    transition: `ease ${vars.transitionDuration.short}`,
    transitionProperty:
      "color, background-color, border-color, box-shadow, transform",
  }),
  {
    color: "inherit",

    selectors: {
      [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
        borderColor: vars.color.neutral_border_interactiveActive,
        backgroundColor: vars.color.neutral_secondary_base,
        boxShadow: vars.boxShadow.md,
        /**
         * TranslateY on hover isn't always desirable.
         * ToDo: make this configurable
         */
        // transform: `translateY(${calc.multiply(vars.spacing.spacing0, -1)})`,
      },
      [`${darkTheme} ${SELECTOR_LINK_BUTTON_HOVER_FOCUS}`]: {
        backgroundColor: vars.color.neutral_secondary_active,
      },
    },
  },
]);
