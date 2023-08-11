import { style } from "@vanilla-extract/css";

import { a11yFocusStyleRule } from "../../styles/common/a11y.css";
import {
  SELECTOR_IS_FOCUS,
  SELECTOR_IS_HOVER,
} from "../../styles/common/selectors.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const sliderRoot = style([
  getSprinkles({
    alignItems: "center",
    display: "flex",
    marginY: "spacing_1",
    position: "relative",
    width: "100%",
  }),
  {
    selectors: {
      [`&[data-orientation='horizontal']`]: {
        height: vars.spacing.spacing_3,
      },
      [`&[data-orientation='vertical']`]: {
        flexDirection: "column",
        width: vars.spacing.spacing_3,
      },
    },
    touchAction: "none",
    userSelect: "none",
  },
]);

export const sliderTrack = style([
  getSprinkles({
    borderRadius: "sm",
    position: "relative",
  }),
  {
    background: vars.color.border_default,
    flexGrow: 1,
    selectors: {
      [`&[data-orientation='horizontal']`]: {
        height: vars.spacing["spacing_0.5"],
      },
      [`&[data-orientation='vertical']`]: {
        width: vars.spacing["spacing_0.5"],
      },
    },
  },
]);

export const sliderRange = style([
  getSprinkles({
    background: "button_default",
    borderRadius: "pill",
    height: "100%",
    position: "absolute",
  }),
]);

export const sliderThumb = style([
  getSprinkles({
    background: "tint_default",
    border: "border_active",
    borderRadius: "50%",

    display: "block",
    height: "spacing_3",
    width: "spacing_3",
  }),
  createAccessibleTransition({
    transition: `background ${vars.transitionDuration.short} ease, border-color ${vars.transitionDuration.short} ease`,
  }),
  {
    selectors: {
      [`&${SELECTOR_IS_HOVER}`]: {
        background: vars.color.tint_active,
        borderColor: vars.color.border_active,
        cursor: "pointer",
      },
      [`&${SELECTOR_IS_FOCUS}`]: {
        boxShadow: vars.boxShadow.md,
        outline: "none",
        ...a11yFocusStyleRule,
      },
    },
  },
]);
