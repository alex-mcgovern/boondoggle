import { style } from "@vanilla-extract/css";
import { sprinkles } from "../sprinkles/index.css";

export const datePickerRootCSS = style([
	sprinkles({
		padding: "space_4",
		width: "max-content",
	}),
	{
		minWidth: "24rem",
	},
]);
