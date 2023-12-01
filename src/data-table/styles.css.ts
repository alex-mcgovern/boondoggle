import { style } from "@vanilla-extract/css";
import { sprinkles } from "../sprinkles/index.css";

export const tableCellCSS = style([
	sprinkles({
		borderBottom: "border_1",
		paddingY: "space_1",
		paddingX: "space_4",
		display: "flex",
		alignItems: "center",
		justifyContent: "start",
		fontStyle: "bodyMd",
		whiteSpace: "nowrap",
		overflow: "hidden",
	}),
	{
		textOverflow: "ellipsis",
	},
]);
