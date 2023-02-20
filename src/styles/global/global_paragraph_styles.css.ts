import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

globalStyle(`p`, {
  overflowWrap: `break-word`,

  marginTop: vars.spacing.spacing2,
  marginBottom: vars.spacing.spacing2,

  // maxWidth: vars.width.gridSpan6,
});
