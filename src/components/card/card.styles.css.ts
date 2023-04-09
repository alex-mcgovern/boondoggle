import { style } from "@vanilla-extract/css";

import { SELECTOR_LINK_BUTTON_HOVER_FOCUS } from "../../styles/common/common.selectors.css";
import { globalFocusStyles } from "../../styles/common/globalFocusStyles.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const cardStyle = style([
  getSprinkles({
    padding: "spacing2",
    display: "block",
    isolation: "isolate",
    textDecoration: "none",
    background: "surface_default",
    border: "border_default",
    borderRadius: "md",
  }),
  globalFocusStyles,
  createAccessibleTransition({
    transition: `ease ${vars.transitionDuration.short}`,
    transitionProperty: "color, background, border-color, box-shadow",
  }),
  {
    color: "inherit",

    selectors: {
      [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
        borderColor: vars.color.border.border_default_active,
        background: vars.color.surface.surface_default_active,
        boxShadow: vars.boxShadow.md,
      },
    },
  },
]);
