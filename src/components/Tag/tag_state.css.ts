import { styleVariants } from "@vanilla-extract/css";
import { SELECTOR_LINK_BUTTON_HOVER_FOCUS } from "../../styles/common/common.selectors";
import { vars } from "../../styles/theme.css";

export const variantTagState = styleVariants({
  inactive: [
    {
      color: vars.color.neutral_text_lowContrast,
      backgroundColor: vars.color.neutral_secondary_base,
      borderColor: vars.color.neutral_border_nonInteractive,

      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
          color: vars.color.neutral_text_highContrast,
          backgroundColor: vars.color.neutral_secondary_active,
          borderColor: vars.color.neutral_border_interactiveActive,
        },
      },
    },
  ],

  active: [
    {
      color: vars.color.accent_text_lowContrast,
      backgroundColor: vars.color.accent_secondary_active,
      borderColor: vars.color.accent_border_interactive,

      selectors: {
        [SELECTOR_LINK_BUTTON_HOVER_FOCUS]: {
          color: vars.color.accent_text_highContrast,
          backgroundColor: vars.color.accent_secondary_selected,
          borderColor: vars.color.accent_border_interactiveActive,
        },
      },
    },
  ],
});

export type VariantTagStateEnum = keyof typeof variantTagState;
