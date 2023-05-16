import { style } from "@vanilla-extract/css";

import { a11yFocus } from "../../styles/common/a11y.css";
import { SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS } from "../../styles/common/selectors.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const cardStyle = style([
  getSprinkles({
    background: "tint_default",
    border: "border_default",
    borderRadius: "md",
    display: "block",
    isolation: "isolate",
    padding: "spacing2",
    textDecoration: "none",
  }),
  a11yFocus,
  createAccessibleTransition({
    transition: `ease ${vars.transitionDuration.short} ease`,
    transitionProperty: "color, background, border-color, box-shadow",
  }),
  {
    color: "inherit",

    selectors: {
      [SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS]: {
        background: vars.color.tint_active,
        borderColor: vars.color.border_active,
        boxShadow: vars.boxShadow.md,
      },
    },
  },
]);
