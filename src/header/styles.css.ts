import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../sprinkles/index.css";

export const headerCSS = recipe({
	base: [
		sprinkles({
			// marginY: "space_4",
			paddingTop: "space_4",
			marginBottom: "space_2",
			// marginX: "auto",
			paddingX: "space_4",
		}),
	],
	defaultVariants: {
		size: "lg",
	},
	variants: {
		size: {
			lg: [
				sprinkles({
					// maxWidth: "main_lg"
				}),
			],
			md: [
				sprinkles({
					// maxWidth: "main_md"
				}),
			],
			sm: [
				sprinkles({
					// maxWidth: "main_sm"
				}),
			],
		},
	},
});

export const innerCSS = style([
	sprinkles({
		alignItems: "center",
		display: "flex",
		gap: "space_2",
		minHeight: "space_8",
	}),
]);

export const actionsCSS = style([
	sprinkles({
		marginLeft: "auto",
		display: "flex",
		alignItems: "center",
		gap: "space_2",
	}),
]);
