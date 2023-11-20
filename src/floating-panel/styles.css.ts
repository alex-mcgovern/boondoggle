import { recipe } from "@vanilla-extract/recipes";
import { a11yFocus, animateFadeIn } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const floatingPanel = recipe({
	base: [
		animateFadeIn,
		a11yFocus,
		sprinkles({
			background: "background",
			border: "border_default",
			borderRadius: "md",
			boxShadow: "md",
			width: "max-content",
		}),
		{ zIndex: "999" },
	],
	variants: {
		isOpen: {
			false: { display: "none" },
			true: {},
		},
	},
});
