import { style } from "@vanilla-extract/css";
import { createAccessibleTransition } from "../../styles/css_preprocessing_utils/createAccessibleTransition";
import { vars } from "../../styles/theme.css";

export const icon = style([
  createAccessibleTransition({
    transition: `transform ${vars.transitionDuration.short} ease`,
  }),
]);
