import { style } from "@vanilla-extract/css";
import { utilCss, vars } from "../index.css";

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