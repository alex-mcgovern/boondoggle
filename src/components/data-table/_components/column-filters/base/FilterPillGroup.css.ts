import { recipe } from "@vanilla-extract/recipes";
import {
	createAccessibleTransition,
	utilCss,
	variantColorOverlay,
	vars,
} from "../../../../..";

export const pillGroup = recipe({
	base: [
		utilCss({
			borderRadius: "pill",
			display: "inline-flex",
			alignItems: "center",
			justifyContent: "center",
		}),
		createAccessibleTransition({
			transition: `border-color ${vars.transitionDuration.medium} ease, background ${vars.transitionDuration.medium} ease`,
		}),
	],

	variants: {
		isFiltered: {
			true: [
				utilCss({
					background: "tint_default",
				}),
				{
					border: "1px solid transparent",
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
					border: `1px dashed ${vars.color.border_default}`,
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
