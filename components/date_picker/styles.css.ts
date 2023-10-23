import { style } from "@vanilla-extract/css";

import { utilCss } from "../../src/styles/utils/util_css.css";

export const datePickerRoot = style([
	utilCss({
		padding: "space_4",
		width: "max-content",
	}),
	{
		minWidth: "24rem",
	},
]);
