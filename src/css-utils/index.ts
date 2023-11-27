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
			: step(secondary, 11),
		text_high_contrast: isColorOverlay
			? step(secondary, 11)
			: step(secondary, 12),

		background: step(secondary, 1),
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

		button_secondary: isColorOverlay
			? step(secondary, 3)
			: step(secondary, 2),

		button_secondary_border: isColorOverlay
			? step(secondary, 4)
			: step(secondary, 3),

		button_secondary_highlight: isColorOverlay
			? step(secondary, 4)
			: step(secondary, 3),
		button_secondary_border_highlight: isColorOverlay
			? step(secondary, 5)
			: step(secondary, 4),

		floating_menu_background: step(secondary, 2),
		floating_menu_highlight: step(secondary, 3),

		tabs_background: step(secondary, 3),
		tab_active_background: step(secondary, 1),

		tint_1: isColorOverlay ? step(secondary, 3) : step(secondary, 2),
		tint_2: isColorOverlay ? step(secondary, 4) : step(secondary, 3),
		tint_3: isColorOverlay ? step(secondary, 5) : step(secondary, 4),
		tint_4: isColorOverlay ? step(secondary, 6) : step(secondary, 5),

		tooltip_background: step(secondary, 12),
		tooltip_foreground: step(secondary, 1),

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

		button_secondary: isColorOverlay
			? step(secondary, 5)
			: step(secondary, 4),
		button_secondary_border: isColorOverlay
			? step(secondary, 6)
			: step(secondary, 5),

		button_secondary_highlight: isColorOverlay
			? step(secondary, 6)
			: step(secondary, 5),
		button_secondary_border_highlight: isColorOverlay
			? step(secondary, 7)
			: step(secondary, 6),

		floating_menu_background: step(secondary, 4),
		floating_menu_highlight: isColorOverlay
			? step(secondary, 2)
			: step(secondary, 5),

		tabs_background: step(secondary, 4),
		tab_active_background: step(secondary, 2),

		tint_1: isColorOverlay ? step(secondary, 5) : step(secondary, 4),
		tint_2: isColorOverlay ? step(secondary, 5) : step(secondary, 4),
		tint_3: isColorOverlay ? step(secondary, 6) : step(secondary, 5),
		tint_4: isColorOverlay ? step(secondary, 7) : step(secondary, 6),

		tooltip_background: step(secondary, 6),
		tooltip_foreground: step(secondary, 12),

		focus_ring: step(primary, 8),
	};
};
