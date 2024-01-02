import { style } from "@vanilla-extract/css";
import { sprinkles } from "../../v1/sprinkles/index.css";

export const slottedCSS = style([
	sprinkles({
		minWidth: "space_8",

		display: "flex",
		placeItems: "center",
	}),
]);
