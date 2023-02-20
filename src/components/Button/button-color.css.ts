import { assignVars, styleVariants } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";
import { varsButtonTheme } from "./button.theme.css";

export const variantButtonColor = styleVariants({
  accent: {
    vars: assignVars(varsButtonTheme, {
      textColor: vars.color.accent_text_lowContrast,
      textColor_hover: vars.color.accent_text_highContrast,
      textColor_alt: vars.color.neutral_white,
      backgroundColor: vars.color.accent_primary_base,
      backgroundColor_hover: vars.color.accent_primary_active,
      backgroundColor_tint: vars.color.accent_secondary_base,
      borderColor: vars.color.accent_border_interactive,
    }),
  },

  neutral: {
    vars: assignVars(varsButtonTheme, {
      textColor: vars.color.neutral_text_lowContrast,
      textColor_hover: vars.color.neutral_text_highContrast,
      textColor_alt: vars.color.neutral_white,
      backgroundColor: vars.color.neutral_primary_base,
      backgroundColor_hover: vars.color.neutral_primary_active,
      backgroundColor_tint: vars.color.neutral_secondary_base,
      borderColor: vars.color.neutral_border_interactive,
    }),
  },
});

export type VariantButtonColorEnum = keyof typeof variantButtonColor;
