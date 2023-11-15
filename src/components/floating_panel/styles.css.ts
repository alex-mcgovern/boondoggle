import { recipe } from "@vanilla-extract/recipes";
import { a11yFocus } from "../../styles/common/a11y.css";
import { utilCss } from "../../styles/utils/util_css.css";

export const floatingPanel = recipe({
	base: [
		a11yFocus,
		utilCss({
			background: "background",
			border: "border_default",
			borderRadius: "md",
			boxShadow: "md",
			// minWidth: "100%",
			// overflow: "hidden",
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
