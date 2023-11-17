import { style } from "@vanilla-extract/css";

import { sprinkles } from "../sprinkles/index.css";

export const topBarStyle = style([
	style([
		sprinkles({
			alignItems: "center",
			background: "tint_default",
			borderBottom: "border_default",
			display: "flex",
			gap: "space_4",
			height: "topBar",
			paddingX: "space_4",
			paddingY: "space_2",
			position: "sticky",
			top: "0",
			zIndex: "1",
		}),
	]),
]);
