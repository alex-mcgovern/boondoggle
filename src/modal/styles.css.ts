import { style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import {
	MEDIA_QUERY_DESKTOP,
	MEDIA_QUERY_MOBILE,
	MEDIA_QUERY_TABLET,
	a11yFocus,
	animateFadeIn,
	vars,
} from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

export const backdropCSS = style([
	animateFadeIn,
	a11yFocus,
	sprinkles({
		background: "backdrop",
	}),
	{
		position: "fixed",
		inset: 0,
		zIndex: 10,
	},
]);

export const modalCSS = recipe({
	base: [
		animateFadeIn,
		a11yFocus,
		sprinkles({
			background: "background",
			position: "absolute",

			border: "border_default",
			borderRadius: "md",
			boxShadow: "md",

			// Ensure inner content can scroll
			overflowY: "auto",
		}),
		{
			top: "50%",
			left: "50%",
			transform: "translate(-50%, -50%)",
			zIndex: "999",
			"@media": {
				[MEDIA_QUERY_MOBILE]: {
					height: "100dvh",
				},
				[MEDIA_QUERY_TABLET]: {
					maxHeight: "75dvh",
				},
				[MEDIA_QUERY_DESKTOP]: {
					maxHeight: "50dvh",
				},
			},
			overscrollBehavior: "contain",
		},
	],
	defaultVariants: {
		width: "sm",
	},
	variants: {
		width: {
			lg: {
				"@media": {
					[MEDIA_QUERY_MOBILE]: {
						height: "100vw",
					},
					[MEDIA_QUERY_TABLET]: {
						width: "40rem",
					},
					[MEDIA_QUERY_DESKTOP]: {
						width: "50rem",
					},
				},
			},
			sm: {
				"@media": {
					[MEDIA_QUERY_MOBILE]: {
						height: "100vw",
					},
					[MEDIA_QUERY_TABLET]: {
						width: "20rem",
					},
					[MEDIA_QUERY_DESKTOP]: {
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
		borderBottom: "border_default",
		display: "flex",
		justifyContent: "space-between",
		maxWidth: "100%",
		padding: "space_4",
		position: "sticky",
		top: "0",
	}),
]);

export const modalTitleCSS = style([
	sprinkles({
		fontWeight: "semibold",
		marginY: "none",
	}),
	{
		"@media": {
			[MEDIA_QUERY_MOBILE]: {
				fontSize: vars.fontSize.bodyLg,
			},
		},
	},
]);
