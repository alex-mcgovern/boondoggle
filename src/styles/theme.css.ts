import {
  blue,
  blueDark,
  green,
  greenDark,
  red,
  redDark,
  slate,
  slateDark,
} from "@radix-ui/colors";
import { createGlobalTheme, createTheme } from "@vanilla-extract/css";

import { makeTheme } from "./utils/make_theme";
import { varsAspectRatio } from "./vars/vars_aspect_ratio.css";
import { varsBorderRadius } from "./vars/vars_border_radius.css";
import { varsShadow } from "./vars/vars_box_shadow.css";
import { varsFontSize } from "./vars/vars_font_size.css";
import { varsFontWeight } from "./vars/vars_font_weight.css";
import { varsGridTemplateColumns } from "./vars/vars_grid_template_columns.css";
import { varsHeight } from "./vars/vars_height.css";
import { varsLineHeight } from "./vars/vars_line_height.css";
import { varsSpacing } from "./vars/vars_spacing.css";
import { varsTransitionTime } from "./vars/vars_transition.css";
import { varsWidth } from "./vars/vars_width.css";

/** -----------------------------------------------------------------------------
 * Global variables (css vars)
 *
 * These are declared as css vars at the `root:` level, in scope of the `html` element
 * - See: https://vanilla-extract.style/documentation/global-api/create-global-theme/
 * ------------------------------------------------------------------------------- */

const root = createGlobalTheme(":root", {
  aspectRatio: varsAspectRatio,
  borderRadius: varsBorderRadius,
  boxShadow: varsShadow,

  fontFamily: {
    body: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"`,
    display: `"DM Sans", sans-serif;`,
  },
  fontSize: varsFontSize,
  fontWeight: varsFontWeight,
  gridTemplateColumns: varsGridTemplateColumns,
  lineHeight: varsLineHeight,
  height: varsHeight,
  spacing: varsSpacing,
  transitionDuration: varsTransitionTime,
  width: varsWidth,
});

/** -----------------------------------------------------------------------------
 * Default color theme
 *
 * These are also declared as CSS vars at the `root:` level, in scope of the `html` element
 * - See: https://vanilla-extract.style/documentation/global-api/create-global-theme/
 * ------------------------------------------------------------------------------- */

export const color = createGlobalTheme(":root", {
  ...makeTheme({
    accent: blue,
    neutral: slate,
    red: red,
    green: green,
  }),
});

export type ColorScheme = typeof color;

/** -----------------------------------------------------------------------------
 * Dark mode color theme
 *
 *
 * - Created as a seperate class, so that it can be imported and toggled on/off in the app
 * - Overrides the vars defined in {@link color}
 * https://vanilla-extract.style/documentation/api/create-theme/
 * ------------------------------------------------------------------------------- */

export const darkTheme = createTheme(color, {
  ...makeTheme({
    accent: blueDark,
    neutral: slateDark,
    red: redDark,
    green: greenDark,
  }),
});

export const vars = { ...root, color };
