import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yFocus, a11yFocusStyleRule } from "../../styles/common/a11y.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

/** ----------------------------------------------------------------------------- */

export const radioButtonListItemStyles = style([
  getSprinkles({ marginBottom: "spacing_1" }),
  {
    listStyle: "none",
  },
]);

/** ----------------------------------------------------------------------------- */

export const getGroupLabelStyles = recipe({
  base: [],
  variants: {
    isLabelVisible: {
      false: {
        display: "none",
      },
      true: {},
    },
  },
});

/** ----------------------------------------------------------------------------- */

export const radioButtonInputStyles = style({
  position: "absolute",
  right: vars.spacing.spacing_2,
  selectors: {
    [`&:focus, &:focus-visible`]: {
      outline: "none",
    },
  },
  top: vars.spacing.spacing_2,
});

/** ----------------------------------------------------------------------------- */

export const radioButtonLabelStyles = style([
  a11yFocus,
  getSprinkles({
    alignItems: "center",
    aspectRatio: "square",
    border: "border_default",
    borderRadius: "sm",
    display: "flex",
    gap: "spacing_2",
    justifyContent: "center",
    padding: "spacing_2",
    width: "100%",
  }),
  {
    ...createAccessibleTransition({
      transition: `border-color ${vars.transitionDuration.short} ease, background ${vars.transitionDuration.short} ease`,
    }),
    accentColor: vars.color.button_default,
    maxWidth: "12rem",
    selectors: {
      "&:has(input:checked)": {
        background: vars.color.tint_default,
        border: `1px solid ${vars.color.border_active}`,
      },
      "&:has(input:focus)": {
        ...a11yFocusStyleRule,
        border: `1px solid ${vars.color.button_default}`,
      },
      "&:hover": {
        background: vars.color.tint_default,
        border: `1px solid ${vars.color.border_active}`,
        cursor: "pointer",
      },
    },
  },
]);

/** ----------------------------------------------------------------------------- */

export const radioButtonStyles = style({
  pointerEvents: "none",
});
