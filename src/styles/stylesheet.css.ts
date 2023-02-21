import { globalStyle } from "@vanilla-extract/css";
// import "./src/styles/reset.css"; <-- should probably be used for cross-browser support, but need to sort import order issue
import "./global/global_button.css";
import "./global/global_checkbox_styles.css";
import "./global/global_code.css";
import "./global/global_fieldset.css";
import "./global/global_headings.css";
import "./global/global_hr.css";
import "./global/global_input.css";
import "./global/global_list_styles.css";
import "./global/global_paragraph_styles.css";
import "./global/global_tables.css";
import { vars } from "./theme.css";

/* -----------------------------------------------------------------------------—
 * GLOBAL SELECTORS
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
 * ANCHOR TAGS
 ** -----------------------------------------------------------------------------— */

globalStyle(`a`, {
  padding: 0,
  margin: 0,
  listStyleType: "none",
  color: vars.color.accent_text_lowContrast,
});

/* -----------------------------------------------------------------------------—
 * VISUAL ELEMENTS
 ** -----------------------------------------------------------------------------— */

globalStyle(`img, picture, video, canvas, svg`, {
  display: `block`,
  maxWidth: `100%`,
});

/* -----------------------------------------------------------------------------—
 * INPUTS
 ** -----------------------------------------------------------------------------— */

globalStyle(`input, button, textarea, select`, {
  font: `inherit`,
});

/* -----------------------------------------------------------------------------—
 * GATSBY OVERRIDES
 ** -----------------------------------------------------------------------------— */

globalStyle(`___gatsby`, {
  isolation: `isolate`,
});
