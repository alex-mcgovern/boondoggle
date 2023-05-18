import { globalStyle } from "@vanilla-extract/css";

import { a11yFocusStyleRule } from "./common/a11y.css";
import { baseLayer } from "./layers.css";
import { vars } from "./theme.css";
import { createAccessibleTransition } from "./utils/create_accessible_transition";

/** -----------------------------------------------------------------------------
 * Global selectors
 * ------------------------------------------------------------------------------- */

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
      fontFamily: vars.fontFamily.body,
      fontSize: vars.fontSize.body_md,
      height: `100%`,
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

/** -----------------------------------------------------------------------------
 * Anchor tags
 * ------------------------------------------------------------------------------- */

globalStyle(`a`, {
  "@layer": {
    [baseLayer]: {
      color: vars.color.button_default,
      margin: 0,
      padding: 0,
      textDecoration: "none",
    },
  },
});

globalStyle(`a:hover, a:focus, a:focus-visible`, {
  "@layer": {
    [baseLayer]: {
      color: vars.color.button_active,
      textDecoration: "underline",
    },
  },
});

globalStyle("a:focus-visible", {
  "@layer": {
    [baseLayer]: {
      ...a11yFocusStyleRule,
    },
  },
});

/** -----------------------------------------------------------------------------
 * Button
 * ------------------------------------------------------------------------------- */

globalStyle(`button`, {
  "@layer": {
    [baseLayer]: {
      background: "none",
      border: "none",
      textDecoration: "none",
      WebkitAppearance: "none",
    },
  },
});

/** -----------------------------------------------------------------------------
 * Checkbox
 * ------------------------------------------------------------------------------- */

globalStyle("input[type=checkbox]", {
  "@layer": {
    [baseLayer]: {
      accentColor: vars.color.button_default,
    },
  },
});

/** -----------------------------------------------------------------------------
 * Code
 * ------------------------------------------------------------------------------- */

globalStyle(`code`, {
  "@layer": {
    [baseLayer]: {
      color: "inherit",
      fontWeight: vars.fontWeight.normal,
    },
  },
});

/** -----------------------------------------------------------------------------
 * Headings
 * ------------------------------------------------------------------------------- */

globalStyle(`h1, h2, h3, h4, h5, h6`, {
  "@layer": {
    [baseLayer]: {
      display: "block",
      fontFamily: vars.fontFamily.display,
      fontWeight: vars.fontWeight.medium,
      lineHeight: 1.4,
      marginBottom: vars.spacing.spacing1,
      overflowWrap: `break-word`,
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

/** -----------------------------------------------------------------------------
 * Horizontal rule
 * ------------------------------------------------------------------------------- */

globalStyle(`hr`, {
  "@layer": {
    [baseLayer]: {
      borderBottom: "none",
      borderColor: vars.color.border_default,
      borderTop: "1px solid",
      marginBottom: vars.spacing.spacing3,
      marginTop: vars.spacing.spacing3,
    },
  },
});

/** -----------------------------------------------------------------------------
 * Input & text area
 * ------------------------------------------------------------------------------- */

globalStyle("input, textarea", {
  "@layer": {
    [baseLayer]: {
      background: vars.color.background,
      border: `1px solid ${vars.color.border_default}`,
      borderRadius: vars.borderRadius.md,
      color: vars.color.text_high_contrast,
      padding: `${vars.spacing.spacing1} ${vars.spacing.spacing2}`,
      ...createAccessibleTransition({
        transition: `ease ${vars.transitionDuration.short} ease`,
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
  "input:not([disabled]):is(:hover,:focus), textarea:not([disabled]):is(:hover,:focus)",
  {
    "@layer": {
      [baseLayer]: {
        background: vars.color.tint_default,
        borderColor: vars.color.border_active,
      },
    },
  }
);

globalStyle(
  "input:not([disabled]):is(:focus-visible), textarea:not([disabled]):is(:focus-visible)",
  {
    "@layer": {
      [baseLayer]: {
        ...a11yFocusStyleRule,
      },
    },
  }
);

globalStyle(
  "input[disabled]:is(:focus-visible, :focus), textarea[disabled]:is(:focus-visible, :focus)",
  {
    "@layer": {
      [baseLayer]: {
        outline: "none",
      },
    },
  }
);

/** -----------------------------------------------------------------------------
 * List elements
 * ------------------------------------------------------------------------------- */

globalStyle(`ul, ol`, {
  "@layer": {
    [baseLayer]: {
      marginBlockEnd: 0,
      marginBlockStart: 0,
      paddingInlineStart: 0,
    },
  },
});

globalStyle(`ul li, ol li`, {
  "@layer": {
    [baseLayer]: {
      listStylePosition: "inside",
      marginBottom: vars.spacing.spacing1,
    },
  },
});

globalStyle(`ul li::marker, ol li::marker`, {
  "@layer": {
    [baseLayer]: {
      color: vars.color.button_default,
      fontWeight: vars.fontWeight.semibold,
    },
  },
});

/** -----------------------------------------------------------------------------
 * Menu
 * ------------------------------------------------------------------------------- */

globalStyle(`menu`, {
  "@layer": {
    [baseLayer]: {
      listStyleType: "none",
      margin: 0,
      padding: 0,
    },
  },
});

/** -----------------------------------------------------------------------------
 * Paragraph
 * ------------------------------------------------------------------------------- */

globalStyle(`p`, {
  "@layer": {
    [baseLayer]: {
      marginBottom: vars.spacing.spacing1,
      overflowWrap: `break-word`,
    },
  },
});

/** -----------------------------------------------------------------------------
 * Table styles
 * ------------------------------------------------------------------------------- */

globalStyle(`table`, {
  "@layer": {
    [baseLayer]: {
      border: `1px solid ${vars.color.border_default}`,
      borderRadius: vars.borderRadius.md,
    },
  },
});

globalStyle(`thead`, {
  "@layer": {
    [baseLayer]: {
      color: vars.color.text_low_contrast,
      fontSize: vars.fontSize.body_sm,
    },
  },
});

globalStyle(`thead tr th, tbody tr:not(:last-child) td`, {
  "@layer": {
    [baseLayer]: {
      borderBottom: `1px solid ${vars.color.border_default}`,
    },
  },
});

globalStyle(`th, td`, {
  "@layer": {
    [baseLayer]: {
      padding: `${vars.spacing.spacing2} ${vars.spacing.spacing3}`,
      textAlign: "left",
    },
  },
});
