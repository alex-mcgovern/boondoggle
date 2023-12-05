import { style } from "@vanilla-extract/css";
import { sprinkles } from "../sprinkles/index.css";

/** -----------------------------------------------------------------------------
 * TABLE CELLS
 * ------------------------------------------------------------------------------- */

const commonCellCSS = style([
	sprinkles({
		borderBottom: "border_default",
		paddingY: "space_2",
		paddingX: "space_4",

		display: "flex",
		alignItems: "center",
		justifyContent: "start",

		fontStyle: "bodyMd",
	}),
	{
		minWidth: "0", // Ensure that children with class `overflowEllipsis` work correctly
	},
]);

export const tableCellCSS = style([
	commonCellCSS,
	sprinkles({
		minHeight: "space_8",
	}),
]);

export const tableHeaderCellCSS = style([
	commonCellCSS,
	sprinkles({
		height: "space_8",
	}),
]);
