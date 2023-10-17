import { utilCss } from "../../styles/utils/util_css.css";
import { recipe } from "@vanilla-extract/recipes";

export const avatar = recipe({
	base: [
		utilCss({
			alignItems: "center",
			background: "button_active",
			border: "border_default",
			color: "white",
			display: "flex",
			flexShrink: "0",
			fontWeight: "bold",
			justifyContent: "center",
			overflow: "hidden",
		}),
		{
			fontSize: "100%",
		},
	],
	variants: {
		appearance: {
			circle: [utilCss({ borderRadius: "50%" })],
			square: [utilCss({ borderRadius: "md" })],
		},
	},
});
