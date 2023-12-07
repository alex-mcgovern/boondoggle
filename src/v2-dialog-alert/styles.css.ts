import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { variantColorOverlay } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const dialogAlertWrapperCSS = recipe({
	base: [
		sprinkles({
			display: "flex",
			alignItems: "start",

			background: "tint_default",
			border: "border_default",
			gap: "space_2",

			paddingX: "space_4",
			paddingY: "space_2",

			zIndex: "1",
		}),
		{
			marginTop: "-1px",
			marginLeft: "-1px",
			marginRight: "-1px",
		},
	],
	variants: {
		colorOverlay: variantColorOverlay,
	},
});

export const dialogAlertSlotCSS = style([
	sprinkles({
		color: "text_low_contrast",
		flexShrink: "0",
		marginY: "space_1",
		width: "space_4",
	}),
]);
