import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import {
	MQ_LG,
	MQ_SM,
	MQ_XS,
	a11yFocus,
	animateFadeIn,
	variantColorOverlay,
} from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const backdropCSS = recipe({
	base: [
		a11yFocus,
		sprinkles({
			background: "backdrop",
		}),
		{
			position: "fixed",
			inset: 0,
			zIndex: 10,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
		},
	],
	defaultVariants: {
		enableFadeIn: true,
	},
	variants: {
		colorOverlay: variantColorOverlay,
		enableFadeIn: {
			true: animateFadeIn,
			false: [],
		},
	},
});

export const modalCSS = recipe({
	base: [
		animateFadeIn,
		a11yFocus,
		sprinkles({
			background: "floating_menu_background",
			position: "absolute",

			marginX: "auto",

			border: "border_1",
			borderRadius: "md",
			boxShadow: "md",

			// Use flex to allow footer element to
			// stick to bottom of container
			display: "flex",
			flexDirection: "column",

			// Ensure inner content can scroll
			overflowY: "auto",
		}),
		{
			"@media": {
				[MQ_XS]: {
					height: "100dvh",
				},
				[MQ_SM]: {
					maxHeight: "75dvh",
				},
				[MQ_LG]: {
					maxHeight: "75dvh",
				},
			},
			overscrollBehavior: "contain",
		},
	],
	defaultVariants: {
		width: "sm",
	},
	variants: {
		colorOverlay: variantColorOverlay,
		width: {
			lg: {
				"@media": {
					[MQ_XS]: {
						width: "100vw",
					},
					[MQ_SM]: {
						width: "40rem",
					},
					[MQ_LG]: {
						width: "50rem",
					},
				},
			},
			md: {
				"@media": {
					[MQ_XS]: {
						width: "100vw",
					},
					[MQ_SM]: {
						width: "30rem",
					},
					[MQ_LG]: {
						width: "40rem",
					},
				},
			},
			sm: {
				"@media": {
					[MQ_XS]: {
						width: "100vw",
					},
					[MQ_SM]: {
						width: "20rem",
					},
					[MQ_LG]: {
						width: "30rem",
					},
				},
			},
		},
	},
});

export const modalHeaderCSS = style([
	sprinkles({
		alignItems: "center",
		borderBottom: "border_1",
		display: "flex",
		justifyContent: "space-between",
		maxWidth: "100%",
		paddingLeft: "space_4",
		paddingRight: "space_2",
		paddingY: "space_2",
		position: "sticky",
		top: "0",
	}),
	{
		overscrollBehavior: "contain",
	},
]);

export const modalContentCSS = style([
	sprinkles({
		overflowY: "auto",
		padding: "space_4",
	}),
]);

export const modalFooterCSS = style([
	sprinkles({
		borderTop: "border_1",
		marginTop: "auto",
		paddingX: "space_4",
		paddingY: "space_3",
	}),
]);

export const modalTitleCSS = style([
	sprinkles({
		fontWeight: "semibold",
		marginY: "none",
		fontStyle: "bodyLg",
	}),
]);
