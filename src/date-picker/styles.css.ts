import { style } from "@vanilla-extract/css";
import { utilCss } from "../index.css";

export const datePickerRootCSS = style([
	utilCss({
		padding: "space_4",
		width: "max-content",
	}),
	{
		minWidth: "24rem",
	},
]);
