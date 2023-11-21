import { style } from "@vanilla-extract/css";
import { MEDIA_QUERY_MOBILE, vars } from "../../../index.css";
import { sprinkles } from "../../../sprinkles/index.css";

export const dialogHeaderStyle = style([
	sprinkles({
		alignItems: "center",
		borderBottom: "border_1",
		display: "flex",
		justifyContent: "space-between",
		maxWidth: "100%",
		padding: "space_4",
	}),
]);

export const dialogTitleStyle = style([
	sprinkles({
		fontWeight: "semibold",
		marginY: "none",
		color: "text_high_contrast",
	}),
	{
		"@media": {
			[MEDIA_QUERY_MOBILE]: {
				fontSize: vars.fontSize.bodyLg,
			},
		},
	},
]);
