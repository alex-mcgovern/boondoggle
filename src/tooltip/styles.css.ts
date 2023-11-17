import { style } from "@vanilla-extract/css";
import { animateFadeIn, utilCss, variantColorOverlay } from "../index.css";

export const tooltipTextStyle = style([
	variantColorOverlay.grey,
	animateFadeIn,
	utilCss({
		background: "black",
		borderRadius: "md",
		color: "white",
		fontStyle: "bodySm",
		fontWeight: "normal",
		overflow: "hidden",
		padding: "space_2",
		textAlign: "center",
		whiteSpace: "normal",
		width: "max-content",
	}),
	{
		maxWidth: "12rem",
		zIndex: "99999",
	},
]);
