import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { a11yFocusStyleRule } from "../../styles/common/a11y.focus.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

const variantTextAreaSize = styleVariants({
  sm: [
    getSprinkles({
      paddingX: "spacing1",
      paddingY: "spacing0",
      fontStyle: { mobile: "body_lg", desktop: "body_sm" },
    }),
  ],
  md: [
    getSprinkles({
      paddingX: "spacing1",
      paddingY: "spacing0",
      fontStyle: { mobile: "body_lg", desktop: "body_md" },
    }),
  ],
  lg: [
    getSprinkles({
      paddingX: "spacing1",
      paddingY: "spacing0",
      fontStyle: { mobile: "body_lg", desktop: "body_lg" },
    }),
  ],
});

export type VariantTextAreaSizeEnum = keyof typeof variantTextAreaSize;

export const getTextAreaStyles = recipe({
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

  variants: { size: variantTextAreaSize },

  defaultVariants: {
    size: "md",
  },
});
