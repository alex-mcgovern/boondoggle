import { style } from "@vanilla-extract/css";

import { vars } from "../../src/styles/theme.css";
import { utilCss } from "../../src/styles/utils/util_css.css";

export const fieldsGridStyle = style([
	utilCss({
		display: "grid",
		gridTemplateColumns: {
			mobile: "1x",
			tablet: "2x",
		},
	}),
	{
		columnGap: vars.spacing.space_4,
	},
]);
