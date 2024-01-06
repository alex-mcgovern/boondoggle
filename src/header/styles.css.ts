import { style } from "@vanilla-extract/css";

import { sprinkles } from "../sprinkles/index.css";

export const headerCSS = style([
	sprinkles({
		alignItems: "center",
		display: "flex",
		gap: "space_2",

		height: "space_8",

		marginBottom: "space_2",
	}),
]);

export const actionsCSS = style([
	sprinkles({
		alignItems: "center",
		display: "flex",
		gap: "space_2",

		marginLeft: "auto",
	}),
]);
