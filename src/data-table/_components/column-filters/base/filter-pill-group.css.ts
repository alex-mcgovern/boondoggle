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
					boxShadow: "sm",
				}),
				{
					background: vars.color.button_secondary,
					border: `1px solid ${vars.color.button_secondary_border}`,
					selectors: {
						"&:not(:has(button[disabled])):hover": {
							background: vars.color.button_secondary_highlight,
							borderColor:
								vars.color.button_secondary_border_highlight,
						},
					},
				},
			],
			false: [
				{
					background: "transparent",
					border: `1px dashed ${vars.color.button_secondary_border}`,
					selectors: {
						"&:not(:has(button[disabled])):hover": {
							background: vars.color.tint_1,
							borderColor:
								vars.color.button_secondary_border_highlight,
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
