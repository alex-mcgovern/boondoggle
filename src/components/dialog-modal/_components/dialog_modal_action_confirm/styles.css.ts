import { style } from "@vanilla-extract/css";
import { utilCss } from "../../../../index.css";

export const confirmTextStyle = style([
	utilCss({
		display: "inline-block",
		marginBottom: "space_2",
	}),
	{
		userSelect: "none",
	},
]);
