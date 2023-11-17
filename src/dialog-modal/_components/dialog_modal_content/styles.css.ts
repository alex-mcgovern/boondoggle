import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { sprinkles } from "../../../sprinkles/index.css";

export const dialogContentOuterStyle = style([
	sprinkles({
		maxWidth: "100%",
		overflowY: "auto",
		width: "100%",
	}),
	{
		overflowX: "hidden",
	},
]);

export const getDialogContentInnerStyle = recipe({
	base: [
		sprinkles({
			height: "100%",
		}),
		{
			transition: "max-height 100ms ease",
		},
	],
	defaultVariants: {
		hasPadding: true,
	},
	variants: {
		hasPadding: {
			false: {},
			true: [sprinkles({ padding: "space_4" })],
		},
	},
});
