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
	isColorOverlay,
}: {
	primary: PaletteShape;
	secondary: PaletteShape;
	alpha: PaletteShape;
	isColorOverlay: boolean;
}) => {
	return {
		black: step(secondary, 12),
		white: step(secondary, 1),

		text_low_contrast: isColorOverlay
			? step(secondary, 11)
			: step(secondary, 11),
		text_high_contrast: isColorOverlay
			? step(secondary, 11)
			: step(secondary, 12),

		background: step(secondary, 1),
		backdrop: step(alpha, 11),
		shadow: step(alpha, 2),

		border_default: isColorOverlay
			? step(secondary, 4)
			: step(secondary, 3),
		border_active: isColorOverlay ? step(secondary, 5) : step(secondary, 4),
		border_hover: isColorOverlay ? step(secondary, 6) : step(secondary, 5),

		button_tint: step(primary, 5),
		button_default: step(primary, 9),
		button_hover: step(primary, 10),
		button_active: step(primary, 11),

		tint_default: isColorOverlay ? step(secondary, 3) : step(secondary, 2),
		tint_hover: isColorOverlay ? step(secondary, 4) : step(secondary, 3),
		tint_active: isColorOverlay ? step(secondary, 5) : step(secondary, 4),

		focus_ring: step(primary, 8),
	};
};
