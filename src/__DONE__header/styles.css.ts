import { style } from "@vanilla-extract/css";
import { sprinkles } from "../__DONE__sprinkles/index.css";

export const headerCSS = style([
	sprinkles({
		display: "flex",
		alignItems: "center",
		gap: "space_2",

		height: "space_8",

		marginBottom: "space_2",
	}),
]);

export const actionsCSS = style([
	sprinkles({
		display: "flex",
		alignItems: "center",
		gap: "space_2",

		marginLeft: "auto",
	}),
]);
