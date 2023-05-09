import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yDisabled, a11yFocus } from "../../styles/common/a11y.css";
import {
  elementFontSize,
  elementPadding,
} from "../../styles/common/element_size.css";
import {
  SELECTOR_LINK_BUTTON_ACTIVE,
  SELECTOR_LINK_BUTTON_HOVER_FOCUS,
} from "../../styles/common/selectors.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";

/** -----------------------------------------------------------------------------
 * Button size variants
 * ------------------------------------------------------------------------------- */

const variantSize = styleVariants({
  sm: [elementFontSize.sm],
  md: [elementFontSize.md],
  lg: [elementFontSize.lg],
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
  justifyContent: "center",
  whiteSpace: "nowrap",
  fontWeight: "semibold",
};

/** -----------------------------------------------------------------------------
 * Button appearance variants
 * ------------------------------------------------------------------------------- */

export const variantAppearance = styleVariants({
  primary: [
    getSprinkles(COMMON_BUTTON_SPRINKLES),
    {
      color: vars.color.white,
      background: vars.color.button_default,
      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
          color: vars.color.white,
          background: vars.color.button_active,
        },
        [SELECTOR_LINK_BUTTON_ACTIVE]: {
          background: vars.color.button_default,
        },
      },
    },
  ],

  secondary: [
    getSprinkles(COMMON_BUTTON_SPRINKLES),
    {
      color: vars.color.button_default,
      border: "1px solid",
      borderColor: vars.color.button_default,
      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
          color: vars.color.button_active,
          background: vars.color.button_tint,
        },
        [SELECTOR_LINK_BUTTON_ACTIVE]: {
          background: "transparent",
        },
      },
    },
  ],

  ghost: [
    getSprinkles(COMMON_BUTTON_SPRINKLES),
    {
      color: vars.color.text_low_contrast,
      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
          color: vars.color.button_active,
          background: vars.color.button_tint,
        },
        [SELECTOR_LINK_BUTTON_ACTIVE]: {
          background: "transparent",
        },
      },
    },
  ],

  tertiary: [
    getSprinkles({
      textAlign: "left",
      fontWeight: "semibold",
      paddingY: "spacing1",
      paddingX: "none",
    }),
    {
      color: vars.color.text_low_contrast,
      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
          color: vars.color.button_active,
          textDecoration: "underline",
        },
      },
      [SELECTOR_LINK_BUTTON_ACTIVE]: {
        color: vars.color.button_default,
      },
    },
  ],
});

export type Appearance = keyof typeof variantAppearance;

/**
 * Button recipe function
 *
 * This is the main function that returns the styles for the button,
 * it exposes {@link variantColor} and {@link variantAppearance}
 * as arguments, which are then exposed as top-level props on the Button component.
 *
 * See: https://vanilla-extract.style/documentation/packages/recipes/
 */
export const getButtonStyles = recipe({
  base: [
    a11yFocus,
    a11yDisabled,
    getSprinkles({
      alignItems: "center",
      borderRadius: "md",
      display: "flex",
      gap: "spacing1",
      textDecoration: "none",
      // width: "max-content",
    }),
    createAccessibleTransition({
      transition: `color ${vars.transitionDuration.short} ease,\
                   background ${vars.transitionDuration.short} ease`,
    }),
  ],
  variants: {
    appearance: variantAppearance,
    size: variantSize,
  },

  defaultVariants: {
    appearance: "primary",
    size: "md",
  },

  compoundVariants: [
    {
      variants: { appearance: "primary", size: "lg" },
      style: [elementPadding.lg],
    },
    {
      variants: { appearance: "primary", size: "md" },
      style: [elementPadding.md],
    },
    {
      variants: { appearance: "primary", size: "sm" },
      style: [elementPadding.sm],
    },
    {
      variants: { appearance: "secondary", size: "lg" },
      style: [elementPadding.lg],
    },
    {
      variants: { appearance: "secondary", size: "md" },
      style: [elementPadding.md],
    },
    {
      variants: { appearance: "secondary", size: "sm" },
      style: [elementPadding.sm],
    },
    {
      variants: { appearance: "ghost", size: "lg" },
      style: [elementPadding.lg],
    },
    {
      variants: { appearance: "ghost", size: "md" },
      style: [elementPadding.md],
    },
    {
      variants: { appearance: "ghost", size: "sm" },
      style: [elementPadding.sm],
    },
  ],
});
