import { style } from "@vanilla-extract/css";
import { sprinkles } from "../sprinkles/index.css";

export const textLinkCSS = style([
	sprinkles({
		color: "button_default",

		display: "flex",
		alignItems: "center",
		gap: "space_1",
	}),
	{
		fontSize: "inherit",
		selectors: {
			"&[data-hovered]": {
				textDecoration: "underline",
			},
		},
	},
]);
