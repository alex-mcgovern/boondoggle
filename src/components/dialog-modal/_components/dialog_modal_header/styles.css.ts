import { style } from "@vanilla-extract/css";
import { MEDIA_QUERY_MOBILE, utilCss, vars } from "../../../../index.css";

export const dialogHeaderStyle = style([
	utilCss({
		alignItems: "center",
		borderBottom: "border_default",
		display: "flex",
		justifyContent: "space-between",
		maxWidth: "100%",
		padding: "space_4",
	}),
]);

export const dialogTitleStyle = style([
	utilCss({
		fontWeight: "semibold",
		marginY: "none",
	}),
	{
		"@media": {
			[MEDIA_QUERY_MOBILE]: {
				fontSize: vars.fontSize.bodyLg,
			},
		},
	},
]);
