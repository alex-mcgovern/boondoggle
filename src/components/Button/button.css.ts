import { assignVars, createTheme, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { classnamesDisabledState } from "../../styles/common/a11y.disabled_state.css";
import { classnamesFocusedState } from "../../styles/common/a11y.focus.css";
import { SELECTOR_LINK_BUTTON_HOVER_FOCUS } from "../../styles/common/common.selectors.css";
import { variantUiScale } from "../../styles/common/variant.ui_scale.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";
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
 * and their default values. In {@link variantButtonColor} and
 * {@link variantButtonAppearance} we re-assign these values as
 * needed to create the different variants of the button, then
 * consume them in {@link getButtonStyles}.
 * ------------------------------------------------------------------------------- */

export const [buttonTheme, varsButtonTheme] = createTheme(
  makeButtonTheme(vars.color.accent)
);

/** -----------------------------------------------------------------------------
 * Button color variants
 * ------------------------------------------------------------------------------- */

export const variantButtonColor = styleVariants({
  accent: {
    vars: assignVars(varsButtonTheme, makeButtonTheme(vars.color.accent)),
  },
  neutral: {
    vars: assignVars(varsButtonTheme, makeButtonTheme(vars.color.neutral)),
  },
  semanticGreen: {
    vars: assignVars(
      varsButtonTheme,
      makeButtonTheme(vars.color.semanticGreen)
    ),
  },
  semanticRed: {
    vars: assignVars(varsButtonTheme, makeButtonTheme(vars.color.semanticRed)),
  },
});

export type VariantButtonColorEnum = keyof typeof variantButtonColor;

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

export const variantButtonAppearance = styleVariants({
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

export type VariantButtonAppearanceEnum = keyof typeof variantButtonAppearance;

/** -----------------------------------------------------------------------------
 * Button recipe function
 *
 * This is the main function that returns the styles for the button,
 * it exposes {@link variantButtonColor} and {@link variantButtonAppearance}
 * as arguments, which are then exposed as top-level props on the Button component.
 *
 * See: https://vanilla-extract.style/documentation/packages/recipes/
 * ------------------------------------------------------------------------------- */

export const getButtonStyles = recipe({
  base: [
    classnamesFocusedState,
    classnamesDisabledState,
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
    appearance: variantButtonAppearance,
    color: variantButtonColor,
    size: {
      square: [
        getSprinkles({
          fontStyle: "body_lg",
          height: "spacing5",
          width: "spacing5",
        }),
      ],
      ...variantUiScale,
    },
  },

  defaultVariants: {
    appearance: "primary",
    size: "md",
  },
});
