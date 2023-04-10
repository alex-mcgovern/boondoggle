import { style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition.css";

export const icon = style([
  createAccessibleTransition({
    transition: `transform ${vars.transitionDuration.short} ease`,
  }),
]);
