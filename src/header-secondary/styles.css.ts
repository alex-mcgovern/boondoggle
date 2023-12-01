import { style } from "@vanilla-extract/css";
import { vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const headerSecondaryCSS = style([
	sprinkles({
		height: "header",
		paddingY: "space_2",
		paddingX: "space_4",

		borderBottom: "border_1",
		background: "background",

		position: "sticky",
	}),
	{
		top: vars.height.header,
	},
]);
