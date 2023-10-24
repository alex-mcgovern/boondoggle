import { style } from "@vanilla-extract/css";
import { v } from "../../style.css";
import { css } from "../../src/styles/utils/util_css.css";

export const fieldsGridStyle = style([
	css({
		display: "grid",
		gridTemplateColumns: {
			mobile: "1x",
			tablet: "2x",
		},
	}),
	{
		columnGap: v.spacing.space_4,
	},
]);
