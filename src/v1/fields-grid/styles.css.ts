import { style } from "@vanilla-extract/css";
import { vars } from "../../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const fieldsGridStyle = style([
	sprinkles({
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
