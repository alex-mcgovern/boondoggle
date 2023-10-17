import { style } from "@vanilla-extract/css";
import { utilCss } from "../../styles/utils/util_css.css";

export const wrapper = style([
	utilCss({
		alignItems: "center",
		borderBottom: "border_default",
		display: "flex",
		marginTop: "space_3",
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
