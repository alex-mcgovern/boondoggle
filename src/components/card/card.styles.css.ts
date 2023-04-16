import { style } from "@vanilla-extract/css";

import { a11yFocus } from "../../styles/common/a11y.css";
import { SELECTOR_LINK_BUTTON_HOVER_FOCUS } from "../../styles/common/selectors.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const cardStyle = style([
  getSprinkles({
    padding: "spacing2",
    display: "block",
    isolation: "isolate",
    textDecoration: "none",
    background: "tint_default",
    border: "border_default",
    borderRadius: "md",
  }),
  a11yFocus,
  createAccessibleTransition({
    transition: `ease ${vars.transitionDuration.short}`,
    transitionProperty: "color, background, border-color, box-shadow",
  }),
  {
    color: "inherit",

    selectors: {
      [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
        borderColor: vars.color.border_active,
        background: vars.color.tint_active,
        boxShadow: vars.boxShadow.md,
      },
    },
  },
]);
