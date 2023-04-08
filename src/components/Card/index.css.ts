import { style } from "@vanilla-extract/css";

import { SELECTOR_LINK_BUTTON_HOVER_FOCUS } from "../../styles/common/common.selectors.css";
import { globalFocusStyles } from "../../styles/common/globalFocusStyles.css";
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
    background: "base",
    border: "neutral_nonInteractive",
    borderRadius: "md",
  }),
  globalFocusStyles,
  createAccessibleTransition({
    transition: `ease ${vars.transitionDuration.short}`,
    transitionProperty:
      "color, background-color, border-color, box-shadow, transform",
  }),
  {
    color: "inherit",

    selectors: {
      [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
        borderColor: vars.color.neutral.border.interactiveActive,
        backgroundColor: vars.color.neutral.secondary.base,
        boxShadow: vars.boxShadow.md,
        /**
         * TranslateY on hover isn't always desirable.
         * ToDo: make this configurable
         */
        // transform: `translateY(${calc.multiply(vars.spacing.spacing0, -1)})`,
      },
      [`${darkTheme} ${SELECTOR_LINK_BUTTON_HOVER_FOCUS}`]: {
        backgroundColor: vars.color.neutral.secondary.active,
      },
    },
  },
]);
