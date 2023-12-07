import { StyleRule } from "@vanilla-extract/css";

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

export const makeTheme = ({
	primary,
	secondary,
	alpha,
	isOverlay,
}: {
	primary: PaletteShape;
	secondary: PaletteShape;
	alpha: PaletteShape;
	isOverlay: boolean;
}) => {
	return {
		black: step(secondary, 12),
		white: step(secondary, 1),

		text_low_contrast: step(secondary, 11),
		text_high_contrast: step(secondary, isOverlay ? 11 : 12),

		background: step(secondary, 1),
		backdrop: step(alpha, isOverlay ? 9 : 11),
		shadow: step(alpha, 2),

		border_default: step(secondary, isOverlay ? 6 : 5),
		border_active: step(secondary, isOverlay ? 7 : 6),
		border_hover: step(secondary, isOverlay ? 8 : 7),

		button_tint: step(primary, 5),
		button_default: step(primary, 9),
		button_hover: step(primary, 10),
		button_active: step(primary, 11),

		tint_default: step(secondary, isOverlay ? 3 : 2),
		tint_hover: step(secondary, isOverlay ? 4 : 3),
		tint_active: step(secondary, isOverlay ? 5 : 4),

		focus_ring: step(primary, 8),
	};
};
