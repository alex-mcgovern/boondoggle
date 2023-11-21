import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../../sprinkles/index.css";

export const dialogModalActionsWrapperStyle = style([
	sprinkles({
		borderTop: "border_1",
		display: "grid",
		gap: "space_2",
		marginTop: "auto",
		padding: "space_4",
	}),
]);
