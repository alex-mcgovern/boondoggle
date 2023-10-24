import { style } from "@vanilla-extract/css";
import { css } from "../../../src/styles/utils/util_css.css";

export const cardActionsWrapper = style([
	css({
		alignItems: "center",
		display: "flex",
		gap: "space_2",
		marginLeft: "auto",
	}),
]);
