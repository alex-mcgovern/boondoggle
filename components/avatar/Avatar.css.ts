import { recipe } from "@vanilla-extract/recipes";
import { v } from "../../style.css";
import { css } from "../../src/styles/utils/util_css.css";

export const avatar = recipe({
	base: [
		css({
			alignItems: "center",
			background: "btn_tint",
			color: "btn_default",
			display: "flex",
			flexShrink: "0",
			fontWeight: "medium",
			justifyContent: "center",
			overflow: "hidden",
		}),
		{
			fontSize: `max(${v.fontSize.bodySm}, 100%)`,
		},
	],
	variants: {
		variant: {
			circle: [css({ borderRadius: "50%" })],
			square: [css({ borderRadius: "md" })],
		},
	},
});
