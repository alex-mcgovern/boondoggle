import { globalStyle } from "@vanilla-extract/css";
import { vars } from "../theme.css";

// globalStyle(`h1, h2, h3, h4, h5, h6`, {
//   overflowWrap: `break-word`,
//   fontWeight: vars.fontWeight.bold,
//   lineHeight: 1.2,
//   margin: 0,
// });

globalStyle(`table`, {
  borderRadius: vars.borderRadius.sm,
  overflow: "hidden",
  boxSizing: "border-box",
  border: "1px solid",
  borderColor: vars.color.neutral_border_nonInteractive,
  borderSpacing: 0,
  emptyCells: "show",
  marginBottom: vars.spacing.spacing3,
  marginTop: vars.spacing.spacing3,
  fontSize: vars.fontSize.body_md,
  width: "100%",
});

globalStyle(`thead`, {
  backgroundColor: vars.color.neutral_secondary_base,
  textAlign: "left",
  verticalAlign: "bottom",
});

globalStyle(`tr`, {
  overflow: "visible",
});

globalStyle(`tbody tr:nth-of-type(odd)`, {
  backgroundColor: vars.color.neutral_background_raised,
});

globalStyle(`th`, {
  textAlign: "left",
  paddingTop: vars.spacing.spacing1,
  paddingBottom: vars.spacing.spacing1,
  paddingRight: vars.spacing.spacing2,
  paddingLeft: vars.spacing.spacing2,
});

globalStyle(`td`, {
  verticalAlign: "top",
  border: "none",

  paddingTop: vars.spacing.spacing1,
  paddingBottom: vars.spacing.spacing1,
  paddingRight: vars.spacing.spacing2,
  paddingLeft: vars.spacing.spacing2,

  fontSize: "inherit",
  margin: 0,
  overflow: "visible",
});
