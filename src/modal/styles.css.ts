import { style } from "@vanilla-extract/css";
import { animateFadeIn, a11yFocus } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const modalCSS = style([
	animateFadeIn,
	a11yFocus,
	sprinkles({
		background: "background",
		border: "border_default",
		borderRadius: "md",
		boxShadow: "md",
		position: "absolute",
	}),
	{
		top: "50%",
		left: "50%",
		transform: "translate(-50%, -50%)",
		zIndex: "999",
	},
]);
