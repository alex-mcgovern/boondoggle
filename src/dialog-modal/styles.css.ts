import { style } from "@vanilla-extract/css";
import { sprinkles } from "../sprinkles/index.css";

export const dialogConfirmText = style([
	sprinkles({
		display: "inline-block",
		marginBottom: "space_2",
		fontStyle: "bodyMd",
	}),
	{
		userSelect: "none",
	},
]);
