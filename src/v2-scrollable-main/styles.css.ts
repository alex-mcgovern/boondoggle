import { createContainer, style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";
import { recipe } from "@vanilla-extract/recipes";
import { withPrefersMotion } from "../css-utils";
import { vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

const scrollableContainer = createContainer();

export const nonScrollableWrapperCSS = style({
	height: "100dvh",
	overflow: "hidden",
});

export const scrollableMainCSS = recipe({
	base: [
		sprinkles({
			overflowY: "auto",
			overflowX: "hidden",
			height: "100dvh",
			width: "100%",
		}),
		{
			containerName: scrollableContainer,
			containerType: "inline-size",
			scrollbarGutter: "stable",
		},
	],
	defaultVariants: {
		headers: "1",
	},
	variants: {
		headers: {
			"0": {
				height: "100dvh",
			},
			"1": {
				height: calc.subtract("100dvh", vars.height.topBar),
			},
			"2": {
				height: calc.subtract(
					"100dvh",
					vars.height.topBar,
					vars.height.topBar,
				),
			},
		},
	},
});

const positive = (value: string) => {
	return `max(${value}, 0px)`;
};

const calcNonOffsetMargin = (contentWidth: string) => {
	return positive(calc.subtract("50vw", calc.divide(contentWidth, 2)));
};

const calcOffsetForSidebarLeft = (contentWidth: string) => {
	return positive(
		calc.subtract("50vw", calc.divide(contentWidth, 2), vars.width.sideBar),
	);
};

const calcOffsetForSidebarRight = (contentWidth: string) => {
	return positive(calc.subtract("50vw", calc.divide(contentWidth, 2)));
};

export const scrollableMainInnerCSS = recipe({
	base: [
		sprinkles({
			position: "relative",
			marginX: "auto",
			width: "100%",
			maxWidth: "main_lg",
			padding: "space_4",
		}),
		withPrefersMotion({
			// transitionProperty: "margin, max-width",
			// transitionDuration: vars.transitionDuration.sideBarShowHide,
			// transitionTimingFunction: vars.ease.quart_in_out,
		}),
	],
	defaultVariants: {
		isSidebarOpen: true,
		size: "lg",
	},
	compoundVariants: [
		/**
		 * Size lg
		 */

		{
			variants: {
				size: "lg",
				isSidebarOpen: true,
			},
			style: [
				{
					marginLeft: calcOffsetForSidebarLeft(vars.width.main_lg),
					marginRight: calcOffsetForSidebarRight(vars.width.main_lg),
				},
			],
		},
		{
			variants: {
				size: "lg",
				isSidebarOpen: false,
			},
			style: [
				{
					marginLeft: calcNonOffsetMargin(vars.width.main_lg),
					marginRight: calcNonOffsetMargin(vars.width.main_lg),
				},
			],
		},

		/**
		 * Size md
		 */

		{
			variants: {
				size: "md",
				isSidebarOpen: true,
			},
			style: [
				{
					marginLeft: calcOffsetForSidebarLeft(vars.width.main_md),
					marginRight: calcOffsetForSidebarRight(vars.width.main_md),
				},
			],
		},
		{
			variants: {
				size: "md",
				isSidebarOpen: false,
			},
			style: [
				{
					marginLeft: calcNonOffsetMargin(vars.width.main_md),
					marginRight: calcNonOffsetMargin(vars.width.main_md),
				},
			],
		},

		/**
		 * Size sm
		 */

		{
			variants: {
				size: "sm",
				isSidebarOpen: true,
			},
			style: [
				{
					marginLeft: calcOffsetForSidebarLeft(vars.width.main_sm),
					marginRight: calcOffsetForSidebarRight(vars.width.main_sm),
				},
			],
		},
		{
			variants: {
				size: "sm",
				isSidebarOpen: false,
			},
			style: [
				{
					marginLeft: calcNonOffsetMargin(vars.width.main_sm),
					marginRight: calcNonOffsetMargin(vars.width.main_sm),
				},
			],
		},
	],
	variants: {
		isSidebarOpen: {
			true: [
				// withPrefersMotion({
				// 	transitionProperty: "margin",
				// 	transitionDuration: vars.transitionDuration.sideBarShowHide,
				// 	transitionTimingFunction: vars.ease.quart_in_out,
				// }),
			],
			false: [],
		},
		size: {
			lg: [sprinkles({ maxWidth: "main_lg" })],
			md: [sprinkles({ maxWidth: "main_md" })],
			sm: [sprinkles({ maxWidth: "main_sm" })],
		},
	},
});
