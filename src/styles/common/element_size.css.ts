import { styleVariants } from "@vanilla-extract/css";
import { css } from "../utils/util_css.css";
import { v } from "../../../style.css";

export const elementHeight = {
	lg: v.spacing.space_12,
	md: v.spacing.space_10,
	sm: v.spacing.space_8,
};

export const elementPaddingRaw = {
	lg: {
		x: v.spacing.space_6,
		y: v.spacing.space_3,
	},
	md: {
		x: v.spacing.space_4,
		y: v.spacing.space_2,
	},
	sm: {
		x: v.spacing.space_2,
		y: v.spacing.space_1,
	},
};

export const elementFontSize = styleVariants({
	lg: [
		css({
			fontStyle: "bodyLg",
		}),
	],
	md: [
		css({
			fontStyle: "bodyMd",
		}),
	],
	sm: [
		css({
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

export type ElementSizeEnum = keyof typeof elementFontSize &
	keyof typeof elementPadding;
