import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { vars } from "boondoggle/css";

export const scrollableMainCSS = recipe({
	base: {
		overflowY: "auto",
		overflowX: "hidden",
	},
	variants: {
		headers: {
			0: {
				height: vars.height.header,
			},
			1: {
				height: calc.subtract("100dvh", vars.height.header),
			},
			2: {
				height: calc.subtract(
					"100dvh",
					vars.height.header,
					vars.height.header,
				),
			},
		},
	},
});
