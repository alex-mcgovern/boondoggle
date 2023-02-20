import {
  blue,
  blueDark,
  green,
  greenDark,
  mauve,
  mauveDark,
  plum,
  plumDark,
  red,
  redDark,
  yellow,
  yellowDark,
} from "@radix-ui/colors";
import {
  createGlobalTheme,
  createTheme,
  createThemeContract,
} from "@vanilla-extract/css";
import { varsAspectRatio } from "./vars/vars_aspect_ratio.css";
import { varsBorderRadius } from "./vars/vars_border_radius.css";
import { varsShadow } from "./vars/vars_box_shadow.css";
import { varsFontSize } from "./vars/vars_font_size.css";
import { varsFontWeight } from "./vars/vars_font_weight.css";
import { varsGridTemplateColumns } from "./vars/vars_grid_template_columns.css";
import { varsHeight } from "./vars/vars_height";
import { varsLineHeight } from "./vars/vars_line_height.css";
import { varsSpacing } from "./vars/vars_spacing.css";
import { varsTransitionTime } from "./vars/vars_transition.css";
import { varsWidth } from "./vars/vars_width.css";

/** -----------------------------------------------------------------------------
 * GLOBAL VARIABLES
 * These are declared as css vars at the `root:` level, in scope of the `html` element
 * ------------------------------------------------------------------------------- */

