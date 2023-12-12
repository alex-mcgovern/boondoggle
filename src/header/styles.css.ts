import { style } from "@vanilla-extract/css";
import { sprinkles } from "../sprinkles/index.css";

export const headerCSS = style([
	sprinkles({
		height: "space_8",

		marginTop: "space_4",
		marginBottom: "space_3",

		alignItems: "center",
		display: "flex",
		gap: "space_2",
	}),
]);

export const actionsCSS = style([
	sprinkles({
		marginLeft: "auto",
		display: "flex",
		alignItems: "center",
		gap: "space_2",
	}),
]);
