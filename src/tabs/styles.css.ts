import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const tabCSS = recipe({
	base: [
		sprinkles({
			flexShrink: "0",
			paddingBottom: "space_1",
		}),
	],
	defaultVariants: {
		active: false,
	},
	variants: {
		isTabFullWidth: {
			true: [
				sprinkles({
					flexGrow: "1",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
				}),
			],
			false: [],
		},
		active: {
			false: [
				{
					borderBottom: `${vars.spacing["space_0.5"]} solid transparent`,
				},
			],
			true: [
				{
					borderBottom: `${vars.spacing["space_0.5"]} solid ${vars.color.button_default}`,
				},
			],
		},
	},
});

export const tabsSectionCss = recipe({
	base: [
		sprinkles({
			marginY: "space_2",
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

export const tabListCSS = style([
	sprinkles({
		alignItems: "center",
		borderBottom: "border_default",
		display: "flex",
	}),
	{
		msOverflowStyle: "none",
		overflowX: "scroll",
		scrollbarGutter: "none",
		scrollbarWidth: "none",
		selectors: {
			"&::-webkit-scrollbar": {
				display: "none",
			},
		},
	},
]);
