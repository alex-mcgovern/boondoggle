import { globalStyle, style, styleVariants } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import {
	elementHeight,
	elementPadding,
	elementPaddingRaw,
} from "../../src/styles/common/element_size.css";
import { btn } from "../button/styles.css";
import { disabled, focusStyleRule, motion, v } from "../../style.css";
import { css } from "../../src/styles/utils/util_css.css";
const size = styleVariants({
	lg: [elementPadding.lg, { height: elementHeight.lg }],
	md: [elementPadding.md, { height: elementHeight.md }],
	sm: [elementPadding.sm, { height: elementHeight.sm }],
});

const hasBorder = styleVariants({
	false: [{ border: "none !important", borderRadius: "0 !important" }],
	true: [],
});

export const inputSlotWrapperDoNotRemoveOrYouWillBeFired = style([]);

const hasSlotLeft = styleVariants({ false: {}, true: {} });
const hasSlotRight = styleVariants({ false: {}, true: {} });

export const getSlotWrapperStyles = recipe({
	base: [
		inputSlotWrapperDoNotRemoveOrYouWillBeFired,
		css({
			alignItems: "center",
			background: "background",
			border: "border_default",
			borderRadius: "md",
			color: "text_low_contrast",
			display: "flex",
			fontWeight: "regular",
			gap: "space_2",
			position: "relative",
			width: "100%",
		}),
		disabled,
		{
			cursor: "text",
			// gridTemplateColumns: `repeat(auto-fit, minmax(${v.spacing.space_5}, auto))`,
			...motion({
				transition: `ease ${v.duration.short} ease`,
				transitionProperty: "color, background-color, border-color",
			}),
			selectors: {
				"&:has(input[readonly])": {
					background: v.color.tint_default,
				},
				"&:hover": {
					borderColor: v.color.border_hover,
				},
				"&:active": {
					borderColor: v.color.border_active,
				},
				"&:has(input:focus-visible)": {
					...focusStyleRule,
				},
			},
		},
	],
	compoundVariants: [
		// Offset padding left for left slot

		{
			style: [
				{
					paddingLeft: calc.subtract(
						elementPaddingRaw.sm.x,
						v.spacing.space_1,
					),
				},
			],
			variants: { hasSlotLeft: true, size: "sm" },
		},
		{
			style: [
				{
					paddingLeft: calc.subtract(
						elementPaddingRaw.md.x,
						v.spacing.space_1,
					),
				},
			],
			variants: { hasSlotLeft: true, size: "md" },
		},
		{
			style: [
				{
					paddingLeft: calc.subtract(
						elementPaddingRaw.lg.x,
						v.spacing.space_1,
					),
				},
			],
			variants: { hasSlotLeft: true, size: "lg" },
		},

		// Offset padding right for right slot

		{
			style: [
				{
					paddingRight: calc.subtract(
						elementPaddingRaw.sm.x,
						v.spacing.space_1,
					),
				},
			],
			variants: { hasSlotRight: true, size: "sm" },
		},
		{
			style: [
				{
					paddingRight: calc.subtract(
						elementPaddingRaw.md.x,
						v.spacing.space_1,
					),
				},
			],
			variants: { hasSlotRight: true, size: "md" },
		},
		{
			style: [
				{
					paddingRight: calc.subtract(
						elementPaddingRaw.lg.x,
						v.spacing.space_1,
					),
				},
			],
			variants: { hasSlotRight: true, size: "lg" },
		},
	],
	defaultVariants: {
		hasBorder: true,
		hasSlotLeft: false,
		hasSlotRight: false,
		size: "md",
	},
	variants: {
		hasBorder,
		hasSlotLeft,
		hasSlotRight,
		size,
	},
});

globalStyle(
	`${inputSlotWrapperDoNotRemoveOrYouWillBeFired} > *:not(input):not(:empty)`,
	{
		alignItems: "center",
		display: "flex",
		justifyContent: "center",
		minHeight: v.spacing.space_4,
		minWidth: v.spacing.space_4,
	},
);

export const clearButtonStyle = style({});

