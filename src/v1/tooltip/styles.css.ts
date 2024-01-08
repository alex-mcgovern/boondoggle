import { style } from "@vanilla-extract/css";
import { animateFadeIn, variantColorOverlay } from "../../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const tooltipTextStyle = style([
	variantColorOverlay.grey,
	animateFadeIn,
	sprinkles({
		background: "black",
		color: "white",

		borderRadius: "md",

		fontStyle: "bodySm",
		fontWeight: "normal",
		textAlign: "center",
		whiteSpace: "normal",

		padding: "space_2",
		width: "max-content",
		overflow: "hidden",
	}),
	{
		maxWidth: "12rem",
	},
]);
