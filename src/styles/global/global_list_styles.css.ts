import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

globalStyle(`ul`, {
  marginBlockStart: vars.spacing.spacing1,
  marginBlockEnd: vars.spacing.spacing1,
  paddingInlineStart: vars.spacing.spacing1,
});

// globalStyle(`ul, ol`, {
//   paddingInlineStart: vars.spacing.spacing3,
//   marginTop: vars.spacing.spacing3,
//   marginBottom: vars.spacing.spacing3,
// });

// globalStyle(`ul li, ol li`, {
//   position: "relative",
//   marginBottom: vars.spacing.spacing1,
//   paddingLeft: vars.spacing.spacing0,
// });

// globalStyle(`ul li::marker, ol li::marker`, {
//   color: vars.color.accent_base,
//   fontWeight: vars.fontWeight.extrabold,
// });
