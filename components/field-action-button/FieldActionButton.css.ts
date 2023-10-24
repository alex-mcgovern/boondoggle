import { style } from "@vanilla-extract/css";
import { focus, motion, v } from "../../style.css";

export const fieldActionButtonStyle = style([
	focus,
	{
		borderRadius: v.radius.sm,
		color: v.color.text_low_contrast,
		pointerEvents: "all",
		selectors: {
			"&:hover": {
				color: v.color.text_high_contrast,
				...motion({
					transition: `ease ${v.duration.short} ease`,
					transitionProperty: "color",
				}),
			},
		},
	},
]);
