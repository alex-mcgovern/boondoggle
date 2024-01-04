import { keyframes, style } from "@vanilla-extract/css";
import { vars } from "../index.css";
import { withPrefersMotion } from "../__DONE__css-utils";
import { sprinkles } from "../__DONE__sprinkles/index.css";

/** -----------------------------------------------------------------------------
 * MODAL OVERLAY
 * ------------------------------------------------------------------------------- */

export const mobileMenuOverlayCSS = style([
	sprinkles({
		display: "flex",
		placeItems: "center",
	}),
	{
		minHeight: "100dvh",
		minWidth: "100vw",
		position: "fixed",
		inset: "0",
		zIndex: 10,
	},
]);

/** -----------------------------------------------------------------------------
 * MODAL
 * ------------------------------------------------------------------------------- */

const kfMobileMenuModalIn = keyframes({
	"0%": { opacity: 0 },
	"100%": { opacity: 1 },
});
const kfMobileMenuModalOut = keyframes({
	"0%": { opacity: 1 },
	"100%": { opacity: 0 },
});

export const mobileMenuModalCSS = style([
	sprinkles({
		background: "background",
		boxShadow: "lg",
		width: "100vw",
	}),
	{
		border: 0,
		outline: "none",

		selectors: {
			"&[data-entering]": {
				...withPrefersMotion({
					animation: `${kfMobileMenuModalIn} ${vars.transitionDuration.medium} ${vars.ease.quart_in_out} forwards`,
				}),
			},
			"&[data-exiting]": {
				...withPrefersMotion({
					animation: `${kfMobileMenuModalOut} ${vars.transitionDuration.medium} ${vars.ease.quart_in_out} forwards`,
				}),
			},
		},
	},
]);

/** -----------------------------------------------------------------------------
 * DIALOG
 * ------------------------------------------------------------------------------- */

export const mobileMenuCSS = style([
	sprinkles({
		position: "relative",

		height: "100dvh",

		// Use flex to allow footer element to
		// stick to bottom of container
		display: "flex",
		flexDirection: "column",
	}),
	{
		outline: 0,
	},
]);

export const mobileMenuHeaderCSS = style([
	sprinkles({
		display: "flex",
		alignItems: "center",

		background: "tint_default",
		borderBottom: "border_rule",

		gap: "space_4",
		height: "topBar",

		paddingX: "space_4",
		paddingY: "space_2",

		position: "sticky",
		top: "0",
	}),
]);

export const mobileMenuTitleCSS = style([
	sprinkles({
		fontWeight: "semibold",
		marginY: "none",
		fontStyle: "bodyLg",
		color: "text_high_contrast",
	}),
]);

export const mobileMenuContentCSS = style([
	sprinkles({
		overflowY: "auto",
		paddingY: "space_4",
		paddingX: "space_4",
	}),
]);

export const mobileMenuFooterCSS = style([
	sprinkles({
		borderTop: "border_rule",
		marginTop: "auto",
		paddingX: "space_4",
		paddingY: "space_3",
	}),
]);
