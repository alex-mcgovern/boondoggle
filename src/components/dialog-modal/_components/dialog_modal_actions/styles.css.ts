import { style } from "@vanilla-extract/css";
import { utilCss } from "../../../../index.css";

export const dialogModalActionsWrapperStyle = style([
	utilCss({
		borderTop: "border_default",
		display: "grid",
		gap: "space_2",
		marginTop: "auto",
		padding: "space_4",
	}),
]);
