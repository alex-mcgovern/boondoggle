import { style } from "@vanilla-extract/css";

import { MEDIA_QUERY_MOBILE } from "../../../src/styles/common/media_queries.css";
import { vars } from "../../../src/styles/theme.css";
import { utilCss } from "../../../src/styles/utils/util_css.css";

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
