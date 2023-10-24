import { recipe } from "@vanilla-extract/recipes";
import { css } from "../../src/styles/utils/util_css.css";
import { focus, disabled, motion, v, theme } from "../../style.css";

export const btn = recipe({
	base: [
		css({
			alignItems: "center",
			borderRadius: "md",
			display: "inline-flex",
			gap: "space_2",
			textDecoration: "none",
			whiteSpace: "nowrap",
			fontWeight: "medium",
		}),
		focus,
		disabled,
		motion({
			transition: `all ${v.duration.short} ease`,
		}),
	],
	variants: {
		alignment: {
			center: [
				css({
					justifyContent: "center",
					textAlign: "center",
				}),
			],
			left: [
				css({
					justifyContent: "start",
					textAlign: "left",
				}),
			],
		},
		variant: {
			primary: [
				css({
					background: "btn_default",
					color: "white",
				}),
				{
					selectors: {
						// Hover state
						"&:not(:is([disabled],[aria-disabled='true'])):hover": {
							background: v.color.btn_hover,
							color: v.color.white,
						},
						// Active state
						"&:not(:is([disabled],[aria-disabled='true'])):is(:active,[data-active='true'])":
							{
								background: v.color.btn_active,
							},
					},
				},
			],

			secondary: [
				css({
					border: "border_default",
					color: "text_high_contrast",
				}),
				{
					selectors: {
						// Hover state
						"&:not(:is([disabled],[aria-disabled='true'])):hover": {
							background: v.color.tint_hover,
							borderColor: v.color.border_hover,
						},
						// Active state
						"&:not(:is([disabled],[aria-disabled='true'])):is(:active,[data-active='true'])":
							{
								background: v.color.tint_active,
								borderColor: v.color.border_active,
							},
					},
				},
			],

			ghost: [
				css({
					color: "text_high_contrast",
				}),
				{
					selectors: {
						// Hover state
						"&:not(:is([disabled],[aria-disabled='true'])):hover": {
							background: v.color.tint_hover,
						},
						// Active state
						"&:not(:is([disabled],[aria-disabled='true'])):is(:active,[data-active='true'])":
							{
								background: v.color.tint_active,
							},
					},
				},
			],
		},

		size: {
			lg: [
				css({
					height: "space_12",
					paddingX: "space_6",
					paddingY: "space_3",
					fontStyle: "bodyMd",
				}),
			],
			md: [
				css({
					height: "space_10",
					paddingX: "space_4",
					paddingY: "space_2",
					fontStyle: "bodyMd",
				}),
			],
			sm: [
				css({
					height: "space_8",
					paddingX: "space_2",
					paddingY: "space_1",
					fontStyle: "bodyMd",
				}),
			],
			square_md: [
				css({
					aspectRatio: "square",
					flexShrink: "0",
					fontStyle: "bodyMd",
					height: "space_10",
					width: "space_10",
				}),
			],
			square_sm: [
				css({
					aspectRatio: "square",
					flexShrink: "0",
					fontStyle: "bodySm",
					height: "space_8",
					width: "space_8",
				}),
			],
			square_xs: [
				css({
					aspectRatio: "square",
					flexShrink: "0",
					fontStyle: "bodySm",
					height: "space_6",
					width: "space_6",
				}),
			],
		},
		color: theme,
	},
	defaultVariants: {
		alignment: "center",
		variant: "primary",
		size: "md",
	},
});
