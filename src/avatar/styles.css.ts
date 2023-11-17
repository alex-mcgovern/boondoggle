import { recipe } from "@vanilla-extract/recipes";
import { utilCss, vars } from "../index.css";

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
		appearance: {
			circle: [utilCss({ borderRadius: "50%" })],
			square: [utilCss({ borderRadius: "md" })],
		},
	},
});
