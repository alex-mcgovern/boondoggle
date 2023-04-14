import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { SELECTOR_LINK_BUTTON_HOVER_FOCUS } from "../../styles/common/common.selectors.css";
import { globalDisabledStyles } from "../../styles/common/globalDisabledStyles.css";
import { globalFocusStyles } from "../../styles/common/globalFocusStyles.css";
import { globalVariantsUiScale } from "../../styles/common/globalVariantsUiScale.css";
import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

import type { SprinklesArgs } from "../../styles/utils/get_sprinkles.css";

/**
 * Button theme
 *
 * Describes the values that can be used to theme the button,
 * and their default values. In {@link variantColor} and
 * {@link variantAppearance} we re-assign these values as
 * needed to create the different variants of the button, then
 * consume them in {@link getButtonStyles}.
 */

/**
 * Button appearance variants
 *
 * These are the different variants of the button, (e.g. primary, secondary, etc.)
 */

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
      color: vars.color.white,
      background: vars.color.button_default,
      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
          color: vars.color.white,
          background: vars.color.button_active,
        },
      },
    },
  ],

  secondary: [
    getSprinkles(COMMON_BUTTON_SPRINKLES),
    {
      color: vars.color.button_default,
      border: "1px solid",
      borderColor: vars.color.button_active,
      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
          color: vars.color.button_active,
          background: vars.color.tint_default,
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
      color: vars.color.button_default,
      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
          color: vars.color.button_active,
          textDecoration: "underline",
        },
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
    globalFocusStyles,
    globalDisabledStyles,
    getSprinkles({
      borderRadius: "md",
      display: "inline-flex",
      gap: "spacing1",
      alignItems: "center",
      textDecoration: "none",
    }),
    // createAccessibleTransition({
    //   transition: `color ${vars.transitionDuration.short} ease-in,\
    //                background ${vars.transitionDuration.short} ease-in`,
    // }),
  ],
  variants: {
    appearance: variantAppearance,
    size: {
      square: [
        getSprinkles({
          fontStyle: "body_lg",
          height: "spacing6",
          width: "spacing6",
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
