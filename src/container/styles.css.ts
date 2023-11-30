import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../sprinkles/index.css";

export const containerCSS = recipe({
	base: [
		sprinkles({
			// marginX: "auto",
			marginTop: "space_2",
			marginBottom: "space_8",
			// paddingX: "space_4",
		}),
	],
	defaultVariants: {
		size: "lg",
	},
	variants: {
		size: {
			lg: [
				sprinkles({
					// maxWidth: "container_lg"
				}),
			],
			md: [
				sprinkles({
					marginX: "auto",
					maxWidth: "main_md",
				}),
			],
			sm: [
				sprinkles({
					marginX: "auto",
					maxWidth: "main_sm",
				}),
			],
		},
	},
});
