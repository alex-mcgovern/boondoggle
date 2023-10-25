import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { HOVER_FOCUS } from "../../src/styles/common/selectors.css";
import { css } from "../../src/styles/utils/util_css.css";
import { focus, motion, theme, v } from "../../style.css";
const pillSize = styleVariants({
	lg: [
		css({
			fontStyle: "bodyMd",
		}),
	],
	md: [
		css({
			fontStyle: "bodySm",
		}),
	],
	sm: [
		css({
			fontStyle: "bodySm",
		}),
	],
});

export const getPillStyle = recipe({
	base: [
		css({
			alignItems: "center",
			background: "tint_hover",
			borderRadius: "pill",
			color: "text_low_contrast",
			flexShrink: "0",
			fontWeight: "regular",
			paddingX: "space_2",
			paddingY: "space_1",
			textDecoration: "none",
			whiteSpace: "nowrap",
			width: "max-content",
		}),
		focus,
		motion({
			transition: `border-color ${v.duration.short} ease, background ${v.duration.short} ease`,
		}),
		{
			selectors: {
				[HOVER_FOCUS]: {
					background: v.color.tint_active,
					borderColor: v.color.border_default,
				},
			},
		},
	],

	variants: {
		theme,
		size: pillSize,
	},
});
