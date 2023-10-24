import { style } from "@vanilla-extract/css";
import { MOBILE, v } from "../../../style.css";
import { css } from "../../../src/styles/utils/util_css.css";

export const dialogHeaderStyle = style([
	css({
		alignItems: "center",
		borderBottom: "border_default",
		display: "flex",
		justifyContent: "space-between",
		maxWidth: "100%",
		padding: "space_4",
	}),
]);

export const dialogTitleStyle = style([
	css({
		fontWeight: "semibold",
		marginY: "none",
	}),
	{
		"@media": {
			[MOBILE]: {
				fontSize: v.fontSize.bodyLg,
			},
		},
	},
]);
