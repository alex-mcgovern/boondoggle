import { recipe } from "@vanilla-extract/recipes";
import { a11yFocus } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const menuButtonCSS = recipe({
	base: [
		a11yFocus,
		sprinkles({
			flexShrink: "0",
			background: "background",
			flexGrow: "1",
			// aspectRatio: "square",
			border: "border_2",

			fontStyle: "bodyMd",
			display: "flex",
			gap: "space_1",
			alignItems: "center",
			justifyContent: "center",
			color: "text_high_contrast",
			borderRadius: "md",
		}),
		{
			selectors: {
				"&:hover": {
					cursor: "default",
				},
			},
			width: "fit-content",
		},
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
