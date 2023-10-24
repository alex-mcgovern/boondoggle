import { style } from "@vanilla-extract/css";

import { css } from "../../../src/styles/utils/util_css.css";

export const topBarStyle = style([
	style([
		css({
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
