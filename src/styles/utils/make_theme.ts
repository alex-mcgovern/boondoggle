/* eslint-disable import/no-extraneous-dependencies */
import { slate, slateA } from "@radix-ui/colors";

type PaletteKey = `${string}${number}`;

type PaletteShape = Record<PaletteKey, string>;

const getFromPaletteByIndex = (palette: Record<PaletteKey, string>, index: number) =>
    {return palette[Object.keys(palette)[index] as PaletteKey]};

type MakeThemeArgs = {
    primaryPalette: PaletteShape;

    secondaryPalette: PaletteShape;
};

export const makeTheme = ({ primaryPalette, secondaryPalette }: MakeThemeArgs) => {return {
    backdrop: slateA.slateA11,
    background: getFromPaletteByIndex(secondaryPalette, 0),
    black: slate.slate12,
    border_active: getFromPaletteByIndex(secondaryPalette, 7),
    border_default: getFromPaletteByIndex(secondaryPalette, 6),
    button_active: getFromPaletteByIndex(primaryPalette, 10),
    button_default: getFromPaletteByIndex(primaryPalette, 8),
    button_tint: getFromPaletteByIndex(primaryPalette, 4),
    focus_ring: getFromPaletteByIndex(primaryPalette, 7),
    shadow: slateA.slateA5,
    text_high_contrast: getFromPaletteByIndex(secondaryPalette, 11),
    text_low_contrast: getFromPaletteByIndex(secondaryPalette, 10),
    tint_active: getFromPaletteByIndex(secondaryPalette, 4),
    tint_default: getFromPaletteByIndex(secondaryPalette, 2),
    white: slate.slate1,
}};
