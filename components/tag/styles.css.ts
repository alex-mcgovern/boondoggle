import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { HOVER_FOCUS } from "../../src/styles/common/selectors.css";
import { css } from "../../src/styles/utils/util_css.css";
import { focus, motion, v, theme } from "../../style.css";
const tagSize = styleVariants({
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

export const getTagStyle = recipe({
	base: [
		css({
			alignItems: "center",
			background: "tint_default",
			borderRadius: "md",
			color: "text_low_contrast",
			display: "inline-flex",
			flexShrink: "0",
			gap: "space_1",
			paddingX: "space_2",
			paddingY: "space_1",
			textDecoration: "none",
			whiteSpace: "nowrap",
			width: "max-content",
		}),
		focus,
		motion({
			transition: `ease ${v.duration.short} ease`,
			transitionProperty: "color, background-color, border-color",
		}),
		{
			selectors: {
				[HOVER_FOCUS]: {
					background: v.color.tint_active,
					color: v.color.text_high_contrast,
				},
			},
		},
	],

	variants: {
		theme,
		size: tagSize,
	},
});
