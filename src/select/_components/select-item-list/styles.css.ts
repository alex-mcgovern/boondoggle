import { style } from "@vanilla-extract/css";
import { floatingMenu } from "../../../index.css";
import { sprinkles } from "../../../sprinkles/index.css";

export const menuHeaderCSS = style([
	sprinkles({
		height: "space_6",

		color: "text_low_contrast",
		fontStyle: "bodyMd",
		fontWeight: "normal",
		textAlign: "left",
	}),
	{
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
