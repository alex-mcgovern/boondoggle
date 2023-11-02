import { styleVariants } from "@vanilla-extract/css";

import { vars } from "../theme.css";
import { utilCss } from "../utils/util_css.css";

export const elementHeight = {
	lg: vars.spacing.space_12,
	md: vars.spacing.space_10,
	sm: vars.spacing.space_8,
};

export const elementPaddingRaw = {
	lg: {
		x: vars.spacing.space_6,
		y: vars.spacing.space_3,
	},
	md: {
		x: vars.spacing.space_4,
		y: vars.spacing.space_2,
	},
	sm: {
		x: vars.spacing.space_2,
		y: vars.spacing.space_1,
	},
};

export const elementFontSize = styleVariants({
	lg: [
		utilCss({
			fontStyle: "bodyLg",
		}),
	],
	md: [
		utilCss({
			fontStyle: "bodyMd",
		}),
	],
	sm: [
		utilCss({
			fontStyle: "bodySm",
		}),
	],
});

export const elementPadding = styleVariants({
	lg: {
		padding: `${elementPaddingRaw.lg.y} ${elementPaddingRaw.lg.x}`,
	},
	md: {
		padding: `${elementPaddingRaw.md.y} ${elementPaddingRaw.md.x}`,
	},
	sm: {
		padding: `${elementPaddingRaw.sm.y} ${elementPaddingRaw.sm.x}`,
	},
});

export type ElementSizeEnum = "lg" | "md" | "sm";