export const root = createGlobalTheme(":root", {
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
 * THEME CONFIG
 * ------------------------------------------------------------------------------- */

export const accentPaletteDark = plumDark;
export const accentPaletteLight = plum;

export const grayPaletteDark = mauveDark;
export const grayPaletteLight = mauve;

export const semanticBluePaletteDark = blueDark;
export const semanticBluePaletteLight = blue;

export const semanticGreenPaletteDark = greenDark;
export const semanticGreenPaletteLight = green;

export const semanticRedPaletteDark = redDark;
export const semanticRedPaletteLight = red;

export const semanticYellowPaletteDark = yellowDark;
export const semanticYellowPaletteLight = yellow;

/** ---------------------------------------------—
 * THEME CONTRACT
 * ----------------------------------------------- */
const color = createThemeContract({
  /** Accent color scale */
  accent_background_base: null,
  accent_background_raised: null,

  accent_border_nonInteractive: null,
  accent_border_interactive: null,
  accent_border_interactiveActive: null,

  accent_primary_base: null,
  accent_primary_active: null,

  accent_text_lowContrast: null,
  accent_text_highContrast: null,

  accent_secondary_base: null,
  accent_secondary_active: null,
  accent_secondary_selected: null,

  /** Neutral color scale */
  neutral_white: null,
  neutral_black: null,

  neutral_background_base: null,
  neutral_background_raised: null,

  neutral_border_nonInteractive: null,
  neutral_border_interactive: null,
  neutral_border_interactiveActive: null,

  neutral_primary_base: null,
  neutral_primary_active: null,

  neutral_text_lowContrast: null,
  neutral_text_highContrast: null,

  neutral_secondary_base: null,
  neutral_secondary_active: null,
  neutral_secondary_selected: null,

  /** Semantic color scale */
  semantic_blue_lowContrast: null,
  semantic_blue_highContrast: null,

  semantic_green_lowContrast: null,
  semantic_green_highContrast: null,

  semantic_red_lowContrast: null,
  semantic_red_highContrast: null,

  semantic_yellow_lowContrast: null,
  semantic_yellow_highContrast: null,
});

/** ---------------------------------------------
 * LIGHT THEME
 * ----------------------------------------------- */

export const lightTheme = createTheme(color, {
  /** Accent color scale */
  accent_background_base: accentPaletteLight.plum1,
  accent_background_raised: accentPaletteLight.plum2,

  accent_secondary_base: accentPaletteLight.plum3,
  accent_secondary_active: accentPaletteLight.plum4,
  accent_secondary_selected: accentPaletteLight.plum5,

  accent_border_nonInteractive: accentPaletteLight.plum6,
  accent_border_interactive: accentPaletteLight.plum7,
  accent_border_interactiveActive: accentPaletteLight.plum8,

  accent_primary_base: accentPaletteLight.plum9,
  accent_primary_active: accentPaletteLight.plum10,

  accent_text_lowContrast: accentPaletteLight.plum11,
  accent_text_highContrast: accentPaletteLight.plum12,

  /** Neutral color scale */
  neutral_white: grayPaletteLight.mauve1,
  neutral_black: grayPaletteLight.mauve12,

  neutral_background_base: grayPaletteLight.mauve1,
  neutral_background_raised: grayPaletteLight.mauve2,

  neutral_secondary_base: grayPaletteLight.mauve3,
  neutral_secondary_active: grayPaletteLight.mauve4,
  neutral_secondary_selected: grayPaletteLight.mauve5,

  neutral_border_nonInteractive: grayPaletteLight.mauve6,
  neutral_border_interactive: grayPaletteLight.mauve7,
  neutral_border_interactiveActive: grayPaletteLight.mauve8,

  neutral_primary_base: grayPaletteLight.mauve9,
  neutral_primary_active: grayPaletteLight.mauve10,

  neutral_text_lowContrast: grayPaletteLight.mauve11,
  neutral_text_highContrast: grayPaletteLight.mauve12,

  /** Semantic color scale */
  semantic_blue_lowContrast: semanticBluePaletteLight.blue5,
  semantic_blue_highContrast: semanticBluePaletteLight.blue10,

  semantic_green_lowContrast: semanticGreenPaletteLight.green5,
  semantic_green_highContrast: semanticGreenPaletteLight.green10,

  semantic_red_lowContrast: semanticRedPaletteLight.red5,
  semantic_red_highContrast: semanticRedPaletteLight.red10,

  semantic_yellow_lowContrast: semanticYellowPaletteLight.yellow5,
  semantic_yellow_highContrast: semanticYellowPaletteLight.yellow10,
});

/** ---------------------------------------------
 * DARK THEME
 * ----------------------------------------------- */

export const darkTheme = createTheme(color, {
  /** Accent color scale */
  accent_background_base: accentPaletteDark.plum1,
  accent_background_raised: accentPaletteDark.plum2,

  accent_secondary_base: accentPaletteDark.plum3,
  accent_secondary_active: accentPaletteDark.plum4,
  accent_secondary_selected: accentPaletteDark.plum5,

  accent_border_nonInteractive: accentPaletteDark.plum6,
  accent_border_interactive: accentPaletteDark.plum7,
  accent_border_interactiveActive: accentPaletteDark.plum8,

  accent_primary_base: accentPaletteDark.plum9,
  accent_primary_active: accentPaletteDark.plum10,

  accent_text_lowContrast: accentPaletteDark.plum11,
  accent_text_highContrast: accentPaletteDark.plum12,

  /** Neutral color scale */
  neutral_white: grayPaletteLight.mauve1,
  neutral_black: grayPaletteLight.mauve12,

  neutral_background_base: grayPaletteDark.mauve1,
  neutral_background_raised: grayPaletteDark.mauve2,

  neutral_secondary_base: grayPaletteDark.mauve3,
  neutral_secondary_active: grayPaletteDark.mauve4,
  neutral_secondary_selected: grayPaletteDark.mauve5,

  neutral_border_nonInteractive: grayPaletteDark.mauve6,
  neutral_border_interactive: grayPaletteDark.mauve7,
  neutral_border_interactiveActive: grayPaletteDark.mauve8,

  neutral_primary_base: grayPaletteDark.mauve9,
  neutral_primary_active: grayPaletteDark.mauve10,

  neutral_text_lowContrast: grayPaletteDark.mauve11,
  neutral_text_highContrast: grayPaletteDark.mauve12,

  /** Semantic color scale */
  semantic_blue_lowContrast: semanticBluePaletteDark.blue5,
  semantic_blue_highContrast: semanticBluePaletteDark.blue10,

  semantic_green_lowContrast: semanticGreenPaletteDark.green5,
  semantic_green_highContrast: semanticGreenPaletteDark.green10,

  semantic_red_lowContrast: semanticRedPaletteDark.red5,
  semantic_red_highContrast: semanticRedPaletteDark.red10,

  semantic_yellow_lowContrast: semanticYellowPaletteDark.yellow5,
  semantic_yellow_highContrast: semanticYellowPaletteDark.yellow10,
});

export const vars = { ...root, color };
