import { globalStyle } from "@vanilla-extract/css";

import { a11yFocusStyleRule } from "./common/a11y.css";
import { baseLayer } from "./layers.css";
import "./reset.css";
import { vars } from "./theme.css";
import { createAccessibleTransition } from "./utils/create_accessible_transition";

/**
 * Global selectors
 */
globalStyle(`*`, {
  "@layer": {
    [baseLayer]: { boxSizing: `border-box`, margin: 0 },
  },
});

globalStyle(`html`, {
  "@layer": {
    [baseLayer]: {
      background: vars.color.background,
      fontSize: vars.fontSize.root,
    },
  },
});

globalStyle(`html, body`, {
  "@layer": {
    [baseLayer]: {
      height: `100%`,
      fontFamily: vars.fontFamily.body,
      fontSize: vars.fontSize.body_md,
    },
  },
});

globalStyle(`body`, {
  "@layer": {
    [baseLayer]: {
      color: vars.color.text_high_contrast,
      lineHeight: vars.lineHeight.body_md,
      WebkitFontSmoothing: `antialiased`,
    },
  },
});

/**
 * Anchor tags
 */
globalStyle(`a`, {
  "@layer": {
    [baseLayer]: {
      padding: 0,
      margin: 0,
      listStyleType: "none",
      color: vars.color.text_high_contrast,
    },
  },
});

/**
 * Visual elements
 */
globalStyle(`img, picture, video, canvas, svg`, {
  "@layer": {
    [baseLayer]: {
      display: `block`,
      maxWidth: `100%`,
    },
  },
});

/**
 * Inputs
 */
globalStyle(`input, button, textarea, select`, {
  "@layer": {
    [baseLayer]: {
      font: `inherit`,
    },
  },
});

/**
 * Button
 */
globalStyle(`button`, {
  "@layer": {
    [baseLayer]: {
      WebkitAppearance: "none",
      border: "none",
      textDecoration: "none",
      background: "none",
    },
  },
});

/**
 * Checkbox
 */
globalStyle("input[type=checkbox]", {
  "@layer": {
    [baseLayer]: {
      accentColor: vars.color.button_default,
    },
  },
});

/**
 * Code
 */
globalStyle(`code`, {
  "@layer": {
    [baseLayer]: {
      color: "inherit",
      fontWeight: vars.fontWeight.normal,
    },
  },
});

/**
 * Headings
 */
globalStyle(`h1, h2, h3, h4, h5, h6`, {
  "@layer": {
    [baseLayer]: {
      display: "block",
      overflowWrap: `break-word`,
      lineHeight: 1.4,
      marginBottom: vars.spacing.spacing1,
      fontFamily: vars.fontFamily.display,
      fontWeight: vars.fontWeight.medium,
    },
  },
});

globalStyle(`h1`, {
  "@layer": {
    [baseLayer]: {
      fontSize: vars.fontSize.h1,
    },
  },
});

globalStyle(`h2`, {
  "@layer": {
    [baseLayer]: {
      fontSize: vars.fontSize.h2,
    },
  },
});

globalStyle(`h3`, {
  "@layer": {
    [baseLayer]: {
      fontSize: vars.fontSize.h3,
    },
  },
});

globalStyle(`h4`, {
  "@layer": {
    [baseLayer]: {
      fontSize: vars.fontSize.h4,
    },
  },
});

globalStyle(`h5`, {
  "@layer": {
    [baseLayer]: {
      fontSize: vars.fontSize.h5,
    },
  },
});

globalStyle(`h6`, {
  "@layer": {
    [baseLayer]: {
      fontSize: vars.fontSize.h6,
    },
  },
});

/**
 * Horizontal rule
 */
globalStyle(`hr`, {
  "@layer": {
    [baseLayer]: {
      borderBottom: "none",
      borderTop: "1px solid",
      borderColor: vars.color.border_default,
      marginTop: vars.spacing.spacing3,
      marginBottom: vars.spacing.spacing3,
    },
  },
});

/**
 * Input & textarea
 */
globalStyle("input, textarea", {
  "@layer": {
    [baseLayer]: {
      background: vars.color.background,
      border: `1px solid ${vars.color.border_default}`,
      borderRadius: vars.borderRadius.md,
      color: vars.color.text_high_contrast,
      padding: `${vars.spacing.spacing1} ${vars.spacing.spacing2}`,
      ...createAccessibleTransition({
        transition: `ease ${vars.transitionDuration.short}`,
        transitionProperty: "color, background-color, border-color",
      }),
    },
  },
});

globalStyle("input::placeholder, textarea::placeholder", {
  "@layer": {
    [baseLayer]: {
      color: vars.color.text_low_contrast,
    },
  },
});

globalStyle(
  "input:not(:is([disabled], [readonly])):is(:hover,:focus), textarea:not([disabled]):is(:hover,:focus)",
  {
    "@layer": {
      [baseLayer]: {
        borderColor: vars.color.border_active,
        background: vars.color.tint_default,
      },
    },
  }
);

globalStyle("input:is(:focus-visible), textarea:is(:focus-visible)", {
  "@layer": {
    [baseLayer]: {
      ...a11yFocusStyleRule,
    },
  },
});

/**
 * Lists
 */
globalStyle(`ul, ol`, {
  "@layer": {
    [baseLayer]: {
      marginBlockStart: vars.spacing.spacing1,
      marginBlockEnd: vars.spacing.spacing1,
      paddingInlineStart: vars.spacing.spacing1,
    },
  },
});

/**
 * Menu
 */
globalStyle(`menu`, {
  "@layer": {
    [baseLayer]: {
      listStyleType: "none",
      padding: 0,
      margin: 0,
    },
  },
});

/**
 * Paragraph
 */
globalStyle(`p`, {
  "@layer": {
    [baseLayer]: {
      overflowWrap: `break-word`,

      marginBottom: vars.spacing.spacing1,
    },
  },
});

/**
 * Tables
 */
globalStyle(`table`, {
  "@layer": {
    [baseLayer]: {
      border: `1px solid ${vars.color.border_default}`,
      borderCollapse: "collapse",
    },
  },
});

globalStyle(`thead`, {
  "@layer": {
    [baseLayer]: {
      fontWeight: "bold",
    },
  },
});

globalStyle(`tbody tr:nth-of-type(odd)`, {
  "@layer": {
    [baseLayer]: {
      background: vars.color.tint_default,
    },
  },
});

globalStyle(`th, td`, {
  "@layer": {
    [baseLayer]: {
      textAlign: "left",
      padding: `${vars.spacing.spacing1} ${vars.spacing.spacing1}`,
    },
  },
});
