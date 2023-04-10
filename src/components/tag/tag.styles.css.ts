import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { SELECTOR_LINK_BUTTON_HOVER_FOCUS } from "../../styles/common/common.selectors.css";
import { vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const variantTagState = styleVariants({
  inactive: [
    {
      color: vars.color.text.text_default_low_contrast,
      background: vars.color.tint.tint_default,
      borderColor: vars.color.border.border_default,

      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
          color: vars.color.text.text_default_high_contrast,
          background: vars.color.tint.tint_default_active,
          borderColor: vars.color.border.border_default_active,
        },
      },
    },
  ],

  active: [
    {
      color: vars.color.text.text_accent_low_contrast,
      background: vars.color.tint.tint_accent,
      borderColor: vars.color.border.border_accent,

      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
          color: vars.color.text.text_accent_high_contrast,
          background: vars.color.tint.tint_accent_active,
          borderColor: vars.color.border.border_accent_active,
        },
      },
    },
  ],
});

export type VariantTagStateEnum = keyof typeof variantTagState;
export const getTagStyle = recipe({
  base: [
    getSprinkles({
      alignItems: "center",
      border: "border_accent_active",
      borderRadius: "pill",
      display: "flex",
      flexShrink: "0",
      fontStyle: "body_sm",
      gap: "spacing0",
      paddingX: "spacing1",
      paddingY: "spacing0",
      whiteSpace: "nowrap",
      textDecoration: "none",
    }),
    createAccessibleTransition({
      transition: `ease ${vars.transitionDuration.short}`,
      transitionProperty: "color, background-color, border-color",
    }),
  ],

  variants: {
    state: variantTagState,
  },

  defaultVariants: {
    state: "inactive",
  },
});

export const slotLeft = style({
  flexShrink: 0,
  justifySelf: "start",
  selectors: {
    "&:not(:last-child)": {
      marginRight: vars.spacing.spacing1,
    },
  },
});
export const slotRight = style({
  flexShrink: 0,
  justifySelf: "end",
  selectors: {
    "&:not(:first-of-type)": {
      marginLeft: vars.spacing.spacing1,
    },
  },
});
