import { style } from "@vanilla-extract/css";
import { utilCss } from "../../styles/utils/util_css.css";

export const slot = style([
	{
		pointerEvents: "none",
	},
	utilCss({
		alignItems: "center",
		color: "text_low_contrast",
		display: "flex",
		justifyContent: "center",
	}),
]);
