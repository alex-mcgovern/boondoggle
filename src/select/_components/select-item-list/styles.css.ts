import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { floatingMenuVars } from "../../../index.css";
import { sprinkles } from "../../../sprinkles/index.css";

const groupTitleSize = styleVariants({
	lg: {
		paddingLeft: floatingMenuVars.itemPaddingXLg,
		paddingRight: floatingMenuVars.itemPaddingXLg,
	},
	md: {
		paddingLeft: floatingMenuVars.itemPaddingXMd,
		paddingRight: floatingMenuVars.itemPaddingXMd,
	},
	sm: {
		paddingLeft: floatingMenuVars.itemPaddingXSm,
		paddingRight: floatingMenuVars.itemPaddingXSm,
	},
});

export const groupTitleCSS = recipe({
	base: [
		sprinkles({
			color: "text_low_contrast",
			fontStyle: "bodySm",
			marginY: "space_2",
		}),
	],
	variants: {
		size: groupTitleSize,
	},
});

export const innerCSS = style([
	sprinkles({
		overflowY: "auto",
	}),
	{
		padding: floatingMenuVars.menuPadding,
		borderCollapse: "collapse",
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
