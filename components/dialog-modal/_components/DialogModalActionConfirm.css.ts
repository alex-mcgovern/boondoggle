import { style } from "@vanilla-extract/css";

import { css } from "../../../src/styles/utils/util_css.css";

export const confirmTextStyle = style([
	css({
		display: "inline-block",
		marginBottom: "space_2",
	}),
	{
		userSelect: "none",
	},
]);
