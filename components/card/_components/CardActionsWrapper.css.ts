import { style } from "@vanilla-extract/css";
import { utilCss } from "../../../src";

export const cardActionsWrapper = style([
	utilCss({
		alignItems: "center",
		display: "flex",
		gap: "space_2",
		marginLeft: "auto",
	}),
]);
