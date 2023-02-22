import { style } from "@vanilla-extract/css";
import { a11yFocusStyleRule } from "../../styles/common/a11y.focus.css";
import {
  SELECTOR_IS_FOCUS,
  SELECTOR_IS_HOVER,
} from "../../styles/common/common.selectors.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const sliderRoot = style([
  getSprinkles({
    position: "relative",
    display: "flex",
    alignItems: "center",
    width: "100%",
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
        height: vars.width.gridSpan2,
      },
    },
  },
]);

export const sliderTrack = style([
  getSprinkles({
    background: "neutral_border_interactive",
    position: "relative",
    borderRadius: "md",
  }),
  {
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
    background: "accent_border_interactive",
    borderRadius: "pill",
    height: "100%",
  }),
]);

export const sliderThumb = style([
  getSprinkles({
    display: "block",
    width: "spacing3",
    height: "spacing3",
    background: "neutral_secondary_base",
    border: "neutral_border_interactive",
    boxShadow: "sm",
    borderRadius: "50%",
  }),
  createAccessibleTransition({
    transition: `ease ${vars.transitionDuration.short}`,
    transitionProperty: "background-color",
  }),
  {
    selectors: {
      [`&${SELECTOR_IS_HOVER}`]: {
        cursor: "pointer",
        background: vars.color.accent_secondary_active,
        borderColor: vars.color.accent_border_interactiveActive,
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
  { color: vars.color.neutral_text_lowContrast },
  getSprinkles({
    padding: "spacing1",
  }),
]);

export const trailingIcon = style([
  { color: vars.color.neutral_text_lowContrast },
  getSprinkles({
    padding: "spacing1",
  }),
]);
