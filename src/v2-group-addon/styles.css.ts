import { sprinkles } from "../sprinkles/index.css";
import { recipe } from "@vanilla-extract/recipes";

export const groupAddonCSS = recipe({
	base: [
		sprinkles({
			flexShrink: "0",
			flexGrow: "1",
			// aspectRatio: "square",
			border: "border_default",
			background: "background",

			fontStyle: "bodyMd",
			display: "flex",
			gap: "space_1",
			alignItems: "center",
			justifyContent: "center",
			borderRadius: "md",
		}),
		{ width: "fit-content" },
	],
	defaultVariants: {
		size: "sm",
	},
	variants: {
		size: {
			lg: [
				sprinkles({
					height: "space_12",
					minWidth: "space_12",
					paddingX: "space_4",
				}),
			],
			md: [
				sprinkles({
					height: "space_10",
					minWidth: "space_10",
					paddingX: "space_3",
				}),
			],
			sm: [
				sprinkles({
					height: "space_8",
					minWidth: "space_8",
					paddingX: "space_2",
				}),
			],
		},
	},
});
