import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { variantColorOverlay } from "../../../src/styles/color_palette.css";
import { utilCss } from "../../../src/styles/utils/util_css.css";

export const getDialogModalAlertWrapperStyles = recipe({
	base: [
		utilCss({
			alignItems: "center",
			background: "tint_default",
			borderBottom: "border_default",
			display: "flex",
			gap: "space_4",
			padding: "space_4",
		}),
	],
	variants: {
		color: variantColorOverlay,
	},
});

export const dialogModalAlertSlotStyle = style([
	utilCss({
		color: "text_low_contrast",
		flexShrink: "0",
		width: "space_4",
	}),
]);
