import { style } from "@vanilla-extract/css";

import { css } from "../../../src/styles/utils/util_css.css";

export const dialogModalActionsWrapperStyle = style([
	css({
		borderTop: "border_default",
		display: "grid",
		gap: "space_2",
		marginTop: "auto",
		padding: "space_4",
	}),
]);
