import { style } from "@vanilla-extract/css";
import { sprinkles } from "../sprinkles/index.css";

export const flagStyles = style([
	sprinkles({
		aspectRatio: "square",
		border: "border_default",
		borderRadius: "50%",
		flexShrink: "0",
	}),
]);
