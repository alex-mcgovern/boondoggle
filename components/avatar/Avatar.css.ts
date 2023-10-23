import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../../src/styles/theme.css";
import { utilCss } from "../../src/styles/utils/util_css.css";

export const avatar = recipe({
	base: [
		utilCss({
			alignItems: "center",
			background: "button_tint",
			color: "button_default",
			display: "flex",
			flexShrink: "0",
			fontWeight: "medium",
			justifyContent: "center",
			overflow: "hidden",
		}),
		{
			fontSize: `max(${vars.fontSize.bodySm}, 100%)`,
		},
	],
	variants: {
		variant: {
			circle: [utilCss({ borderRadius: "50%" })],
			square: [utilCss({ borderRadius: "md" })],
		},
	},
});