globalStyle(
	`${inputSlotWrapperDoNotRemoveOrYouWillBeFired}:has(input:placeholder-shown) > ${clearButtonStyle}`,
	{
		display: "none",
	},
);

export const inputStyles = style([
	css({
		flexGrow: "1",
		fontStyle: "bodyMd",
		height: "space_6",
		margin: "none",
		padding: "none",
		width: "100%",
	}),
	disabled,
	{
		background: "transparent",
		border: "none",
		selectors: {
			"&:focus": {
				outline: "none",
			},
			"&:focus-visible": {
				outline: "none",
			},
		},
	},
]);

const tabSide = styleVariants({
	left: {
		borderBottomLeftRadius: v.radius.md,
		borderTopLeftRadius: v.radius.md,
	},
	right: {
		borderBottomRightRadius: v.radius.md,
		borderTopRightRadius: v.radius.md,
	},
});

const addonHasBorder = styleVariants({
	false: {},
	true: {},
});

globalStyle(
	`${tabSide.left} ${inputSlotWrapperDoNotRemoveOrYouWillBeFired},\
     ${tabSide.left} ${btn}`,
	{
		borderBottomRightRadius: "0",
		borderRight: "none",
		borderTopRightRadius: "0",
	},
);

globalStyle(
	`${tabSide.right} ${inputSlotWrapperDoNotRemoveOrYouWillBeFired},\
     ${tabSide.right} ${btn}`,
	{
		borderBottomLeftRadius: "0",
		borderLeft: "none",
		borderTopLeftRadius: "0",
	},
);

const tabSize = styleVariants({
	lg: [{ height: elementHeight.lg }],
	md: [{ height: elementHeight.md }],
	sm: [{ height: elementHeight.sm }],
});

export const getInputAddonTabStyle = recipe({
	base: [
		css({
			alignItems: "center",
			background: "tint_default",
			color: "text_low_contrast",
			display: "flex",
			fontStyle: "bodyMd",
			fontWeight: "medium",
		}),
		{
			selectors: {
				"&:has(:focus-visible)": {
					...focusStyleRule,
				},
			},
		},
	],
	compoundVariants: [
		{
			style: [
				{
					borderBottom: `1px solid ${v.color.border_default}`,
					borderBottomLeftRadius: v.radius.md,
					borderLeft: `1px solid ${v.color.border_default}`,
					borderTop: `1px solid ${v.color.border_default}`,
					borderTopLeftRadius: v.radius.md,
				},
			],
			variants: { hasBorder: true, side: "left" },
		},
		{
			style: [
				{
					borderBottom: `1px solid ${v.color.border_default}`,
					borderBottomRightRadius: v.radius.md,
					borderRight: `1px solid ${v.color.border_default}`,
					borderTop: `1px solid ${v.color.border_default}`,
					borderTopRightRadius: v.radius.md,
				},
			],
			variants: { hasBorder: true, side: "right" },
		},
	],
	defaultVariants: {
		side: "left",
		size: "md",
	},
	variants: {
		hasBorder: addonHasBorder,
		padding: elementPadding,
		side: tabSide,
		size: tabSize,
	},
});

const hasAddonLeft = styleVariants({
	false: {},
	true: {},
});

const hasAddonRight = styleVariants({
	false: {},
	true: {},
});

export const getAddonWrapperStyle = recipe({
	base: [
		css({
			alignItems: "center",
			display: "flex",
			width: "100%",
		}),
	],
	variants: {
		hasAddonLeft,
		hasAddonRight,
	},
});

export const addonChildrenStyle = style({
	flexGrow: 1,
	flexShrink: 0,
	// width: "100%",
});

globalStyle(
	`${hasAddonLeft.true} > ${addonChildrenStyle} ${inputSlotWrapperDoNotRemoveOrYouWillBeFired}`,
	{
		borderBottomLeftRadius: "0 !important",
		borderTopLeftRadius: "0 !important",
	},
);

globalStyle(
	`${hasAddonRight.true} > ${addonChildrenStyle} ${inputSlotWrapperDoNotRemoveOrYouWillBeFired}`,
	{
		borderBottomRightRadius: "0 !important",
		borderTopRightRadius: "0 !important",
	},
);
