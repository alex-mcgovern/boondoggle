import { styleVariants } from "@vanilla-extract/css";
import { SELECTOR_LINK_BUTTON_HOVER_FOCUS } from "../../styles/common/common.selectors.css";
import { vars } from "../../styles/theme.css";

export const variantTagState = styleVariants({
  inactive: [
    {
      color: vars.color.neutral.text.lowContrast,
      backgroundColor: vars.color.neutral.secondary.base,
      borderColor: vars.color.neutral.border.nonInteractive,

      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
          color: vars.color.neutral.text.highContrast,
          backgroundColor: vars.color.neutral.secondary.active,
          borderColor: vars.color.neutral.border.interactiveActive,
        },
      },
    },
  ],

  active: [
    {
      color: vars.color.accent.text.lowContrast,
      backgroundColor: vars.color.accent.secondary.active,
      borderColor: vars.color.accent.border.interactive,

      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
          color: vars.color.accent.text.highContrast,
          backgroundColor: vars.color.accent.secondary.selected,
          borderColor: vars.color.accent.border.interactiveActive,
        },
      },
    },
  ],
});

export type VariantTagStateEnum = keyof typeof variantTagState;
