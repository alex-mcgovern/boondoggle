import { style } from "@vanilla-extract/css";
import { sprinkles } from "../sprinkles/index.css";

export const headerCSS = style([
	sprinkles({
		paddingY: "space_2",
		paddingX: "space_4",
		borderBottom: "border_1",
	}),
]);

export const innerCSS = style([
	sprinkles({
		alignItems: "center",
		display: "flex",
		gap: "space_2",
		minHeight: "space_8",
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
