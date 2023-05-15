import { amber, blue, green, red, slate, slateA } from "@radix-ui/colors";
import {
  assignVars,
  createGlobalTheme,
  styleVariants,
} from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { themeLayer } from "./layers.css";

/**
 * Color theme
 * @see https://vanilla-extract.style/documentation/global-api/create-global-theme/
 */

type PaletteKey = `${string}${number}`;
type PaletteShape = Record<PaletteKey, string>;

const getFromPaletteByIndex = (
  palette: Record<PaletteKey, string>,
  index: number
) => {
  return palette[Object.keys(palette)[index] as PaletteKey];
};

type MakeThemeArgs = {
  primaryPalette: PaletteShape;
  secondaryPalette: PaletteShape;
};

const makeTheme = ({ primaryPalette, secondaryPalette }: MakeThemeArgs) => {
  return {
    background: getFromPaletteByIndex(secondaryPalette, 0),
    black: slate.slate12,
    border_active: getFromPaletteByIndex(secondaryPalette, 7),
    border_default: getFromPaletteByIndex(secondaryPalette, 6),
    button_active: getFromPaletteByIndex(primaryPalette, 10),
    button_default: getFromPaletteByIndex(primaryPalette, 8),
    button_tint: getFromPaletteByIndex(primaryPalette, 4),
    shadow: slateA.slateA5,
    text_high_contrast: getFromPaletteByIndex(secondaryPalette, 11),
    text_low_contrast: getFromPaletteByIndex(secondaryPalette, 10),
    tint_active: getFromPaletteByIndex(secondaryPalette, 4),
    tint_default: getFromPaletteByIndex(secondaryPalette, 2),
    white: slate.slate1,
  };
};

export const color = createGlobalTheme(":root", {
  ...makeTheme({
    primaryPalette: blue,
    secondaryPalette: slate,
  }),
});

export const variantColorOverlay = styleVariants({
  amber: {
    "@layer": {
      [themeLayer]: {
        vars: assignVars(
          color,
          makeTheme({ primaryPalette: amber, secondaryPalette: amber })
        ),
      },
    },
  },
  blue: {
    "@layer": {
      [themeLayer]: {
        vars: assignVars(
          color,
          makeTheme({ primaryPalette: blue, secondaryPalette: blue })
        ),
      },
    },
  },
  green: {
    "@layer": {
      [themeLayer]: {
        vars: assignVars(
          color,
          makeTheme({ primaryPalette: green, secondaryPalette: green })
        ),
      },
    },
  },
  grey: {
    "@layer": {
      [themeLayer]: {
        vars: assignVars(
          color,
          makeTheme({ primaryPalette: slate, secondaryPalette: slate })
        ),
      },
    },
  },
  red: {
    "@layer": {
      [themeLayer]: {
        vars: assignVars(
          color,
          makeTheme({ primaryPalette: red, secondaryPalette: red })
        ),
      },
    },
  },
});

export const getTheme = recipe({
  variants: {
    colorOverlay: variantColorOverlay,
  },
});

export type ColorScheme = typeof color;
export type ColorOverlay = keyof typeof variantColorOverlay;
