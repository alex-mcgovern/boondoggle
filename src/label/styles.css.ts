import { style } from "@vanilla-extract/css";
import { sprinkles } from "../sprinkles/index.css";

export const labelCSS = style([
	sprinkles({
		display: "flex",
		alignItems: "center",
		gap: "space_1",

		color: "text_high_contrast",
		fontSize: "bodyMd",
		fontWeight: "medium",

		marginBottom: "space_1",
	}),
]);
