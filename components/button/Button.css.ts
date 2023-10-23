import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import { a11yDisabled, a11yFocus } from "../../src/styles/common/a11y.css";
import { variantColorOverlay, vars } from "../../src/styles/theme.css";
import { createAccessibleTransition } from "../../src/styles/utils/create_accessible_transition";
import { utilCss } from "../../src/styles/utils/util_css.css";

export const buttonBaseClsDoNotRemoveOrYouWillBeFired = style({});

export const getButtonStyles = recipe({
	base: [
		utilCss({
			alignItems: "center",
			borderRadius: "md",
			display: "inline-flex",
			gap: "space_2",
			textDecoration: "none",
			whiteSpace: "nowrap",
			fontWeight: "medium",
		}),
		buttonBaseClsDoNotRemoveOrYouWillBeFired,
		a11yFocus,
		a11yDisabled,
		createAccessibleTransition({
			transition: `all ${vars.transitionDuration.short} ease`,
		}),
	],
	variants: {
		alignment: {
			center: [
				utilCss({
					justifyContent: "center",
					textAlign: "center",
				}),
			],
			left: [
				utilCss({
					justifyContent: "start",
					textAlign: "left",
				}),
			],
		},
		variant: {
			primary: [
				utilCss({
					background: "button_default",
					color: "white",
				}),
				{
					selectors: {
						// Hover state
						"&:not(:is([disabled],[aria-disabled='true'])):hover": {
							background: vars.color.button_hover,
							color: vars.color.white,
						},
						// Active state
						"&:not(:is([disabled],[aria-disabled='true'])):is(:active,[data-active='true'])":
							{
								background: vars.color.button_active,
							},
					},
				},
			],

			secondary: [
				utilCss({
					border: "border_default",
					color: "text_high_contrast",
				}),
				{
					selectors: {
						// Hover state
						"&:not(:is([disabled],[aria-disabled='true'])):hover": {
							background: vars.color.tint_hover,
							borderColor: vars.color.border_hover,
						},
						// Active state
						"&:not(:is([disabled],[aria-disabled='true'])):is(:active,[data-active='true'])":
							{
								background: vars.color.tint_active,
								borderColor: vars.color.border_active,
							},
					},
				},
			],

			ghost: [
				utilCss({
					color: "text_high_contrast",
				}),
				{
					selectors: {
						// Hover state
						"&:not(:is([disabled],[aria-disabled='true'])):hover": {
							background: vars.color.tint_hover,
						},
						// Active state
						"&:not(:is([disabled],[aria-disabled='true'])):is(:active,[data-active='true'])":
							{
								background: vars.color.tint_active,
							},
					},
				},
			],
		},

		size: {
			lg: [
				utilCss({
					height: "space_12",
					paddingX: "space_6",
					paddingY: "space_3",
					fontStyle: "bodyMd",
				}),
			],
			md: [
				utilCss({
					height: "space_10",
					paddingX: "space_4",
					paddingY: "space_2",
					fontStyle: "bodyMd",
				}),
			],
			sm: [
				utilCss({
					height: "space_8",
					paddingX: "space_2",
					paddingY: "space_1",
					fontStyle: "bodyMd",
				}),
			],
			square_md: [
				utilCss({
					aspectRatio: "square",
					flexShrink: "0",
					fontStyle: "bodyMd",
					height: "space_10",
					width: "space_10",
				}),
			],
			square_sm: [
				utilCss({
					aspectRatio: "square",
					flexShrink: "0",
					fontStyle: "bodySm",
					height: "space_8",
					width: "space_8",
				}),
			],
			square_xs: [
				utilCss({
					aspectRatio: "square",
					flexShrink: "0",
					fontStyle: "bodySm",
					height: "space_6",
					width: "space_6",
				}),
			],
		},
		color: variantColorOverlay,
	},
	defaultVariants: {
		alignment: "center",
		variant: "primary",
		size: "md",
	},
});
