import { recipe } from "@vanilla-extract/recipes";

import { variantColorOverlay } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const pillCSS = recipe({
	base: [
		sprinkles({
			alignItems: "center",
			background: "tint_hover",

			borderRadius: "pill",
			color: "text_low_contrast",
			display: "inline-flex",

			flexShrink: "0",
			fontSize: "bodySm",
			fontWeight: "medium",
			height: "space_6",

			justifyContent: "center",
			minWidth: "space_6",

			paddingX: "space_1",
			paddingY: "space_1",

			whiteSpace: "nowrap",
		}),
	],

	variants: {
		colorOverlay: variantColorOverlay,
	},
});
