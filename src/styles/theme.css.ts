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

type PaletteKey = `${string}${number}`;
type PaletteShape = Record<PaletteKey, string>;

const getFromPaletteByIndex = (
  palette: Record<PaletteKey, string>,
  index: number
) => {
  return palette[Object.keys(palette)[index] as PaletteKey];
};

interface MakeThemeArgs {
  accentPalette: PaletteShape;
  neutralPalette: PaletteShape;
  greenPalette: PaletteShape;
  redPalette: PaletteShape;
}

const makeBaseTheme = ({
  accentPalette,
  neutralPalette,
  greenPalette,
  redPalette,
}: MakeThemeArgs) => {
  return {
    background: {
      bg_default: getFromPaletteByIndex(neutralPalette, 0),
    },
    border: {
      border_default: getFromPaletteByIndex(neutralPalette, 6),
      border_default_active: getFromPaletteByIndex(neutralPalette, 7),
      border_accent: getFromPaletteByIndex(accentPalette, 6),
      border_accent_active: getFromPaletteByIndex(accentPalette, 7),
      border_green: getFromPaletteByIndex(greenPalette, 6),
      border_green_active: getFromPaletteByIndex(greenPalette, 7),
      border_red: getFromPaletteByIndex(redPalette, 6),
      border_red_active: getFromPaletteByIndex(redPalette, 7),
    },
    button: {
      button_default: getFromPaletteByIndex(accentPalette, 8),
      button_default_active: getFromPaletteByIndex(accentPalette, 10),
      button_green: getFromPaletteByIndex(greenPalette, 8),
      button_green_active: getFromPaletteByIndex(greenPalette, 10),
      button_red: getFromPaletteByIndex(redPalette, 8),
      button_red_active: getFromPaletteByIndex(redPalette, 10),
    },
    surface: {
      surface_default: getFromPaletteByIndex(neutralPalette, 2),
      surface_default_active: getFromPaletteByIndex(neutralPalette, 4),
      surface_accent: getFromPaletteByIndex(accentPalette, 2),
      surface_accent_active: getFromPaletteByIndex(accentPalette, 4),
      surface_green: getFromPaletteByIndex(greenPalette, 2),
      surface_green_active: getFromPaletteByIndex(greenPalette, 4),
      surface_red: getFromPaletteByIndex(redPalette, 2),
      surface_red_active: getFromPaletteByIndex(redPalette, 4),
    },
    tint: {
      tint_default: getFromPaletteByIndex(neutralPalette, 4),
      tint_default_active: getFromPaletteByIndex(neutralPalette, 6),
      tint_accent: getFromPaletteByIndex(accentPalette, 4),
      tint_accent_active: getFromPaletteByIndex(accentPalette, 6),
      tint_green: getFromPaletteByIndex(greenPalette, 4),
      tint_green_active: getFromPaletteByIndex(greenPalette, 6),
      tint_red: getFromPaletteByIndex(redPalette, 4),
      tint_red_active: getFromPaletteByIndex(redPalette, 6),
    },
    text: {
      text_default_high_contrast: getFromPaletteByIndex(neutralPalette, 11),
      text_default_low_contrast: getFromPaletteByIndex(neutralPalette, 10),
      text_accent_high_contrast: getFromPaletteByIndex(accentPalette, 11),
      text_accent_low_contrast: getFromPaletteByIndex(accentPalette, 10),
      text_green_high_contrast: getFromPaletteByIndex(greenPalette, 11),
      text_green_low_contrast: getFromPaletteByIndex(greenPalette, 10),
      text_red_high_contrast: getFromPaletteByIndex(redPalette, 11),
      text_red_low_contrast: getFromPaletteByIndex(redPalette, 10),
    },
    neutral: {
      black: getFromPaletteByIndex(slate, 0),
      white: getFromPaletteByIndex(slate, 1),
    },
  };
};

export const color = createGlobalTheme(":root", {
  ...makeBaseTheme({
    accentPalette: blue,
    neutralPalette: slate,
    redPalette: red,
    greenPalette: green,
  }),
});

export type ColorScheme = typeof color;

/** -----------------------------------------------------------------------------
 * Dark mode color theme
 *
 *
 * - Created as a separate class, so that it can be imported and toggled on/off in the app
 * - Overrides the vars defined in {@link color}
 * https://vanilla-extract.style/documentation/api/create-theme/
 * ------------------------------------------------------------------------------- */

export const darkTheme = createTheme(color, {
  ...makeBaseTheme({
    accentPalette: blueDark,
    neutralPalette: slateDark,
    redPalette: redDark,
    greenPalette: greenDark,
  }),
});

export const vars = { ...root, color };
