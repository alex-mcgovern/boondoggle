import { createGlobalTheme } from "@vanilla-extract/css";

import { color } from "./color_palette.css";

/**
 * Global variables (css vars)
 *
 * These are declared as css vars at the `root:` level, in scope of the `html` element
 * - See: https://vanilla-extract.style/documentation/global-api/create-global-theme/
 */

export const rootVars = createGlobalTheme(":root", {
  aspectRatio: {
    extraWide: "10 / 3",
    square: "1 / 1",
    tall: "9 / 16",
    wide: "16 / 9",
  },
  border: {
    border_active: `1px solid ${color.border_active}`,
    border_default: `1px solid ${color.border_default}`,
  },
  borderRadius: {
    "50%": "50%",
    lg: "16px",
    md: "8px",
    pill: "99999px",
    sm: "4px",
  },
  boxShadow: {
    lg: "0 8px 24px rgba(140,149,159,0.2)",
    md: "0 3px 6px rgba(140,149,159,0.15)",
    sm: "0 1px 0 rgba(31,35,40,0.04)",
  },
  display: {
    block: "block",
    flex: "flex",
    grid: "grid",
    inline: "inline",
    "inline-block": "inline-block",
    "inline-flex": "inline-flex",
    none: "none",
    table: "table",
    "table-cell": "table-cell",
  },
  fontFamily: {
    body: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"`,
  },
  fontSize: {
    body_lg: "1.125rem",
    body_md: "1rem",
    body_sm: "0.889rem",
    body_xl: "1.266rem",
    body_xs: "0.79rem",
    h1: "2.281rem",
    h2: "2.027rem",
    h3: "1.802rem",
    h4: "1.602rem",
    h5: "1.424rem",
    h6: "1.266rem",
    root: "16px",
  },
  fontWeight: {
    bold: "700",
    extrabold: "800",
    light: "300",
    medium: "500",
    normal: "400",
    semibold: "600",
  },
  gridTemplateColumns: {
    "1_2": "1fr 2fr",
    "1_3": "1fr 3fr",
    "1x": "1fr",
    "2_1": "2fr 1fr",
    "2x": "repeat(2, 1fr)",
    "3_1": "3fr 1fr",
    "3x": "repeat(3, 1fr)",
    "4x": "repeat(4, 1fr)",
    "5_7": "5fr 7fr",
    "5x": "repeat(5, 1fr)",
    "6x": "repeat(6, 1fr)",
    "7_5": "7fr 5fr",
    "7x": "repeat(7, 1fr)",
  },
  height: {
    "": "0",
    "25%": "25%",
    "25vh": "25vh",
    "50%": "50%",
    "50vh": "50vh",
    "75%": "75%",
    "75vh": "75vh",
    "90vh": "90vh",
    "100%": "100%",
    "100vh": "100vh",
    auto: "auto",
    "min-content": "min-content",
  },
  lineHeight: {
    body_lg: "1.5",
    body_md: "1.5",
    body_sm: "1.5",
    body_xl: "1.5",
    body_xs: "1.25",
    h1: "1",
    h2: "1",
    h3: "1",
    h4: "1",
    h5: "1",
    h6: "1",
    root: "1.5",
  },
  spacing: {
    auto: "auto",
    none: "0",
    spacing0: "0.25rem",
    spacing1: "0.5rem",
    "spacing1.5": "0.75rem",
    spacing2: "1rem",
    spacing3: "1.5rem",
    spacing4: "2rem",
    spacing5: "2.5rem",
    spacing6: "3rem",
    spacing7: "3.5rem",
  },
  transitionDuration: {
    long: "450ms",
    medium: "300ms",
    short: "150ms",
    very_long: "600ms",
  },
  width: {
    "": "0",
    "25%": "25%",
    "50%": "50%",
    "100%": "100%",
    auto: "auto",
    col_1: "8.33333333%",
    col_2: "16.66666666%",
    col_3: "24.99999999%",
    col_4: "33.33333332%",
    col_5: "41.66666665%",
    col_6: "49.99999998%",
    col_7: "58.33333331%",
    col_8: "66.66666664%",
    col_9: "74.99999997%",
    col_10: "83.3333333%",
    col_11: "91.66666663%",
    col_12: "100%",
    "max-content": "max-content",
    "min-content": "min-content",
  },
});
