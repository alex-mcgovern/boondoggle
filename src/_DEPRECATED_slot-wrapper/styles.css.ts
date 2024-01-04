import { style } from "@vanilla-extract/css";
import { sprinkles } from "../__DONE__sprinkles/index.css";

export const slotCSS = style([
	{
		pointerEvents: "none",
	},
	sprinkles({
		alignItems: "center",
		color: "text_low_contrast",
		display: "flex",
		justifyContent: "center",
		minWidth: "space_4",
	}),
]);
