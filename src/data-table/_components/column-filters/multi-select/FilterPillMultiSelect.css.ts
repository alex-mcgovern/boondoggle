import { style } from "@vanilla-extract/css";
import { utilCss } from "../../../../index.css";

export const activeFilterString = style([
	utilCss({ display: "inline-block" }),
	{
		maxWidth: "5rem",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},
]);

export const selectItemList = style([
	utilCss({
		paddingX: "space_4",
	}),
	{
		maxHeight: "12.5rem",
		overflowY: "auto",
	},
]);