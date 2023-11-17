import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { variantColorOverlay } from "../../../index.css";
import { sprinkles } from "../../../sprinkles/index.css";

export const getDialogModalAlertWrapperStyles = recipe({
	base: [
		sprinkles({
			alignItems: "center",
			background: "tint_default",
			borderBottom: "border_default",
			display: "flex",
			gap: "space_4",
			padding: "space_4",
		}),
	],
	variants: {
		colorOverlay: variantColorOverlay,
	},
});

export const dialogModalAlertSlotStyle = style([
	sprinkles({
		color: "text_low_contrast",
		flexShrink: "0",
		width: "space_4",
	}),
]);
