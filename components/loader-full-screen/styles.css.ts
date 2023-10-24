import { style } from "@vanilla-extract/css";

import { css } from "../../src/styles/utils/util_css.css";

export const loaderWrapperStyle = style([
	css({
		alignItems: "center",
		display: "flex",
		flexDirection: "column",
		gap: "space_4",
		justifyContent: "center",
		marginY: "auto",
		padding: "space_8",
		width: "100%",
	}),
	{
		flexGrow: 1,
		height: "100dvh",
		minHeight: "40vh",
	},
]);
