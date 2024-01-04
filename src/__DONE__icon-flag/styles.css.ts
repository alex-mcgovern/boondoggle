import { style } from "@vanilla-extract/css";
import { sprinkles } from "../__DONE__sprinkles/index.css";

export const flagStyles = style([
	sprinkles({
		aspectRatio: "square",
		boxShadow: "sm",
		borderRadius: "50%",
		flexShrink: "0",
	}),
]);
