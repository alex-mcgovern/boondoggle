import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../sprinkles/index.css";

export const headerCSS = recipe({
	base: [
		sprinkles({
			marginTop: "space_4",
			marginBottom: "space_2",
			marginX: "auto",
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

export const innerCSS = recipe({
	base: [
		sprinkles({
			alignItems: "center",
			display: "flex",
			gap: "space_4",
			minHeight: "space_12",
		}),
	],
	defaultVariants: {
		hasTabs: false,
	},
	variants: {
		hasTabs: {
			false: [
				sprinkles({
					// paddingBottom: "space_2",
					// borderBottom: "border_default",
				}),
			],
			true: [],
		},
	},
});

export const actionsCSS = style([
	sprinkles({
		marginLeft: "auto",
		display: "flex",
		alignItems: "center",
		gap: "space_2",
	}),
]);
