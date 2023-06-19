import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { a11yDisabled, a11yFocus } from "../../styles/common/a11y.css";
import {
  elementFontSize,
  elementHeight,
  elementPadding,
} from "../../styles/common/element_size.css";
import {
  SELECTOR_LINK_BUTTON_INPUT_ACTIVE,
  SELECTOR_LINK_BUTTON_INPUT_HOVER,
} from "../../styles/common/selectors.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";

/** ----------------------------------------------------------------------------- */

const variantSize = styleVariants({
  lg: [elementFontSize.lg],
  md: [elementFontSize.md],
  sm: [elementFontSize.sm],
  square: [
    getSprinkles({
      fontStyle: "body_md",
      height: "spacing_5",
      width: "spacing_5",
    }),
  ],
});

/** ----------------------------------------------------------------------------- */

const COMMON_BUTTON_SPRINKLES: SprinklesArgs = {
  fontWeight: "normal",
  justifyContent: "center",
  whiteSpace: "nowrap",
};

/** ----------------------------------------------------------------------------- */

export const variantAppearance = styleVariants({
  ghost: [
    getSprinkles(COMMON_BUTTON_SPRINKLES),
    {
      color: vars.color.text_low_contrast,
      selectors: {
        [SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
          background: "transparent",
        },
        [SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
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
        [SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
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
        [SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
          background: vars.color.button_tint,
          color: vars.color.button_active,
        },
      },
    },
  ],

  tertiary: [
    getSprinkles({
      fontWeight: "normal",
      paddingX: "spacing_1",
      textAlign: "left",
    }),
    {
      color: vars.color.text_low_contrast,
      selectors: {
        [SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
          color: vars.color.button_default,
        },
        [SELECTOR_LINK_BUTTON_INPUT_HOVER]: {
          background: vars.color.tint_active,
          // color: vars.color.button_active,
          textDecoration: "none",
        },
      },
    },
  ],
});

export type Appearance = keyof typeof variantAppearance;

/** ----------------------------------------------------------------------------- */

export const getButtonStyles = recipe({
  base: [
    a11yFocus,
    a11yDisabled,
    getSprinkles({
      alignItems: "center",
      borderRadius: "sm",
      display: "inline-flex",
      gap: "spacing_1",
      textDecoration: "none",
    }),
    createAccessibleTransition({
      transition: `color ${vars.transitionDuration.medium} ease, background ${vars.transitionDuration.medium} ease, opacity ${vars.transitionDuration.medium} ease`,
    }),
  ],

  /** --------------------------------------------- */

  compoundVariants: [
    {
      style: [elementPadding.lg, getSprinkles({ height: elementHeight.lg })],
      variants: { appearance: "primary", size: "lg" },
    },
    {
      style: [elementPadding.md, getSprinkles({ height: elementHeight.md })],
      variants: { appearance: "primary", size: "md" },
    },
    {
      style: [elementPadding.sm, getSprinkles({ height: elementHeight.sm })],
      variants: { appearance: "primary", size: "sm" },
    },

    /** ------------------- */

    {
      style: [elementPadding.lg, getSprinkles({ height: elementHeight.lg })],
      variants: { appearance: "secondary", size: "lg" },
    },
    {
      style: [elementPadding.md, getSprinkles({ height: elementHeight.md })],
      variants: { appearance: "secondary", size: "md" },
    },
    {
      style: [elementPadding.sm, getSprinkles({ height: elementHeight.sm })],
      variants: { appearance: "secondary", size: "sm" },
    },

    /** ------------------- */

    {
      style: [elementPadding.lg, getSprinkles({ height: elementHeight.lg })],
      variants: { appearance: "ghost", size: "lg" },
    },
    {
      style: [elementPadding.md, getSprinkles({ height: elementHeight.md })],
      variants: { appearance: "ghost", size: "md" },
    },
    {
      style: [elementPadding.sm, getSprinkles({ height: elementHeight.sm })],
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
