import { recipe } from "@vanilla-extract/recipes";
import { variantColorOverlay } from "../index.css";
import { sprinkles } from "../__DONE__sprinkles/index.css";

export const pillCSS = recipe({
	base: [
		sprinkles({
			background: "tint_hover",
			color: "text_low_contrast",

			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",

			fontSize: "bodySm",
			fontWeight: "medium",
			flexShrink: "0",
			whiteSpace: "nowrap",

			height: "space_6",
			minWidth: "space_6",

			paddingX: "space_1",
			paddingY: "space_1",

			borderRadius: "pill",
		}),
	],

	variants: {
		colorOverlay: variantColorOverlay,
	},
});
