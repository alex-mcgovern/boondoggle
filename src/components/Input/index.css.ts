import { style } from "@vanilla-extract/css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import { recipe } from "@vanilla-extract/recipes";
import { a11yFocusStyleRule } from "../../styles/common/a11y.focus.css";
import { variantUiScale } from "../../styles/common/variant.ui_scale.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const getInputWrapperStyles = recipe({
  base: [
    getSprinkles({
      border: "neutral_border_interactive",
      borderRadius: "md",
      background: "neutral_background_base",
      color: "neutral_text_lowContrast",
      display: "flex",
      alignItems: "center",
      width: "100%",
      overflow: "hidden",
    }),
    {
      selectors: {
        "&:hover:not([disabled])": {
          borderColor: vars.color.accent_border_interactiveActive,
        },
        "&:is(&:not([disabled]):focus, &:not([disabled]):focus-within)":
          a11yFocusStyleRule,
        "&[disabled]": {
          borderColor: vars.color.neutral_border_interactive,
        },
      },
    },
    createAccessibleTransition({
      transition: `ease ${vars.transitionDuration.short}`,
      transitionProperty: "color, background-color, border-color",
    }),
  ],

  variants: { size: variantUiScale },

  defaultVariants: {
    size: "md",
  },
});

export const inputElement = style([
  getSprinkles({
    paddingX: "spacing1",
    width: "100%",
    height: "100%",
  }),
  {
    color: vars.color.neutral_text_highContrast,
    selectors: {
      "&:focus": {
        border: "none",
        outline: "none",
        boxShadow: "none",
      },
      "&:focus-visible": {
        border: "none",
        outline: "none",
        boxShadow: "none",
      },
    },
  },
]);

export const leadingIcon = style([
  { color: vars.color.neutral_text_lowContrast },
  getSprinkles({
    marginLeft: "spacing2",
  }),
]);
export const trailingIcon = style([
  { color: vars.color.neutral_text_lowContrast },
  getSprinkles({
    marginRight: "spacing2",
  }),
]);

export type InputVariants = RecipeVariants<typeof getInputWrapperStyles>;
