import { slate, slateA } from "@radix-ui/colors";

type PaletteKey = `${string}${number}`;

type PaletteShape = Record<PaletteKey, string>;

const step = (palette: Record<PaletteKey, string>, target_step: number) => {
	return palette[Object.keys(palette)[target_step - 1] as PaletteKey];
};

type MakeThemeArgs = {
	primary: PaletteShape;
	secondary: PaletteShape;
};

export const makeTheme = ({ primary, secondary }: MakeThemeArgs) => {
	return {
		backdrop: slateA.slateA11,
		background: step(secondary, 1),
		black: slate.slate12,
		border_active: step(secondary, 9),
		border_default: step(secondary, 7),
		border_hover: step(secondary, 8),
		button_active: step(primary, 11),
		button_default: step(primary, 9),
		button_hover: step(primary, 10),
		button_tint: step(primary, 5),
		focus_ring: step(primary, 8),
		shadow: slateA.slateA5,
		text_high_contrast: step(secondary, 12),
		text_low_contrast: step(secondary, 11),
		tint_active: step(secondary, 5),
		tint_default: step(secondary, 3),
		tint_hover: step(secondary, 4),
		white: slate.slate1,
	};
};
