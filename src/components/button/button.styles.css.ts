import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yDisabled, a11yFocus } from "../../styles/common/a11y.css";
import {
  elementFontSize,
  elementPadding,
} from "../../styles/common/element_size.css";
import {
  SELECTOR_LINK_BUTTON_INPUT_ACTIVE,
  SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS,
} from "../../styles/common/selectors.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";

/** -----------------------------------------------------------------------------
 * Button size variants
 * ------------------------------------------------------------------------------- */

const variantSize = styleVariants({
  lg: [elementFontSize.lg],
  md: [elementFontSize.md],
  sm: [elementFontSize.sm],
  square: [
    getSprinkles({
      fontStyle: "body_md",
      height: "spacing5",
      width: "spacing5",
    }),
  ],
});

/** -----------------------------------------------------------------------------
 * Common props for all appearance variants
 * ------------------------------------------------------------------------------- */

const COMMON_BUTTON_SPRINKLES: SprinklesArgs = {
  fontWeight: "semibold",
  justifyContent: "center",
  whiteSpace: "nowrap",
};

/** -----------------------------------------------------------------------------
 * Button appearance variants
 * ------------------------------------------------------------------------------- */

export const variantAppearance = styleVariants({
  ghost: [
    getSprinkles(COMMON_BUTTON_SPRINKLES),
    {
      color: vars.color.text_low_contrast,
      selectors: {
        [SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
          background: "transparent",
        },
        [SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS]: {
          background: vars.color.button_tint,
          color: vars.color.button_active,
        },
      },
    },
  ],

  primary: [
    getSprinkles(COMMON_BUTTON_SPRINKLES),
    {
      background: vars.color.button_default,
      color: vars.color.white,
      selectors: {
        [SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
          background: vars.color.button_default,
        },
        [SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS]: {
          background: vars.color.button_active,
          color: vars.color.white,
        },
      },
    },
  ],

  secondary: [
    getSprinkles(COMMON_BUTTON_SPRINKLES),
    {
      border: "1px solid",
      borderColor: vars.color.button_default,
      color: vars.color.button_default,
      selectors: {
        [SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
          background: "transparent",
        },
        [SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS]: {
          background: vars.color.button_tint,
          color: vars.color.button_active,
        },
      },
    },
  ],

  tertiary: [
    getSprinkles({
      fontWeight: "semibold",
      padding: "none",
      textAlign: "left",
    }),
    {
      color: vars.color.text_low_contrast,
      selectors: {
        [SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
          color: vars.color.button_default,
        },
        [SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS]: {
          color: vars.color.button_active,
          textDecoration: "underline",
        },
      },
    },
  ],
});

export type Appearance = keyof typeof variantAppearance;

/** -----------------------------------------------------------------------------
 * Button recipe function
 * ------------------------------------------------------------------------------- */

/**
 * This is the main function that returns the styles for the button,
 * it exposes {@link variantColor} and {@link variantAppearance}
 * as arguments, which are then exposed as top-level props on the Button component.
 *
 * @see https://vanilla-extract.style/documentation/packages/recipes/
 */
export const getButtonStyles = recipe({
  base: [
    a11yFocus,
    a11yDisabled,
    getSprinkles({
      alignItems: "center",
      borderRadius: "sm",
      display: "flex",
      gap: "spacing1",
      textDecoration: "none",
      width: "max-content",
    }),
    createAccessibleTransition({
      transition: `color ${vars.transitionDuration.short} ease, background ${vars.transitionDuration.short} ease`,
    }),
  ],
  compoundVariants: [
    {
      style: [elementPadding.lg],
      variants: { appearance: "primary", size: "lg" },
    },
    {
      style: [elementPadding.md],
      variants: { appearance: "primary", size: "md" },
    },
    {
      style: [elementPadding.sm],
      variants: { appearance: "primary", size: "sm" },
    },
    {
      style: [elementPadding.lg],
      variants: { appearance: "secondary", size: "lg" },
    },
    {
      style: [elementPadding.md],
      variants: { appearance: "secondary", size: "md" },
    },
    {
      style: [elementPadding.sm],
      variants: { appearance: "secondary", size: "sm" },
    },
    {
      style: [elementPadding.lg],
      variants: { appearance: "ghost", size: "lg" },
    },
    {
      style: [elementPadding.md],
      variants: { appearance: "ghost", size: "md" },
    },
    {
      style: [elementPadding.sm],
      variants: { appearance: "ghost", size: "sm" },
    },
  ],

  defaultVariants: {
    appearance: "primary",
    size: "md",
  },

  variants: {
    appearance: variantAppearance,
    size: variantSize,
  },
});
