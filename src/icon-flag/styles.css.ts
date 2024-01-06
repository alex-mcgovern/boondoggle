import { style } from "@vanilla-extract/css";

import { sprinkles } from "../sprinkles/index.css";

export const flagStyles = style([
	sprinkles({
		aspectRatio: "square",
		borderRadius: "50%",
		boxShadow: "sm",
		flexShrink: "0",
	}),
]);
