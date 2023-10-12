import { style } from "@vanilla-extract/css";

import { vars } from "../../styles/theme.css";
import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const fieldsGridStyle = style([
	getSprinkles({
		display: "grid",
		gridTemplateColumns: {
			mobile: "1x",
			tablet: "2x",
		},
	}),
	{
		columnGap: vars.spacing.space_4,
		selectors: {
			"&:not(:last-child)": {
				marginBottom: vars.spacing.space_4,
			},
		},
	},
]);
