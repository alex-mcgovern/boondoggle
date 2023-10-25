import { style } from "@vanilla-extract/css";
import { css } from "../../src/styles/utils/util_css.css";

export const flagStyles = style([
	css({
		aspectRatio: "square",
		border: "border_default",
		borderRadius: "50%",
		flexShrink: "0",
	}),
]);
