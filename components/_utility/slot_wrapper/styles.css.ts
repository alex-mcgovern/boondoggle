import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { css } from "../../../src/styles/utils/util_css.css";

const slotSize = styleVariants({
	lg: [css({ height: "space_6", width: "space_6" })],
	md: [css({ height: "space_4", width: "space_4" })],
	sm: [css({ height: "space_3", width: "space_3" })],
});

export const getSlotStyles = recipe({
	base: [
		{
			pointerEvents: "none",
		},
		css({
			alignItems: "center",
			color: "text_low_contrast",
			display: "flex",
			justifyContent: "center",
		}),
	],
	variants: {
		size: slotSize,
	},
});
