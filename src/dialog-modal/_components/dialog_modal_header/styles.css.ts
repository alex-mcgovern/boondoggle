import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../../sprinkles/index.css";

export const dialogHeaderStyle = style([
	sprinkles({
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",

		maxWidth: "100%",

		paddingLeft: "space_4",
		paddingRight: "space_2",
		paddingY: "space_2",

		borderBottom: "border_rule",
	}),
]);

export const dialogTitleStyle = style([
	sprinkles({
		fontWeight: "semibold",
		marginY: "none",
		fontStyle: "bodyLg",
	}),
]);
