import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../v1/sprinkles/index.css";

export const labelCSS = recipe({
	base: [
		sprinkles({
			display: "flex",
			alignItems: "center",
			gap: "space_1",

			color: "text_high_contrast",
			fontSize: "bodyMd",
			fontWeight: "medium",

			marginBottom: "space_1",
		}),
	],
	variants: {
		isHidden: {
			true: {
				position: "absolute",
				border: 0,
				width: 1,
				height: 1,
				padding: 0,
				margin: -1,
				overflow: "hidden",
				clip: "rect(0, 0, 0, 0)",
				whiteSpace: "nowrap",
				wordWrap: "normal",
			},
			false: {},
		},
	},
});
