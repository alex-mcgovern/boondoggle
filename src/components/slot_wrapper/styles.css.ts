import { styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";

import { utilCss } from "../../styles/utils/util_css";

const slotSize = styleVariants({
	lg: [utilCss({ height: "space_6", width: "space_6" })],
	md: [utilCss({ height: "space_4", width: "space_4" })],
	sm: [utilCss({ height: "space_3", width: "space_3" })],
});

export const getSlotStyles = recipe({
	base: [
		{
			pointerEvents: "none",
		},
		utilCss({
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
