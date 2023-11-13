import { style, styleVariants } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { a11yFocus } from "../../styles/common/a11y.css";
import {
	SELECTOR_LINK_BUTTON_INPUT_ACTIVE,
	SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS,
} from "../../styles/common/selectors.css";
import { variantColorOverlay, vars } from "../../styles/theme.css";
import { createAccessibleTransition } from "../../styles/utils/create_accessible_transition";
import { utilCss } from "../../styles/utils/util_css.css";

const pillSize = styleVariants({
	lg: [
		utilCss({
			height: "space_10",
			minWidth: "space_10",
		}),
	],
	md: [
		utilCss({
			height: "space_8",
			minWidth: "space_8",
		}),
	],
	sm: [
		utilCss({
			height: "space_6",
			minWidth: "space_6",
		}),
	],
});

export const pillBaseStyle = style({});

export const getPillStyle = recipe({
	base: [
		pillBaseStyle,
		utilCss({
			display: "inline-flex",
			fontSize: "bodySm",
			alignItems: "center",
			justifyContent: "center",
			borderRadius: "pill",
			color: "text_low_contrast",
			flexShrink: "0",
			fontWeight: "medium",
			textDecoration: "none",
			whiteSpace: "nowrap",
			paddingX: "space_2",
			paddingY: "space_1",
		}),
		{
			verticalAlign: "middle",
		},
		a11yFocus,
		createAccessibleTransition({
			transition: `border-color ${vars.transitionDuration.medium} ease, background ${vars.transitionDuration.medium} ease`,
		}),
	],

	variants: {
		appearance: {
			default: [
				utilCss({
					background: "tint_default",
				}),
				{
					border: "1px solid transparent",
					selectors: {
						[SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS]: {
							background: vars.color.tint_active,
						},
					},
				},
			],
			dotted: [
				{
					background: "transparent",
					border: `1px dashed ${vars.color.border_default}`,
					selectors: {
						[SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS]: {
							background: vars.color.tint_default,
						},
						[SELECTOR_LINK_BUTTON_INPUT_ACTIVE]: {
							background: vars.color.tint_active,
						},
					},
				},
			],
		},
		colorOverlay: variantColorOverlay,
		size: pillSize,
	},

	defaultVariants: {
		appearance: "default",
	},
});
