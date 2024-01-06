import { recipe } from "@vanilla-extract/recipes";

import { sprinkles } from "../sprinkles/index.css";

export const mainCSS = recipe({
	base: [
		sprinkles({
			marginX: "auto",
			paddingX: "space_4",
		}),
		{
			scrollbarGutter: "stable",
		},
	],
	defaultVariants: {
		size: "lg",
	},
	variants: {
		size: {
			lg: [sprinkles({ maxWidth: "main_lg" })],
			md: [sprinkles({ maxWidth: "main_md" })],
			sm: [sprinkles({ maxWidth: "main_sm" })],
		},
	},
});
