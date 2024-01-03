import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { a11yDisabled, variantColorOverlay } from "../../../index.css";
import { sprinkles } from "../../../v1/sprinkles/index.css";

export const textFieldGroupCSS = style([
	sprinkles({ display: "flex", alignItems: "center", gap: "space_1" }),
]);

export const textFieldCSS = recipe({
	base: [],
	variants: {
		isDisabled: {
			true: [a11yDisabled],
			false: [],
		},
		isInvalid: {
			true: [variantColorOverlay.red],
			false: [],
		},
	},
});
