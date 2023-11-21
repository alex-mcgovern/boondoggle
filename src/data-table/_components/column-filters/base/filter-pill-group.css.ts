import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../../../../css-utils";
import { variantColorOverlay, vars } from "../../../../index.css";
import { sprinkles } from "../../../../sprinkles/index.css";

export const pillGroupCSS = recipe({
	base: [
		sprinkles({
			borderRadius: "pill",
			display: "inline-flex",
			flexShrink: "0",
			alignItems: "center",
			justifyContent: "center",
			height: "space_8",
		}),
		withPrefersMotion({
			transition: `border-color ${vars.transitionDuration.medium} ease, background ${vars.transitionDuration.medium} ease`,
		}),
	],

	variants: {
		isFiltered: {
			true: [
				sprinkles({
					background: "tint_1",
					border: "border_3",
					boxShadow: "sm",
				}),
				{
					selectors: {
						"&:not(:has(button[disabled])):hover": {
							background: vars.color.tint_2,
						},
					},
				},
			],
			false: [
				{
					background: "transparent",
					border: `1px dashed ${vars.color.border_2}`,
					selectors: {
						"&:not(:has(button[disabled])):hover": {
							background: vars.color.tint_2,
						},
						// [SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
						//     background: vars.color.tint_4,
						// },
					},
				},
			],
		},
		colorOverlay: variantColorOverlay,
	},
});
