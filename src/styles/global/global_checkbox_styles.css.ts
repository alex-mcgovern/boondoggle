import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

globalStyle("input[type=checkbox]", {
  accentColor: vars.color.accent_primary_base,
  // marginRight: vars.spacing.spacing1,
});
