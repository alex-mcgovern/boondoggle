import { globalStyle } from "@vanilla-extract/css";
// import "./src/styles/reset.css"; <-- should probably be used for cross-browser support, but need to sort import order issue
import { vars } from "./theme.css";

/* -----------------------------------------------------------------------------—
 * Global selectors
 ** -----------------------------------------------------------------------------— */

globalStyle(`*`, {
  boxSizing: `border-box`,
  margin: 0,
});

globalStyle(`html`, {
  color: vars.color.neutral_text_highContrast,
  backgroundColor: vars.color.neutral_background_raised,
  fontSize: vars.fontSize.root,
});

globalStyle(`html, body`, {
  height: `100%`,
  fontFamily: vars.fontFamily.body,
  fontSize: vars.fontSize.body_md,
});

globalStyle(`body`, {
  lineHeight: vars.lineHeight.body_md,
  WebkitFontSmoothing: `antialiased`,
});

/* -----------------------------------------------------------------------------—
 * Anchor tags
 ** -----------------------------------------------------------------------------— */

globalStyle(`a`, {
  padding: 0,
  margin: 0,
  listStyleType: "none",
  color: vars.color.accent_text_lowContrast,
});

/* -----------------------------------------------------------------------------—
 * Visual elements
 ** -----------------------------------------------------------------------------— */

globalStyle(`img, picture, video, canvas, svg`, {
  display: `block`,
  maxWidth: `100%`,
});

/* -----------------------------------------------------------------------------—
 * Inputs
 ** -----------------------------------------------------------------------------— */

globalStyle(`input, button, textarea, select`, {
  font: `inherit`,
});

/** -----------------------------------------------------------------------------
 * Button
 * ------------------------------------------------------------------------------- */

globalStyle(`button`, {
  WebkitAppearance: "none",
  border: "none",
  textDecoration: "none",
  background: "none",
});

/** -----------------------------------------------------------------------------
 * Checkbox
 * ------------------------------------------------------------------------------- */

globalStyle("input[type=checkbox]", {
  accentColor: vars.color.accent_primary_base,
});

/** -----------------------------------------------------------------------------
 * Code
 * ------------------------------------------------------------------------------- */

globalStyle(`code`, {
  background: vars.color.neutral_secondary_active,
  color: vars.color.neutral_text_highContrast,
  fontWeight: vars.fontWeight.normal,
});

/** -----------------------------------------------------------------------------
 * Fieldset
 * ------------------------------------------------------------------------------- */

globalStyle(`fieldset`, {
  border: 0,
  padding: 0,
  margin: 0,
  minWidth: 0,
});

/** -----------------------------------------------------------------------------
 * Headings
 * ------------------------------------------------------------------------------- */

globalStyle(`h1, h2, h3, h4, h5, h6`, {
  display: "block",
  overflowWrap: `break-word`,
  lineHeight: 1.4,

  marginTop: vars.spacing.spacing2,
  marginBottom: vars.spacing.spacing2,

  fontFamily: vars.fontFamily.display,
  fontWeight: vars.fontWeight.medium,
});

globalStyle(`h1`, {
  fontSize: vars.fontSize.h1,
});

globalStyle(`h2`, {
  fontSize: vars.fontSize.h2,
});

globalStyle(`h3`, {
  fontSize: vars.fontSize.h3,
});

globalStyle(`h4`, {
  fontSize: vars.fontSize.h4,
});

globalStyle(`h5`, {
  fontSize: vars.fontSize.h5,
});

globalStyle(`h6`, {
  fontSize: vars.fontSize.h6,
});

/** -----------------------------------------------------------------------------
 * Horizontal rule
 * ------------------------------------------------------------------------------- */

globalStyle(`hr`, {
  borderBottom: "none",
  borderTop: "1px solid",
  borderColor: vars.color.neutral_border_interactive,
  marginTop: vars.spacing.spacing3,
  marginBottom: vars.spacing.spacing3,
});

/** -----------------------------------------------------------------------------
 * Input
 * ------------------------------------------------------------------------------- */

globalStyle("input", {
  border: "none",
  backgroundImage: "none",
  backgroundColor: "transparent",
  boxShadow: "none",
});

/** -----------------------------------------------------------------------------
 * Lists
 * ------------------------------------------------------------------------------- */

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

/** -----------------------------------------------------------------------------
 * Menu
 * ------------------------------------------------------------------------------- */

globalStyle(`menu`, {
  listStyleType: "none",
  padding: 0,
  margin: 0,
});

/** -----------------------------------------------------------------------------
 * Paragraph
 * ------------------------------------------------------------------------------- */

globalStyle(`p`, {
  overflowWrap: `break-word`,

  marginTop: vars.spacing.spacing2,
  marginBottom: vars.spacing.spacing2,

  // maxWidth: vars.width.gridSpan6,
});

/** -----------------------------------------------------------------------------
 * Tables
 * ------------------------------------------------------------------------------- */

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
