import { createGlobalTheme } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

import { color } from "./color_palette.css";

const GRID_MAX_WIDTH = 1080;
const GRID_MAX_WIDTH_PX = `${GRID_MAX_WIDTH}px`;

/** -----------------------------------------------------------------------------
 * Global variables (css vars)
 *
 * These are declared as css vars at the `root:` level, in scope of the `html` element
 * - See: https://vanilla-extract.style/documentation/global-api/create-global-theme/
 * ------------------------------------------------------------------------------- */

export const rootVars = createGlobalTheme(":root", {
  aspectRatio: {
    square: "1 / 1",
    extraWide: "10 / 3",
    wide: "16 / 9",
    tall: "9 / 16",
  },
  borderRadius: {
    pill: "99999px",
    "50%": "50%",
    lg: "16px",
    md: "8px",
    sm: "4px",
  },
  boxShadow: {
    lg: `0px 8px 8px #00000012`,
    md: `0px 4px 8px #00000008`,
    sm: `0px 2px 8px #00000004`,
  },
  border: {
    border_default: `1px solid ${color.border_default}`,
    border_active: `1px solid ${color.border_active}`,
  },
  display: {
    block: "block",
    flex: "flex",
    grid: "grid",
    "inline-block": "inline-block",
    "inline-flex": "inline-flex",
    inline: "inline",
    none: "none",
    table: "table",
  },
  fontFamily: {
    body: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"`,
    display: `"DM Sans", sans-serif;`,
  },
  fontSize: {
    root: "16px",
    h1: "2.281rem", // 36.49px
    h2: "2.027rem", // 32.44px
    h3: "1.802rem", // 28.83px
    h4: "1.602rem", // 25.63px
    h5: "1.424rem", // 22.78px
    h6: "1.266rem", // 20.25px

    body_xl: "1.266rem", // 20.25px (Same as h6)
    body_lg: "1.125rem", // 18.00px
    body_md: "1rem", // 16.00px
    body_sm: "0.889rem", // 14.22px
  },
  fontWeight: {
    light: "300",
    normal: "400",
    medium: "500",
    semibold: "600",
    bold: "700",
    extrabold: "800",
  },
  gridTemplateColumns: {
    "1x": "1fr",
    "2x": "repeat(2, 1fr)",
    "3x": "repeat(3, 1fr)",
    "4x": "repeat(4, 1fr)",
    "5x": "repeat(5, 1fr)",
    "6x": "repeat(6, 1fr)",
    "1_2": "1fr 2fr",
    "1_3": "1fr 3fr",
    "2_1": "2fr 1fr",
    "3_1": "3fr 1fr",
    "5_7": "5fr 7fr",
    "7_5": "7fr 5fr",
  },
  lineHeight: {
    root: "1.5",
    h1: "1",
    h2: "1",
    h3: "1",
    h4: "1",
    h5: "1",
    h6: "1",
    body_xl: "1.5",
    body_lg: "1.5",
    body_md: "1.5",
    body_sm: "1.5",
  },
  height: {
    "": "0",
    "100%": "100%",
    "75%": "75%",
    "50%": "50%",
    "25%": "25%",
    "100vh": "100vh",
    "75vh": "75vh",
    "50vh": "50vh",
    "25vh": "25vh",
    auto: "auto",
    "min-content": "min-content",
  },
  spacing: {
    auto: "auto",

    none: "0",
    spacing0: "0.25rem",
    spacing1: "0.5rem",
    spacing2: "1rem",
    spacing3: "1.5rem",
    spacing4: "2rem",
    spacing5: "2.5rem",
    spacing6: "3rem",
    spacing7: "3.5rem",
  },
  transitionDuration: {
    short: "150ms",
    medium: "300ms",
    long: "450ms",
  },
  width: {
    "": "0",
    "100%": "100%",
    "50%": "50%",
    "25%": "25%",
    auto: "auto",
    "min-content": "min-content",
    "max-content": "max-content",
    gridSpan1: calc.divide(GRID_MAX_WIDTH_PX, 12),
    gridSpan2: calc.multiply(calc.divide(GRID_MAX_WIDTH_PX, 12), 2),
    gridSpan3: calc.multiply(calc.divide(GRID_MAX_WIDTH_PX, 12), 3),
    gridSpan4: calc.multiply(calc.divide(GRID_MAX_WIDTH_PX, 12), 4),
    gridSpan5: calc.multiply(calc.divide(GRID_MAX_WIDTH_PX, 12), 5),
    gridSpan6: calc.multiply(calc.divide(GRID_MAX_WIDTH_PX, 12), 6),
    gridSpan7: calc.multiply(calc.divide(GRID_MAX_WIDTH_PX, 12), 7),
    gridSpan8: calc.multiply(calc.divide(GRID_MAX_WIDTH_PX, 12), 8),
    gridSpan9: calc.multiply(calc.divide(GRID_MAX_WIDTH_PX, 12), 9),
    gridSpan10: calc.multiply(calc.divide(GRID_MAX_WIDTH_PX, 12), 10),
    gridSpan11: calc.multiply(calc.divide(GRID_MAX_WIDTH_PX, 12), 11),
    gridSpan12: calc.multiply(calc.divide(GRID_MAX_WIDTH_PX, 12), 12),
  },
});
