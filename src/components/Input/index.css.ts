import { style } from "@vanilla-extract/css";
import type { RecipeVariants } from "@vanilla-extract/recipes";
import { recipe } from "@vanilla-extract/recipes";
import { focusBaseStyle } from "../../styles/common/focus_ring_styles.css";
import { variantInteractiveElementSize } from "../../styles/common/variant_interactive_element_size.css";
import { createAccessibleTransition } from "../../styles/css_preprocessing_utils/createAccessibleTransition";
import { getSprinkles } from "../../styles/getSprinkles.css";
import { vars } from "../../styles/theme.css";

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
          focusBaseStyle,
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

  variants: { size: variantInteractiveElementSize },

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
