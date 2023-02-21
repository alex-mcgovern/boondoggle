import { style } from "@vanilla-extract/css";
import { a11yFocus } from "../../styles/common/a11y.focus.css";
import { SELECTOR_LINK_BUTTON_HOVER_FOCUS } from "../../styles/common/common.selectors.css";
import { darkTheme, vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

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
  a11yFocus,
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
