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
    marginY: "spacing1",
    position: "relative",
    width: "100%",
  }),
  {
    selectors: {
      [`&[data-orientation='horizontal']`]: {
        height: vars.spacing.spacing3,
      },
      [`&[data-orientation='vertical']`]: {
        flexDirection: "column",
        width: vars.spacing.spacing3,
      },
    },
    touchAction: "none",
    userSelect: "none",
  },
]);

export const sliderTrack = style([
  getSprinkles({
    borderRadius: "md",
    position: "relative",
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

    boxShadow: "sm",
    display: "block",
    height: "spacing3",
    width: "spacing3",
  }),
  createAccessibleTransition({
    transition: `ease ${vars.transitionDuration.short} ease`,
    transitionProperty: "background",
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
