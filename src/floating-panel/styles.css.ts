import { recipe } from "@vanilla-extract/recipes";
import { a11yFocus, animateFadeIn } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const floatingPanel = recipe({
	base: [
		animateFadeIn,
		a11yFocus,
		sprinkles({
			background: "background_raised",
			border: "border_1",
			borderRadius: "md",
			boxShadow: "md",
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
