import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../sprinkles/index.css";

export const getMainStyles = recipe({
	base: [
		sprinkles({
			marginX: "auto",
			marginY: "space_4",
			paddingX: "space_4",
		}),
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
