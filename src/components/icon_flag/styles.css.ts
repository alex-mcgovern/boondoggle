import { style } from "@vanilla-extract/css";

import { utilCss } from "../../styles/utils/util_css.css";

export const flagStyles = style([
	utilCss({
		aspectRatio: "square",
		border: "border_default",
		borderRadius: "50%",
		flexShrink: "0",
	}),
]);
