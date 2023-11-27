import { recipe } from "@vanilla-extract/recipes";
import { elementHeight } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const skeletonInputCSS = recipe({
	base: [sprinkles({ borderRadius: "md" })],
	variants: {
		size: {
			lg: { height: elementHeight.lg },
			md: { height: elementHeight.md },
			sm: { height: elementHeight.sm },
		},
	},
});
