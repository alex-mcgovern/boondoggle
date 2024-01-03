import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../../v1/sprinkles/index.css";

export const labelCSS = style([
	sprinkles({
		display: "flex",
		alignItems: "center",
		gap: "space_1",

		color: "text_low_contrast",
		fontSize: "bodyMd",
		fontWeight: "normal",

		marginBottom: "space_1",
	}),
]);
