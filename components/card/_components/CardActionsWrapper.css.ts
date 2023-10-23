import { style } from "@vanilla-extract/css";
import { utilCss } from "../../../src/styles/utils/util_css.css";

export const cardActionsWrapper = style([
	utilCss({
		alignItems: "center",
		display: "flex",
		gap: "space_2",
		marginLeft: "auto",
	}),
]);
