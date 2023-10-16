import { style } from "@vanilla-extract/css";

import { utilCss } from "../../styles/utils/util_css";

export const avatarStyle = style([
	utilCss({
		alignItems: "center",
		background: "button_active",
		border: "border_default",
		borderRadius: "50%",
		color: "white",
		display: "flex",
		flexShrink: "0",
		fontWeight: "bold",
		justifyContent: "center",
		overflow: "hidden",
	}),
	{
		fontSize: "100%",
	},
]);
