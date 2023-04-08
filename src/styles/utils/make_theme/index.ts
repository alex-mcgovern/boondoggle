type PaletteKey = `${string}${number}`;
type PaletteShape = Record<PaletteKey, string>;

const getFromPaletteByIndex = (
  palette: Record<PaletteKey, string>,
  index: number
) => {
  const keys: Array<PaletteKey> = Object.keys(palette) as Array<PaletteKey>;
  const key = keys[index];

  return palette[key];
};

export const makeColorScale = (palette: PaletteShape) => {
  return {
    background: {
      base: getFromPaletteByIndex(palette, 1),
      raised: getFromPaletteByIndex(palette, 2),
    },
    secondary: {
      base: getFromPaletteByIndex(palette, 3),
      active: getFromPaletteByIndex(palette, 4),
      selected: getFromPaletteByIndex(palette, 5),
    },
    border: {
      nonInteractive: getFromPaletteByIndex(palette, 6),
      interactive: getFromPaletteByIndex(palette, 7),
      interactiveActive: getFromPaletteByIndex(palette, 8),
    },
    solid: {
      base: getFromPaletteByIndex(palette, 9),
      active: getFromPaletteByIndex(palette, 10),
    },
    text: {
      lowContrast: getFromPaletteByIndex(palette, 11),
      highContrast: getFromPaletteByIndex(palette, 12),
    },
  };
};

export type ColorScale = ReturnType<typeof makeColorScale>;

interface MakeThemeArgs {
  accent: PaletteShape;
  neutral: PaletteShape;
  green: PaletteShape;
  red: PaletteShape;
}

export const makeTheme = ({ accent, neutral, green, red }: MakeThemeArgs) => {
  return {
    accent: makeColorScale(accent),
    neutral: makeColorScale(neutral),
    green: makeColorScale(green),
    red: makeColorScale(red),
  };
};
