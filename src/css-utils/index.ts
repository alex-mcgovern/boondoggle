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
		backdrop: step(alpha, 11),

		border_rule: step(secondary, isOverlay ? 6 : 5),
		border_element: step(secondary, isOverlay ? 7 : 6),
		border_element_active: step(secondary, isOverlay ? 8 : 7),

		button_tint: step(primary, 5),
		button_default: step(primary, 9),
		button_hover: step(primary, 10),
		button_active: step(primary, 11),

		btn_secondary_bg: step(secondary, isOverlay ? 3 : 2),
		btn_secondary_bg_highlighted: step(secondary, isOverlay ? 4 : 3),

		text_field_background: step(secondary, isOverlay ? 3 : 2),
		text_field_background_highlighted: step(secondary, 1),

		tint_default: step(secondary, isOverlay ? 3 : 2),
		tint_hover: step(secondary, isOverlay ? 4 : 3),
		tint_active: step(secondary, isOverlay ? 5 : 4),

		tab_hover_color: step(secondary, isOverlay ? 4 : 3),
		tab_selected_color: step(primary, isOverlay ? 4 : 3),

		focus_ring: step(primary, 6),
		focus_border: step(primary, isOverlay ? 9 : 8),

		toast_background: step(secondary, 12),
		toast_icon: step(primary, 7),
		toast_text: step(primary, 1),

		switch_background: step(secondary, 7),
		switch_background_active: step(primary, 9),
		switch_foreground: step(secondary, 1),
	};
};
