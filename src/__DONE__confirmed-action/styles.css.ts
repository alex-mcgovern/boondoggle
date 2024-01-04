import { style } from "@vanilla-extract/css";
import { sprinkles } from "../__DONE__sprinkles/index.css";

export const confirmTextCSS = style([
	sprinkles({
		display: "inline-block",
		marginBottom: "space_2",
		fontSize: "bodyMd",
		lineHeight: "bodySm",
	}),
	{
		userSelect: "none",
	},
]);
