import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { css } from "../../../src/styles/utils/util_css.css";
import { theme } from "../../../style.css";

export const getDialogModalAlertWrapperStyles = recipe({
	base: [
		css({
			alignItems: "center",
			background: "tint_default",
			borderBottom: "border_default",
			display: "flex",
			gap: "space_4",
			padding: "space_4",
		}),
	],
	variants: {
		theme,
	},
});

export const dialogModalAlertSlotStyle = style([
	css({
		color: "text_low_contrast",
		flexShrink: "0",
		width: "space_4",
	}),
]);
