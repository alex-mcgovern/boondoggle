import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { floatingMenu } from "../../../index.css";
import { sprinkles } from "../../../sprinkles/index.css";

export const menuHeaderCSS = style([
	sprinkles({
		color: "text_low_contrast",
		fontStyle: "bodyMd",
		fontWeight: "normal",
		textAlign: "left",

		display: "flex",
		alignItems: "center",
	}),
	{
		height: calc.subtract(
			floatingMenu.item.height,
			floatingMenu.container.padding,
		),
		paddingLeft: floatingMenu.item.paddingX,
		paddingRight: floatingMenu.item.paddingX,
	},
]);

export const innerCSS = style([
	sprinkles({
		overflowY: "auto",
	}),
	{
		padding: floatingMenu.container.padding,

		listStyle: "none",
		maxHeight: "15rem",
		minWidth: "10rem",

		selectors: {
			"&:empty": {
				display: "none",
			},
		},
	},
]);

export const selectItemListCSS = style({
	minWidth: "100%",
	width: "max-content",
	overflow: "hidden",
	zIndex: 9999,
});
