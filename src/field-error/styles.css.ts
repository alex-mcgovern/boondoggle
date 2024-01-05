import { style } from "@vanilla-extract/css";
import { variantColorOverlay } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const fieldErrorCss = style([
	variantColorOverlay.red,
	sprinkles({
		display: "flex",
		alignItems: "center",
		gap: "space_1",

		color: "text_low_contrast",
		fontStyle: "bodySm",

		marginY: "space_1",
	}),
]);
