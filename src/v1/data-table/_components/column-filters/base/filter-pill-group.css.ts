import { recipe } from "@vanilla-extract/recipes";
import { variantColorOverlay, vars } from "../../../../../index.css";
import { withPrefersMotion } from "../../../../css-utils";
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
					background: "tint_default",
					border: "border_element_active",
				}),
				{
					// border: "1px solid transparent",
					selectors: {
						"&:not(:has(button[disabled])):hover": {
							background: vars.color.tint_active,
						},
					},
				},
			],
			false: [
				{
					background: "transparent",
					border: `1px dashed ${vars.color.border_element}`,
					selectors: {
						"&:not(:has(button[disabled])):hover": {
							background: vars.color.tint_default,
						},
						// [SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
						//     background: vars.color.tint_active,
						// },
					},
				},
			],
		},
		colorOverlay: variantColorOverlay,
	},
});
