import { createTheme } from "@vanilla-extract/css";
import { vars } from "../../styles/theme.css";

export const [buttonTheme, varsButtonTheme] = createTheme({
  textColor: vars.color.accent_text_lowContrast,
  textColor_hover: vars.color.accent_text_highContrast,
  textColor_alt: vars.color.neutral_white,
  backgroundColor: vars.color.accent_primary_base,
  backgroundColor_hover: vars.color.accent_primary_active,
  backgroundColor_tint: vars.color.accent_secondary_base,
  borderColor: vars.color.accent_border_interactive,
});
