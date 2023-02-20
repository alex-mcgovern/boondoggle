import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

globalStyle(`code`, {
  background: vars.color.neutral_secondary_active,
  color: vars.color.neutral_text_highContrast,
  fontWeight: vars.fontWeight.normal,
});
