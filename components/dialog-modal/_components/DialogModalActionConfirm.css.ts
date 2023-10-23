import { style } from "@vanilla-extract/css";

import { utilCss } from "../../../src/styles/utils/util_css.css";

export const confirmTextStyle = style([
	utilCss({
		display: "inline-block",
		marginBottom: "space_2",
	}),
	{
		userSelect: "none",
	},
]);
