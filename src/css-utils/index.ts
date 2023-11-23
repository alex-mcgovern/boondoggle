import { StyleRule } from "@vanilla-extract/css";
import { vars } from "../index.css";

export function withPrefersMotion({ ...styleRules }: StyleRule): StyleRule {
	return {
		"@media": {
			"(prefers-reduced-motion: no-preference)": {
				...styleRules,
			},
		},
	};
}

type PaletteKey = `${string}${number}`;

type PaletteShape = Record<PaletteKey, string>;

const step = (palette: Record<PaletteKey, string>, target_step: number) => {
	return palette[Object.keys(palette)[target_step - 1] as PaletteKey];
};

type MakeThemeArgs = {
	primary: PaletteShape;
	secondary: PaletteShape;
	alpha: PaletteShape;
	isColorOverlay: boolean;
};

export const makeLightTheme = ({
	primary,
	secondary,
	alpha,
	isColorOverlay,
}: MakeThemeArgs) => {
	return {
		black: step(secondary, 12),
		white: step(secondary, 1),

		text_low_contrast: isColorOverlay
			? step(secondary, 11)
			: step(secondary, 10),
		text_high_contrast: isColorOverlay
			? step(secondary, 11)
			: step(secondary, 12),

		background: step(secondary, 1),
		background_raised: step(secondary, 1),
		backdrop: step(alpha, 11),
		shadow: step(alpha, 2),

		border_1: isColorOverlay ? step(secondary, 4) : step(secondary, 3),
		border_2: isColorOverlay ? step(secondary, 5) : step(secondary, 4),
		border_3: isColorOverlay ? step(secondary, 6) : step(secondary, 5),
		border_4: isColorOverlay ? step(secondary, 7) : step(secondary, 6),

		button_tint: step(primary, 5),
		button_default: step(primary, 9),
		button_hover: step(primary, 10),
		button_active: step(primary, 11),

		tint_1: isColorOverlay ? step(secondary, 3) : step(secondary, 2),
		tint_2: isColorOverlay ? step(secondary, 4) : step(secondary, 3),
		tint_3: isColorOverlay ? step(secondary, 5) : step(secondary, 4),
		tint_4: isColorOverlay ? step(secondary, 6) : step(secondary, 5),

		focus_ring: step(primary, 8),
	};
};

export const makeDarkTheme = ({
	primary,
	secondary,
	alpha,
	isColorOverlay,
}: MakeThemeArgs) => {
	return {
		black: step(secondary, 1),
		white: step(secondary, 12),

		text_low_contrast: step(secondary, 10),
		text_high_contrast: isColorOverlay
			? step(secondary, 11)
			: step(secondary, 12),

		background: step(secondary, 3),
		background_raised: step(secondary, 4),
		backdrop: step(alpha, 11),
		shadow: step(alpha, 2),

		border_1: isColorOverlay ? step(secondary, 5) : step(secondary, 4),
		border_2: isColorOverlay ? step(secondary, 6) : step(secondary, 5),
		border_3: isColorOverlay ? step(secondary, 7) : step(secondary, 6),
		border_4: isColorOverlay ? step(secondary, 8) : step(secondary, 7),

		button_tint: step(primary, 5),
		button_default: step(primary, 9),
		button_hover: step(primary, 10),
		button_active: step(primary, 10),

		tint_1: isColorOverlay ? step(secondary, 5) : step(secondary, 4),
		tint_2: isColorOverlay ? step(secondary, 5) : step(secondary, 4),
		tint_3: isColorOverlay ? step(secondary, 6) : step(secondary, 5),
		tint_4: isColorOverlay ? step(secondary, 7) : step(secondary, 6),

		focus_ring: step(primary, 8),
	};
};
