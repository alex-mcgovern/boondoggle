import { assignVars, createTheme, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { SELECTOR_LINK_BUTTON_HOVER_FOCUS } from "../../styles/common/common.selectors.css";
import { globalDisabledStyles } from "../../styles/common/globalDisabledStyles.css";
import { globalFocusStyles } from "../../styles/common/globalFocusStyles.css";
import { globalVariantsUiScale } from "../../styles/common/globalVariantsUiScale.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import type { ColorScale } from "../../styles/utils/make_theme";

/** -----------------------------------------------------------------------------
 * Util to populate button theme
 * ------------------------------------------------------------------------------- */

const makeButtonTheme = (theme: ColorScale) => {
  return {
    textColor: theme.text.lowContrast,
    textColor_hover: theme.text.highContrast,
    textColor_alt: theme.background.base,
    backgroundColor: theme.solid.base,
    backgroundColor_hover: theme.solid.active,
    backgroundColor_tint: theme.secondary.base,
    borderColor: theme.border.interactive,
  };
};

/** -----------------------------------------------------------------------------
 * Button theme
 *
 * Describes the values that can be used to theme the button,
 * and their default values. In {@link variantColor} and
 * {@link variantAppearance} we re-assign these values as
 * needed to create the different variants of the button, then
 * consume them in {@link getButtonStyles}.
 * ------------------------------------------------------------------------------- */

export const [buttonTheme, varsButtonTheme] = createTheme(
  makeButtonTheme(vars.color.accent)
);

/** -----------------------------------------------------------------------------
 * Button color variants
 * ------------------------------------------------------------------------------- */

export const variantColor = styleVariants({
  accent: {
    vars: assignVars(varsButtonTheme, makeButtonTheme(vars.color.accent)),
  },
  neutral: {
    vars: assignVars(varsButtonTheme, makeButtonTheme(vars.color.neutral)),
  },
  green: {
    vars: assignVars(varsButtonTheme, makeButtonTheme(vars.color.green)),
  },
  red: {
    vars: assignVars(varsButtonTheme, makeButtonTheme(vars.color.red)),
  },
});

export type VariantColorEnum = keyof typeof variantColor;

/** -----------------------------------------------------------------------------
 * Button appearance variants
 *
 * These are the different variants of the button, (e.g. primary, secondary, etc.)
 * ------------------------------------------------------------------------------- */

const commonButtonSprinkles: SprinklesArgs = {
  justifyContent: "center",
  whiteSpace: "nowrap",
  fontWeight: "semibold",
};

export const variantAppearance = styleVariants({
  primary: [
    getSprinkles(commonButtonSprinkles),
    {
      color: varsButtonTheme.textColor_alt,
      background: varsButtonTheme.backgroundColor,
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
    getSprinkles(commonButtonSprinkles),
    {
      color: varsButtonTheme.backgroundColor,
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
      color: varsButtonTheme.backgroundColor,
      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
          color: varsButtonTheme.backgroundColor_hover,
          textDecoration: "underline",
        },
      },
    },
  ],
});

export type VariantAppearanceEnum = keyof typeof variantAppearance;

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
      display: "flex",
      gap: "spacing1",
      alignItems: "center",
      textDecoration: "none",
    }),
    createAccessibleTransition({
      transition: `color ${vars.transitionDuration.medium} ease\
                   background ${vars.transitionDuration.medium} ease\
                   box-shadow ${vars.transitionDuration.medium} ease`,
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
    size: "md",
  },
});
