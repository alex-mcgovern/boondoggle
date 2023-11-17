import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../../../sprinkles/index.css";

export const activeFilterStringCSS = style([
	sprinkles({ display: "inline-block" }),
	{
		maxWidth: "5rem",
		whiteSpace: "nowrap",
		overflow: "hidden",
		textOverflow: "ellipsis",
	},
]);

export const selectItemListCSS = style([
	sprinkles({
		paddingX: "space_4",
	}),
	{
		maxHeight: "12.5rem",
		overflowY: "auto",
	},
]);
