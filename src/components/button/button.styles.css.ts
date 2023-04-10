import { createTheme, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { SELECTOR_LINK_BUTTON_HOVER_FOCUS } from "../../styles/common/common.selectors.css";
import { globalDisabledStyles } from "../../styles/common/globalDisabledStyles.css";
import { globalFocusStyles } from "../../styles/common/globalFocusStyles.css";
import { globalVariantsUiScale } from "../../styles/common/globalVariantsUiScale.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";

/** -----------------------------------------------------------------------------
 * Button theme
 *
 * Describes the values that can be used to theme the button,
 * and their default values. In {@link variantColor} and
 * {@link variantAppearance} we re-assign these values as
 * needed to create the different variants of the button, then
 * consume them in {@link getButtonStyles}.
 * ------------------------------------------------------------------------------- */

const [buttonTheme, varsButtonTheme] = createTheme({
  background: vars.color.button.button_default,
  backgroundColor_hover: vars.color.button.button_default_active,
  backgroundColor_tint: vars.color.tint.tint_accent,
  borderColor: vars.color.button.button_default_active,
  textColor_alt: vars.color.neutral.white,
  textColor_hover: vars.color.button.button_default_active,
  textColor: vars.color.button.button_default,
});
const buttonThemeRed = createTheme(varsButtonTheme, {
  background: vars.color.button.button_red,
  backgroundColor_hover: vars.color.button.button_red_active,
  backgroundColor_tint: vars.color.tint.tint_red,
  borderColor: vars.color.button.button_red_active,
  textColor_alt: vars.color.neutral.white,
  textColor_hover: vars.color.button.button_red_active,
  textColor: vars.color.button.button_red,
});
const buttonThemeGreen = createTheme(varsButtonTheme, {
  background: vars.color.button.button_green,
  backgroundColor_hover: vars.color.button.button_green_active,
  backgroundColor_tint: vars.color.tint.tint_green,
  borderColor: vars.color.button.button_green_active,
  textColor_alt: vars.color.neutral.white,
  textColor_hover: vars.color.button.button_green_active,
  textColor: vars.color.button.button_green,
});

/** -----------------------------------------------------------------------------
 * Button color variants
 * ------------------------------------------------------------------------------- */

export const variantColor = styleVariants({
  default: [buttonTheme],
  red: [buttonThemeRed],
  green: [buttonThemeGreen],
});

export type Color = keyof typeof variantColor;

/** -----------------------------------------------------------------------------
 * Button appearance variants
 *
 * These are the different variants of the button, (e.g. primary, secondary, etc.)
 * ------------------------------------------------------------------------------- */

const COMMON_BUTTON_SPRINKLES: SprinklesArgs = {
  justifyContent: "center",
  whiteSpace: "nowrap",
  fontWeight: "semibold",
  paddingX: "spacing2",
  paddingY: "spacing1",
};

export const variantAppearance = styleVariants({
  primary: [
    getSprinkles(COMMON_BUTTON_SPRINKLES),
    {
      color: varsButtonTheme.textColor_alt,
      background: varsButtonTheme.background,
      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
          color: varsButtonTheme.textColor_alt,
          background: varsButtonTheme.backgroundColor_hover,
          boxShadow: vars.boxShadow.lg,
        },
      },
    },
  ],

  secondary: [
    getSprinkles(COMMON_BUTTON_SPRINKLES),
    {
      color: varsButtonTheme.background,
      border: "1px solid",
      borderColor: varsButtonTheme.borderColor,
      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
          color: varsButtonTheme.backgroundColor_hover,
          background: varsButtonTheme.backgroundColor_tint,
        },
      },
    },
  ],

  tertiary: [
    getSprinkles({
      textAlign: "left",
      fontWeight: "semibold",
      paddingY: "spacing1",
    }),
    {
      color: varsButtonTheme.background,
      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
          color: varsButtonTheme.backgroundColor_hover,
          textDecoration: "underline",
        },
      },
    },
  ],
});

export type Appearance = keyof typeof variantAppearance;

/** -----------------------------------------------------------------------------
 * Button recipe function
 *
 * This is the main function that returns the styles for the button,
 * it exposes {@link variantColor} and {@link variantAppearance}
 * as arguments, which are then exposed as top-level props on the Button component.
 *
 * See: https://vanilla-extract.style/documentation/packages/recipes/
 * ------------------------------------------------------------------------------- */

export const getButtonStyles = recipe({
  base: [
    globalFocusStyles,
    globalDisabledStyles,
    buttonTheme,
    getSprinkles({
      borderRadius: "md",
      display: "inline-flex",
      gap: "spacing1",
      alignItems: "center",
      textDecoration: "none",
    }),
    createAccessibleTransition({
      transition: `color ${vars.transitionDuration.short} ease-out,\
                   background ${vars.transitionDuration.short} ease-out`,
    }),
  ],
  variants: {
    appearance: variantAppearance,
    color: variantColor,
    size: {
      square: [
        getSprinkles({
          fontStyle: "body_lg",
          height: "spacing5",
          width: "spacing5",
        }),
      ],
      ...globalVariantsUiScale,
    },
  },

  defaultVariants: {
    appearance: "primary",
    color: "default",
    size: "md",
  },
});
