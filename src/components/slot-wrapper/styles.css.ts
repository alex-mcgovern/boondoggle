import { style } from "@vanilla-extract/css";
import { utilCss } from "../../index.css";

export const slot = style([
	{
		pointerEvents: "none",
	},
	utilCss({
		alignItems: "center",
		color: "text_low_contrast",
		display: "flex",
		justifyContent: "center",
		minWidth: "space_4",
	}),
]);
