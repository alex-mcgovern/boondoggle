import { style } from "@vanilla-extract/css";
import { css } from "../../src/styles/utils/util_css.css";

export const datePickerRoot = style([
	css({
		padding: "space_4",
		width: "max-content",
	}),
	{
		minWidth: "24rem",
	},
]);
