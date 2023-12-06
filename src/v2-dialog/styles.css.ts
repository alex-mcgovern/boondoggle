import { keyframes, style } from "@vanilla-extract/css";
import { sprinkles } from "../sprinkles/index.css";
import { withPrefersMotion } from "../css-utils";
import {
	MEDIA_QUERY_DESKTOP,
	MEDIA_QUERY_MOBILE,
	MEDIA_QUERY_TABLET,
	variantColorOverlay,
	vars,
} from "../index.css";
import { recipe } from "@vanilla-extract/recipes";

/** -----------------------------------------------------------------------------
 * MODAL OVERLAY
 * ------------------------------------------------------------------------------- */

const kfModalOverlayIn = keyframes({
	"0%": { opacity: 0 },
	"100%": { opacity: 1 },
});
const kfModalOverlayOut = keyframes({
	"0%": { opacity: 1 },
	"100%": { opacity: 0 },
});

export const modalOverlayCSS = style([
	sprinkles({
		display: "flex",
		placeItems: "center",
		background: "backdrop",
	}),
	{
		minHeight: "100dvh",
		position: "fixed",
		inset: "0",
		zIndex: 10,

		selectors: {
			"&[data-entering]": {
				...withPrefersMotion({
					animation: `${kfModalOverlayIn} ${vars.transitionDuration.short} ${vars.ease.quart_in_out} forwards`,
				}),
			},
			"&[data-exiting]": {
				...withPrefersMotion({
					animation: `${kfModalOverlayOut} ${vars.transitionDuration.short} ${vars.ease.quart_in_out} forwards`,
				}),
			},
		},
	},
]);

/** -----------------------------------------------------------------------------
 * MODAL
 * ------------------------------------------------------------------------------- */

const kfModalIn = keyframes({
	"0%": { opacity: 0, transform: "scale(0.99)" },
	"100%": { opacity: 1 },
});
const kfModalOut = keyframes({
	"0%": { opacity: 1 },
	"100%": { opacity: 0, transform: "scale(0.99)" },
});

export const modalCSS = recipe({
	base: [
		sprinkles({
			// padding: "space_4",
			background: "background",
			width: "100%",
			borderRadius: "md",
			border: "border_default",
			boxShadow: "lg",
		}),
		{
			outline: "none",

			selectors: {
				"&[data-entering]": {
					...withPrefersMotion({
						animation: `${kfModalIn} ${vars.transitionDuration.short} ${vars.ease.quart_in_out} forwards`,
					}),
				},
				"&[data-exiting]": {
					...withPrefersMotion({
						animation: `${kfModalOut} ${vars.transitionDuration.short} ${vars.ease.quart_in_out} forwards`,
					}),
				},
			},
		},
	],
	variants: {
		colorOverlay: variantColorOverlay,
		width: {
			lg: {
				"@media": {
					[MEDIA_QUERY_MOBILE]: {
						width: "100vw",
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
						width: "100vw",
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

/** -----------------------------------------------------------------------------
 * DIALOG
 * ------------------------------------------------------------------------------- */

export const dialogCSS = style([
	sprinkles({
		position: "relative",

		minHeight: "50dvh",
		maxHeight: "75dvh",

		// Use flex to allow footer element to
		// stick to bottom of container
		display: "flex",
		flexDirection: "column",
	}),
	{
		outline: 0,
		"@media": {
			[MEDIA_QUERY_MOBILE]: {
				height: "100vh",
				maxHeight: "100dvh",
			},
		},
	},
]);

export const dialogHeaderCSS = style([
	sprinkles({
		display: "flex",
		alignItems: "center",
		justifyContent: "space-between",

		maxWidth: "100%",

		paddingLeft: "space_4",
		paddingRight: "space_2",
		paddingY: "space_2",

		position: "sticky",
		top: "0",

		borderBottom: "border_default",
	}),
]);

export const dialogTitleCSS = style([
	sprinkles({
		fontWeight: "semibold",
		marginY: "none",
		fontStyle: "bodyLg",
	}),
]);

export const dialogContentCSS = style([
	sprinkles({
		overflowY: "auto",
		padding: "space_4",
	}),
]);

export const dialogFooterCSS = style([
	sprinkles({
		borderTop: "border_default",
		marginTop: "auto",
		paddingX: "space_4",
		paddingY: "space_3",
	}),
]);
