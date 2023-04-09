import { globalStyle } from "@vanilla-extract/css";

import "./reset.css";
import { vars } from "./theme.css";
import { createAccessibleTransition } from "./utils/create_accessible_transition";

/* -----------------------------------------------------------------------------—
 * Global selectors
 ** -----------------------------------------------------------------------------— */

globalStyle(`*`, {
  boxSizing: `border-box`,
  margin: 0,
});
globalStyle(`html`, {
  color: vars.color.text.text_default_high_contrast,
  background: vars.color.background.bg_default,
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
  color: vars.color.text.text_default_high_contrast,
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
  accentColor: vars.color.button.button_default,
});

/** -----------------------------------------------------------------------------
 * Code
 * ------------------------------------------------------------------------------- */

globalStyle(`code`, {
  color: vars.color.text.text_default_high_contrast,
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
  marginBottom: vars.spacing.spacing1,
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
  borderColor: vars.color.border.border_default,
  marginTop: vars.spacing.spacing3,
  marginBottom: vars.spacing.spacing3,
});

/** -----------------------------------------------------------------------------
 * Input & textarea
 * ------------------------------------------------------------------------------- */

globalStyle("input, textarea", {
  background: vars.color.background.bg_default,
  border: `1px solid ${vars.color.border.border_default}`,
  borderRadius: vars.borderRadius.md,
  color: vars.color.text.text_default_high_contrast,
  padding: `${vars.spacing.spacing1} ${vars.spacing.spacing2}`,
  ...createAccessibleTransition({
    transition: `ease ${vars.transitionDuration.short}`,
    transitionProperty: "color, background-color, border-color",
  }),
});
globalStyle(
  "input:not([disabled]):is(:hover,:focus), textarea:not([disabled]):is(:hover,:focus)",
  {
    borderColor: vars.color.border.border_default_active,
    background: vars.color.surface.surface_default,
  }
);
globalStyle("input::placeholder, textarea::placeholder", {
  color: vars.color.text.text_default_low_contrast,
});
globalStyle("input:invalid, textarea:invalid", {
  borderColor: vars.color.border.border_red_active,
});

/** -----------------------------------------------------------------------------
 * Lists
 * ------------------------------------------------------------------------------- */

globalStyle(`ul`, {
  marginBlockStart: vars.spacing.spacing1,
  marginBlockEnd: vars.spacing.spacing1,
  paddingInlineStart: vars.spacing.spacing1,
});

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

  marginBottom: vars.spacing.spacing1,
});

/** -----------------------------------------------------------------------------
 * Tables
 * ------------------------------------------------------------------------------- */

globalStyle(`table`, {
  borderRadius: vars.borderRadius.sm,
  overflow: "hidden",
  boxSizing: "border-box",
  border: "1px solid",
  borderColor: vars.color.border.border_default,
  borderSpacing: 0,
  emptyCells: "show",
  marginBottom: vars.spacing.spacing3,
  marginTop: vars.spacing.spacing3,
  fontSize: vars.fontSize.body_md,
  width: "100%",
});
globalStyle(`thead`, {
  background: vars.color.surface.surface_default_active,
  textAlign: "left",
  verticalAlign: "bottom",
});
globalStyle(`tr`, {
  overflow: "visible",
});
globalStyle(`tbody tr:nth-of-type(odd)`, {
  background: vars.color.surface.surface_default,
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
