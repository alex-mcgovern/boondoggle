import { style } from "@vanilla-extract/css";
import { css } from "../../src/styles/utils/util_css.css";
import { theme, animateFadeIn } from "../../style.css";

export const tooltipTextStyle = style([
	theme.grey,
	animateFadeIn,
	css({
		background: "black",
		borderRadius: "md",
		color: "white",
		fontStyle: "bodySm",
		fontWeight: "regular",
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
