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
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
    marginY: "spacing1",
  }),
  {
    userSelect: "none",
    touchAction: "none",
    selectors: {
      [`&[data-orientation='horizontal']`]: {
        height: vars.spacing.spacing3,
      },
      [`&[data-orientation='vertical']`]: {
        flexDirection: "column",
        width: vars.spacing.spacing3,
      },
    },
  },
]);

export const sliderTrack = style([
  getSprinkles({
    position: "relative",
    borderRadius: "md",
  }),
  {
    background: vars.color.border_default,
    flexGrow: 1,
    selectors: {
      [`&[data-orientation='horizontal']`]: {
        height: vars.spacing.spacing0,
      },
      [`&[data-orientation='vertical']`]: {
        width: vars.spacing.spacing0,
      },
    },
  },
]);

export const sliderRange = style([
  getSprinkles({
    position: "absolute",
    background: "button_default",
    borderRadius: "pill",
    height: "100%",
  }),
]);

export const sliderThumb = style([
  getSprinkles({
    display: "block",
    width: "spacing3",
    height: "spacing3",

    background: "tint_default",
    border: "border_active",
    boxShadow: "sm",
    borderRadius: "50%",
  }),
  createAccessibleTransition({
    transition: `ease ${vars.transitionDuration.short} ease`,
    transitionProperty: "background",
  }),
  {
    selectors: {
      [`&${SELECTOR_IS_HOVER}`]: {
        cursor: "pointer",
        background: vars.color.tint_active,
        borderColor: vars.color.border_active,
      },
      [`&${SELECTOR_IS_FOCUS}`]: {
        outline: "none",
        boxShadow: vars.boxShadow.md,
        ...a11yFocusStyleRule,
      },
    },
  },
]);

export const leadingIcon = style([
  { color: vars.color.text_low_contrast },
  getSprinkles({
    padding: "spacing1",
  }),
]);

export const trailingIcon = style([
  { color: vars.color.text_low_contrast },
  getSprinkles({
    padding: "spacing1",
  }),
]);
