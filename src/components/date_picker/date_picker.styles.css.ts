import { style } from "@vanilla-extract/css";

import { a11yFocus } from "../../styles/common/a11y.css";
import { SELECTOR_LINK_BUTTON_HOVER_FOCUS } from "../../styles/common/selectors.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const titleButton = style([
  getSprinkles({
    color: "text_low_contrast",
    fontWeight: "semibold",
    display: "flex",
    alignItems: "center",
    gap: "spacing1",
  }),
  a11yFocus,
  createAccessibleTransition({
    transition: `color ${vars.transitionDuration.short} ease`,
  }),
  {
    selectors: {
      [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
        color: vars.color.text_high_contrast,
      },
    },
  },
]);
