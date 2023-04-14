import { globalStyle } from "@vanilla-extract/css";

import { a11yFocusStyleRule } from "./common/globalFocusStyles.css";
import "./reset.css";
import { vars } from "./theme.css";
import { createAccessibleTransition } from "./utils/create_accessible_transition";

/* —
 * Global selectors
 ** — */

globalStyle(`*`, {
  boxSizing: `border-box`,
  margin: 0,
});

globalStyle(`html`, {
  color: vars.color.text_high_contrast,
  background: vars.color.background,
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

/* —
 * Anchor tags
 ** — */

globalStyle(`a`, {
  padding: 0,
  margin: 0,
  listStyleType: "none",
  color: vars.color.text_high_contrast,
});

/* —
 * Visual elements
 ** — */

globalStyle(`img, picture, video, canvas, svg`, {
  display: `block`,
  maxWidth: `100%`,
});

/* —
 * Inputs
 ** — */

globalStyle(`input, button, textarea, select`, {
  font: `inherit`,
});

/**
 * Button
 */

globalStyle(`button`, {
  WebkitAppearance: "none",
  border: "none",
  textDecoration: "none",
  background: "none",
});

/**
 * Checkbox
 */

globalStyle("input[type=checkbox]", {
  accentColor: vars.color.button_default,
});

/**
 * Code
 */

globalStyle(`code`, {
  color: "inherit",
  fontWeight: vars.fontWeight.normal,
});

/**
 * Headings
 */

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

/**
 * Horizontal rule
 */

globalStyle(`hr`, {
  borderBottom: "none",
  borderTop: "1px solid",
  borderColor: vars.color.border_default,
  marginTop: vars.spacing.spacing3,
  marginBottom: vars.spacing.spacing3,
});

/**
 * Input & textarea
 */

globalStyle("input, textarea", {
  background: vars.color.background,
  border: `1px solid ${vars.color.border_default}`,
  borderRadius: vars.borderRadius.md,
  color: vars.color.text_high_contrast,
  padding: `${vars.spacing.spacing1} ${vars.spacing.spacing2}`,
  ...createAccessibleTransition({
    transition: `ease ${vars.transitionDuration.short}`,
    transitionProperty: "color, background-color, border-color",
  }),
});

globalStyle("input::placeholder, textarea::placeholder", {
  color: vars.color.text_low_contrast,
});

globalStyle(
  "input:not([disabled]):is(:hover,:focus), textarea:not([disabled]):is(:hover,:focus)",
  {
    borderColor: vars.color.border_active,
    background: vars.color.tint_default,
  }
);

globalStyle("input:is(:focus-visible), textarea:is(:focus-visible)", {
  ...a11yFocusStyleRule,
});

/**
 * Lists
 */

globalStyle(`ul, ol`, {
  marginBlockStart: vars.spacing.spacing1,
  marginBlockEnd: vars.spacing.spacing1,
  paddingInlineStart: vars.spacing.spacing1,
});

/**
 * Menu
 */

globalStyle(`menu`, {
  listStyleType: "none",
  padding: 0,
  margin: 0,
});

/**
 * Paragraph
 */

globalStyle(`p`, {
  overflowWrap: `break-word`,

  marginBottom: vars.spacing.spacing1,
});

/**
 * Tables
 */

globalStyle(`table`, {
  border: `1px solid ${vars.color.border_default}`,
  borderCollapse: "collapse",
});

globalStyle(`thead`, {
  fontWeight: "bold",
});

globalStyle(`tbody tr:nth-of-type(odd)`, {
  background: vars.color.tint_default,
});

globalStyle(`th, td`, {
  textAlign: "left",
  padding: `${vars.spacing.spacing1} ${vars.spacing.spacing1}`,
});
