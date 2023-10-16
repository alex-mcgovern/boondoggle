import { style } from "@vanilla-extract/css";

import { animateFadeIn } from "../../styles/common/animations.css";
import { variantColorOverlay } from "../../styles/theme.css";
import { utilCss } from "../../styles/utils/util_css";

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
