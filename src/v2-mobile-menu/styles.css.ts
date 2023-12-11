import { keyframes, style } from "@vanilla-extract/css";
import { withPrefersMotion } from "../css-utils";
import { vars } from "../index.css";
import { sprinkles } from "../sprinkles/index.css";

/** -----------------------------------------------------------------------------
 * MODAL OVERLAY
 * ------------------------------------------------------------------------------- */

const kfMobileMenuOverlayIn = keyframes({
	"0%": { opacity: 0 },
	"100%": { opacity: 1 },
});
const kfMobileMenuOverlayOut = keyframes({
	"0%": { opacity: 1 },
	"100%": { opacity: 0 },
});

export const mobileMenuOverlayCSS = style([
	sprinkles({
		display: "flex",
		placeItems: "center",
		background: "backdrop",
	}),
	{
		minHeight: "100dvh",
		minWidth: "100vw",
		position: "fixed",
		inset: "0",
		zIndex: 10,

		...withPrefersMotion({
			transition: `opacity ${vars.transitionDuration.medium} ${vars.ease.quart_in_out}, background ${vars.transitionDuration.medium} ${vars.ease.quart_in_out}`,
		}),

		selectors: {
			"&[data-entering]": {
				...withPrefersMotion({
					animation: `${kfMobileMenuOverlayIn} ${vars.transitionDuration.medium} ${vars.ease.quart_in_out} forwards`,
				}),
			},
			"&[data-exiting]": {
				...withPrefersMotion({
					animation: `${kfMobileMenuOverlayOut} ${vars.transitionDuration.medium} ${vars.ease.quart_in_out} forwards`,
				}),
			},
		},
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
		border: "border_rule",
		boxShadow: "lg",
		width: "100vw",
	}),
	{
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
