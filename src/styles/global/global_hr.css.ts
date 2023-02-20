import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

globalStyle(`hr`, {
  borderBottom: "none",
  borderTop: "1px solid",
  borderColor: vars.color.neutral_border_interactive,
  marginTop: vars.spacing.spacing3,
  marginBottom: vars.spacing.spacing3,
});
