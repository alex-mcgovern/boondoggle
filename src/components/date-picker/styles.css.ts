import { style } from "@vanilla-extract/css";
import { utilCss } from "../../index.css";

export const datePickerRoot = style([
	utilCss({
		padding: "space_4",
		width: "max-content",
	}),
	{
		minWidth: "24rem",
	},
]);
