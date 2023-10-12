import { style } from "@vanilla-extract/css";

import { getSprinkles } from "../../styles/utils/get_sprinkles.css";

export const datePickerRoot = style([
	getSprinkles({
		padding: "space_4",
		width: "max-content",
	}),
	{
		minWidth: "24rem",
	},
]);
