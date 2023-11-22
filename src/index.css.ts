import {
	amber,
	amberA,
	amberDark,
	amberDarkA,
	blue,
	blueA,
	blueDark,
	blueDarkA,
	green,
	greenA,
	greenDark,
	greenDarkA,
	iris,
	irisA,
	irisDark,
	irisDarkA,
	red,
	redA,
	redDark,
	redDarkA,
	slate,
	slateA,
	slateDark,
	slateDarkA,
} from "@radix-ui/colors";
import {
	type StyleRule,
	assignVars,
	createGlobalTheme,
	globalLayer,
	globalStyle,
	keyframes,
	style,
	styleVariants,
} from "@vanilla-extract/css";
import { withPrefersMotion } from "./css-utils";

/** -----------------------------------------------------------------------------
 * MEDIA QUERIES
 * ------------------------------------------------------------------------------- */

export const MEDIA_QUERY_DARK = "(prefers-color-scheme: dark)";

export const MEDIA_QUERY_DESKTOP = "only screen and (min-width: 992px)";
export const MEDIA_QUERY_TABLET = "only screen and (min-width: 496px)";
export const MEDIA_QUERY_MOBILE = "only screen and (max-width: 31rem)";

export const CONTAINER_LG = "(width > 992px)";
export const CONTAINER_MD = "(width >= 496px)";
export const CONTAINER_SM = "(width < 496px)";

/** -----------------------------------------------------------------------------
 * SELECTORS
 * ------------------------------------------------------------------------------- */

const SELECTOR_IS_LINK_BUTTON_INPUT = ":is(a,button,input)";

const SELECTOR_IS_NOT_DISABLED =
	":not(:is([disabled], [aria-disabled='true']))";

export const SELECTOR_IS_HOVER = ":is(:hover)";

export const SELECTOR_IS_FOCUS = ":is(:focus-visible)";

const SELECTOR_IS_HOVER_FOCUS = ":is(:hover, :focus-visible)";

const SELECTOR_IS_ACTIVE = `:is(:active, [data-active='true'])`;

/**
 * Button/link/input: hover
 */
const hoverSelectorArray = [
	"&",
	SELECTOR_IS_LINK_BUTTON_INPUT,
	SELECTOR_IS_NOT_DISABLED,
	SELECTOR_IS_HOVER,
];

export const SELECTOR_LINK_BUTTON_INPUT_HOVER = hoverSelectorArray.join("");

/**
 * Button/link/input: focus
 */
const focusSelectorArray = [
	"&",
	SELECTOR_IS_LINK_BUTTON_INPUT,
	SELECTOR_IS_NOT_DISABLED,
	SELECTOR_IS_FOCUS,
];

export const SELECTOR_LINK_BUTTON_INPUT_FOCUS = focusSelectorArray.join("");

/**
 * Button/link/input: hover/focus
 */
const hoverFocusSelectorArray = [
	"&",
	SELECTOR_IS_LINK_BUTTON_INPUT,
	SELECTOR_IS_NOT_DISABLED,
	SELECTOR_IS_HOVER_FOCUS,
];

export const SELECTOR_LINK_BUTTON_INPUT_HOVER_FOCUS =
	hoverFocusSelectorArray.join("");

/**
 * Button/link/input: active
 */
const activeSelectorArray = [
	"&",
	SELECTOR_IS_LINK_BUTTON_INPUT,
	SELECTOR_IS_NOT_DISABLED,
	SELECTOR_IS_ACTIVE,
];

export const SELECTOR_LINK_BUTTON_INPUT_ACTIVE = activeSelectorArray.join("");

/** -----------------------------------------------------------------------------
 * UTILITY CLASSES
 * ------------------------------------------------------------------------------- */

export const hideLastpassStyle = style({});

globalStyle(`${hideLastpassStyle} div[data-lastpass-icon-root]`, {
	display: "none !important",
	visibility: "hidden",
});

/** -----------------------------------------------------------------------------
 * CSS LAYERS
 * ------------------------------------------------------------------------------- */

export const resetLayer = globalLayer("reset");
export const baseLayer = globalLayer("base");
export const themeLayer = globalLayer("theme");
export const sprinklesLayer = globalLayer("sprinkles");

/** -----------------------------------------------------------------------------
 * CSS VARS
 * ------------------------------------------------------------------------------- */

/**
 * Global variables (css vars)
 *
 * These are declared as css vars at the `root:` level, in scope of the `html` element
 * - See: https://vanilla-extract.style/documentation/global-api/create-global-theme/
 */

export const vars = createGlobalTheme(":root, ::backdrop", {
	color: {
		black: slate.slate12,
		white: slate.slate1,

		text_low_contrast: slate.slate10,
		text_high_contrast: slate.slate12,

		background: slate.slate1,
		background_raised: slate.slate1,
		tint_1: slate.slate2,
		backdrop: slateA.slateA11,
		shadow: slateA.slateA2,

		border_1: slate.slate3,
		border_2: slate.slate4,
		border_3: slate.slate5,
		border_4: slate.slate6,

		button_tint: blue.blue5,
		button_default: blue.blue9,
		button_hover: blue.blue10,
		button_active: blue.blue11,

		tint_2: slate.slate3,
		tint_3: slate.slate4,
		tint_4: slate.slate5,

		focus_ring: blue.blue7,
	},
	aspectRatio: {
		extraWide: "10 / 3",
		square: "1 / 1",
		tall: "9 / 16",
		wide: "16 / 9",
	},
	borderRadius: {
		"50%": "50%",
		lg: "12px",
		md: "8px",
		pill: "99999px",
		sm: "4px",
	},
	boxShadow: {
		lg: `0 8px 24px ${slateA.slateA2}`,
		md: `0 3px 6px ${slateA.slateA2}`,
		sm: `0 1px 2px ${slateA.slateA2}`,
	},
	display: {
		block: "block",
		flex: "flex",
		grid: "grid",
		inline: "inline",
		"inline-block": "inline-block",
		"inline-flex": "inline-flex",
		none: "none",
		table: "table",
		"table-cell": "table-cell",
	},
	fontFamily: {
		body: `-apple-system,BlinkMacSystemFont,"Segoe UI",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji"`,
	},
	fontSize: {
		bodyLg: "1rem", // 16px
		bodyMd: "0.875rem", // 14px
		bodySm: "0.75rem", // 12px
		h1: "2.5rem", // 40px
		h2: "2rem", // 32 px
		h3: "1.75rem", // 28px
		h4: "1.5rem", // 24px
		h5: "1.25rem", // 20px
		h6: "1rem", // 16px
		root: "16px",
	},
	fontWeight: {
		bold: "700",
		extrabold: "800",
		light: "300",
		medium: "500",
		normal: "400",
		semibold: "600",
	},
	gridTemplateColumns: {
		"1_2": "1fr 2fr",
		"1_3": "1fr 3fr",
		"1x": "1fr",
		"2_1": "2fr 1fr",
		"2x": "repeat(2, 1fr)",
		"3_1": "3fr 1fr",
		"3x": "repeat(3, 1fr)",
		"4x": "repeat(4, 1fr)",
		"5_7": "5fr 7fr",
		"5x": "repeat(5, 1fr)",
		"6x": "repeat(6, 1fr)",
		"7_5": "7fr 5fr",
		"7x": "repeat(7, 1fr)",
	},
	height: {
		"": "0",
		"25%": "25%",
		"25vh": "25vh",
		"50%": "50%",
		"50vh": "50vh",
		"75%": "75%",
		"75vh": "75vh",
		"90vh": "90vh",
		"100%": "100%",
		"100vh": "100vh",
		auto: "auto",
		"min-content": "min-content",
		topBar: "3.5rem",
	},
	lineHeight: {
		bodyLg: "1.5rem", // 24px
		bodyMd: "1.5rem", // 24px
		bodySm: "1rem", // 16px
		h1: "3rem", // 48px
		h2: "2.5rem", // 40px
		h3: "2rem", // 32px
		h4: "1.75rem", // 28px
		h5: "1.5rem", // 24px
		h6: "1.5rem", // 24px
		root: "1.5rem", // 24px
	},
	spacing: {
		auto: "auto",
		none: "0",

		space_0: "0",
		"space_0.25": "0.0625rem",
		"space_0.5": "0.125rem",
		space_1: "0.25rem",
		space_2: "0.5rem",
		space_3: "0.75rem",
		space_4: "1rem",
		space_5: "1.25rem",
		space_6: "1.5rem",
		space_8: "2rem",
		space_10: "2.5rem",
		space_12: "3rem",
		// space_14: "3.5rem",
		// space_16: "4rem",
		// space_20: "5rem",
		// space_24: "6rem",
		// space_32: "8rem",
		/* eslint-enable sort-keys-fix/sort-keys-fix */
	},
	transitionDuration: {
		long: "600ms",
		medium: "400ms",
		short: "200ms",
	},
	width: {
		"": "0",
		"25%": "25%",
		"50%": "50%",
		"100%": "100%",
		"100vw": "100vw",
		auto: "auto",
		col_1: "8.33333333%",
		col_2: "16.66666666%",
		col_3: "24.99999999%",
		col_4: "33.33333332%",
		col_5: "41.66666665%",
		col_6: "49.99999998%",
		col_7: "58.33333331%",
		col_8: "66.66666664%",
		col_9: "74.99999997%",
		col_10: "83.3333333%",
		col_11: "91.66666663%",
		col_12: "100%",
		main_lg: "90rem",
		main_md: "60rem",
		main_sm: "30rem",
		"max-content": "max-content",
		"min-content": "min-content",
	},
});

/** -----------------------------------------------------------------------------
 * ANIMATIONS
 * ------------------------------------------------------------------------------- */

export const fadeInBackdropKeyframes = keyframes({
	"0%": { background: "transparent" },
	"100%": { background: vars.color.backdrop },
});

const fadeInKeyframes = keyframes({
	"0%": { opacity: 0 },
	"100%": { opacity: 1 },
});

export const animateFadeIn = style([
	withPrefersMotion({
		animation: `${fadeInKeyframes} ${vars.transitionDuration.short} ease forwards`,
	}),
]);

const slideUpKeyframes = keyframes({
	"0%": { opacity: 0, transform: `translateY(${vars.spacing.space_10})` },
	"100%": { opacity: 1 },
});

export const animateSlideUp = style([
	withPrefersMotion({
		animation: `${slideUpKeyframes} ${vars.transitionDuration.medium} ease forwards`,
	}),
]);

/** -----------------------------------------------------------------------------
 * COLOR OVERLAY VARIANT
 * ------------------------------------------------------------------------------- */

export const variantColorOverlay = styleVariants({
	amber: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(vars.color, {
					black: amber.amber12,
					white: amber.amber1,

					text_low_contrast: amber.amber11,
					text_high_contrast: amber.amber11,

					background: amber.amber1,
					background_raised: amber.amber1,
					backdrop: amberA.amberA11,
					shadow: amberA.amberA2,

					border_1: amber.amber5,
					border_2: amber.amber6,
					border_3: amber.amber7,
					border_4: amber.amber7,

					button_tint: amber.amber5,
					button_default: amber.amber9,
					button_hover: amber.amber10,
					button_active: amber.amber11,

					tint_1: amber.amber2,
					tint_2: amber.amber3,
					tint_3: amber.amber4,
					tint_4: amber.amber5,

					focus_ring: amber.amber7,
				}),

				"@media": {
					[MEDIA_QUERY_DARK]: {
						vars: assignVars(vars.color, {
							black: amberDark.amber1,
							white: amberDark.amber12,

							text_low_contrast: amberDark.amber11,
							text_high_contrast: amberDark.amber11,

							background: amberDark.amber1,
							background_raised: amberDark.amber2,
							backdrop: amberDarkA.amberA11,
							shadow: amberDarkA.amberA2,

							border_1: amberDark.amber5,
							border_2: amberDark.amber6,
							border_3: amberDark.amber7,
							border_4: amberDark.amber7,

							button_tint: amberDark.amber5,
							button_default: amberDark.amber9,
							button_hover: amberDark.amber10,
							button_active: amberDark.amber11,

							tint_1: amberDark.amber2,
							tint_2: amberDark.amber3,
							tint_3: amberDark.amber4,
							tint_4: amberDark.amber5,

							focus_ring: amberDark.amber7,
						}),
					},
				},
			},
		},
	},
	blue: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(vars.color, {
					black: blue.blue12,
					white: blue.blue1,

					text_low_contrast: blue.blue11,
					text_high_contrast: blue.blue11,

					background: blue.blue1,
					background_raised: blue.blue1,
					backdrop: blueA.blueA11,
					shadow: blueA.blueA2,

					border_1: blue.blue5,
					border_2: blue.blue6,
					border_3: blue.blue7,
					border_4: blue.blue8,

					button_tint: blue.blue5,
					button_default: blue.blue9,
					button_hover: blue.blue10,
					button_active: blue.blue11,

					tint_1: blue.blue2,
					tint_2: blue.blue3,
					tint_3: blue.blue4,
					tint_4: blue.blue5,

					focus_ring: blue.blue7,
				}),

				"@media": {
					[MEDIA_QUERY_DARK]: {
						vars: assignVars(vars.color, {
							black: blueDark.blue1,
							white: blueDark.blue12,

							text_low_contrast: blueDark.blue11,
							text_high_contrast: blueDark.blue11,

							background: blueDark.blue1,
							background_raised: blueDark.blue1,
							backdrop: blueDarkA.blueA11,
							shadow: blueDarkA.blueA2,

							border_1: blueDark.blue5,
							border_2: blueDark.blue6,
							border_3: blueDark.blue7,
							border_4: blueDark.blue8,

							button_tint: blueDark.blue5,
							button_default: blueDark.blue9,
							button_hover: blueDark.blue10,
							button_active: blueDark.blue11,

							tint_1: blueDark.blue2,
							tint_2: blueDark.blue3,
							tint_3: blueDark.blue4,
							tint_4: blueDark.blue5,

							focus_ring: blueDark.blue7,
						}),
					},
				},
			},
		},
	},
	default: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(vars.color, {
					black: slate.slate12,
					white: slate.slate1,

					text_low_contrast: slate.slate11,
					text_high_contrast: slate.slate12,

					background: slate.slate1,
					background_raised: slate.slate1,
					backdrop: slateA.slateA11,
					shadow: slateA.slateA2,

					border_1: slate.slate5,
					border_2: slate.slate6,
					border_3: slate.slate7,
					border_4: slate.slate8,

					button_tint: blue.blue5,
					button_default: blue.blue9,
					button_hover: blue.blue10,
					button_active: blue.blue11,

					tint_1: slate.slate2,
					tint_2: slate.slate3,
					tint_3: slate.slate4,
					tint_4: slate.slate5,

					focus_ring: blue.blue7,
				}),

				"@media": {
					[MEDIA_QUERY_DARK]: {
						vars: assignVars(vars.color, {
							black: slateDark.slate1,
							white: slateDark.slate12,

							text_low_contrast: slateDark.slate11,
							text_high_contrast: slateDark.slate12,

							background: slateDark.slate2,
							background_raised: slateDark.slate3,
							backdrop: slateDarkA.slateA11,
							shadow: slateDarkA.slateA1,

							border_1: slateDark.slate5,
							border_2: slateDark.slate6,
							border_3: slateDark.slate7,
							border_4: slateDark.slate8,

							button_tint: blueDark.blue5,
							button_default: blueDark.blue9,
							button_hover: blueDark.blue10,
							button_active: blueDark.blue11,

							tint_1: slateDark.slate3,
							tint_2: slateDark.slate4,
							tint_3: slateDark.slate5,
							tint_4: slateDark.slate6,

							focus_ring: blueDark.blue7,
						}),
					},
				},
			},
		},
	},
	green: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(vars.color, {
					black: green.green12,
					white: green.green1,

					text_low_contrast: green.green11,
					text_high_contrast: green.green11,

					background: green.green1,
					background_raised: green.green1,
					backdrop: greenA.greenA11,
					shadow: greenA.greenA2,

					border_1: green.green5,
					border_2: green.green6,
					border_3: green.green7,
					border_4: green.green8,

					button_tint: green.green5,
					button_default: green.green9,
					button_hover: green.green10,
					button_active: green.green11,

					tint_1: green.green2,
					tint_2: green.green3,
					tint_3: green.green4,
					tint_4: green.green5,

					focus_ring: green.green7,
				}),

				"@media": {
					[MEDIA_QUERY_DARK]: {
						vars: assignVars(vars.color, {
							black: greenDark.green1,
							white: greenDark.green12,

							text_low_contrast: greenDark.green11,
							text_high_contrast: greenDark.green11,

							background: greenDark.green1,
							background_raised: greenDark.green2,
							backdrop: greenDarkA.greenA11,
							shadow: greenDarkA.greenA2,

							border_1: greenDark.green5,
							border_2: greenDark.green6,
							border_3: greenDark.green7,
							border_4: greenDark.green8,

							button_tint: greenDark.green5,
							button_default: greenDark.green9,
							button_hover: greenDark.green10,
							button_active: greenDark.green11,

							tint_1: greenDark.green2,
							tint_2: greenDark.green3,
							tint_3: greenDark.green4,
							tint_4: greenDark.green5,

							focus_ring: greenDark.green7,
						}),
					},
				},
			},
		},
	},
	grey: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(vars.color, {
					black: slate.slate12,
					white: slate.slate1,

					text_low_contrast: slate.slate11,
					text_high_contrast: slate.slate11,

					background: slate.slate1,
					background_raised: slate.slate1,
					backdrop: slateA.slateA11,
					shadow: slateA.slateA2,

					border_1: slate.slate5,
					border_2: slate.slate6,
					border_3: slate.slate7,
					border_4: slate.slate8,

					button_tint: slate.slate5,
					button_default: slate.slate9,
					button_hover: slate.slate10,
					button_active: slate.slate11,

					tint_1: slate.slate2,
					tint_2: slate.slate3,
					tint_3: slate.slate4,
					tint_4: slate.slate5,

					focus_ring: slate.slate7,
				}),

				"@media": {
					[MEDIA_QUERY_DARK]: {
						vars: assignVars(vars.color, {
							black: slateDark.slate1,
							white: slateDark.slate12,

							text_low_contrast: slateDark.slate11,
							text_high_contrast: slateDark.slate11,

							background: slateDark.slate1,
							background_raised: slateDark.slate2,
							backdrop: slateDarkA.slateA11,
							shadow: slateDarkA.slateA2,

							border_1: slateDark.slate5,
							border_2: slateDark.slate6,
							border_3: slateDark.slate7,
							border_4: slateDark.slate8,

							button_tint: slateDark.slate5,
							button_default: slateDark.slate9,
							button_hover: slateDark.slate10,
							button_active: slateDark.slate11,

							tint_1: slateDark.slate2,
							tint_2: slateDark.slate3,
							tint_3: slateDark.slate4,
							tint_4: slateDark.slate5,

							focus_ring: slateDark.slate7,
						}),
					},
				},
			},
		},
	},
	red: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(vars.color, {
					black: red.red12,
					white: red.red1,

					text_low_contrast: red.red11,
					text_high_contrast: red.red11,

					background: red.red1,
					background_raised: red.red1,
					backdrop: redA.redA11,
					shadow: redA.redA2,

					border_1: red.red5,
					border_2: red.red6,
					border_3: red.red7,
					border_4: red.red8,

					button_tint: red.red5,
					button_default: red.red9,
					button_hover: red.red10,
					button_active: red.red11,

					tint_1: red.red2,
					tint_2: red.red3,
					tint_3: red.red4,
					tint_4: red.red5,

					focus_ring: red.red7,
				}),

				"@media": {
					[MEDIA_QUERY_DARK]: {
						vars: assignVars(vars.color, {
							black: redDark.red1,
							white: redDark.red12,

							text_low_contrast: redDark.red11,
							text_high_contrast: redDark.red11,

							background: redDark.red1,
							background_raised: redDark.red2,
							backdrop: redDarkA.redA11,
							shadow: redDarkA.redA2,

							border_1: redDark.red5,
							border_2: redDark.red6,
							border_3: redDark.red7,
							border_4: redDark.red8,

							button_tint: redDark.red5,
							button_default: redDark.red9,
							button_hover: redDark.red10,
							button_active: redDark.red11,

							tint_1: redDark.red2,
							tint_2: redDark.red3,
							tint_3: redDark.red4,
							tint_4: redDark.red5,

							focus_ring: redDark.red7,
						}),
					},
				},
			},
		},
	},
	purple: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(vars.color, {
					black: iris.iris12,
					white: iris.iris1,

					text_low_contrast: iris.iris11,
					text_high_contrast: iris.iris11,

					background: iris.iris1,
					background_raised: iris.iris1,
					backdrop: irisA.irisA11,
					shadow: irisA.irisA2,

					border_1: iris.iris5,
					border_2: iris.iris6,
					border_3: iris.iris7,
					border_4: iris.iris8,

					button_tint: iris.iris5,
					button_default: iris.iris9,
					button_hover: iris.iris10,
					button_active: iris.iris11,

					tint_1: iris.iris2,
					tint_2: iris.iris3,
					tint_3: iris.iris4,
					tint_4: iris.iris5,

					focus_ring: iris.iris7,
				}),

				"@media": {
					[MEDIA_QUERY_DARK]: {
						vars: assignVars(vars.color, {
							black: irisDark.iris1,
							white: irisDark.iris12,

							text_low_contrast: irisDark.iris11,
							text_high_contrast: irisDark.iris11,

							background: irisDark.iris1,
							background_raised: irisDark.iris2,
							backdrop: irisDarkA.irisA11,
							shadow: irisDarkA.irisA2,

							border_1: irisDark.iris5,
							border_2: irisDark.iris6,
							border_3: irisDark.iris7,
							border_4: irisDark.iris8,

							button_tint: irisDark.iris5,
							button_default: irisDark.iris9,
							button_hover: irisDark.iris10,
							button_active: irisDark.iris11,

							tint_1: irisDark.iris2,
							tint_2: irisDark.iris3,
							tint_3: irisDark.iris4,
							tint_4: irisDark.iris5,

							focus_ring: irisDark.iris7,
						}),
					},
				},
			},
		},
	},
});

export type ColorOverlay = keyof typeof variantColorOverlay;

/** -----------------------------------------------------------------------------
 * A11Y STYLES
 * ------------------------------------------------------------------------------- */

export const a11yFocusStyleRule: StyleRule = {
	borderColor: vars.color.button_default,
	outline: `2px solid ${vars.color.focus_ring} `,
	outlineOffset: "-2px",
	// outline: "none",
};

export const a11yError = style([
	{
		"@layer": {
			[themeLayer]: {
				borderColor: vars.color.button_default,
				selectors: {
					"&:is(&:focus, &:focus-visible), &:focus-within": {
						...a11yFocusStyleRule,
					},
				},
			},
		},
	},
]);

export const a11yDisabled = style({
	"@layer": {
		[themeLayer]: {
			selectors: {
				"&[disabled], &[aria-disabled='true']": {
					opacity: 0.5,
				},
				"&[disabled]:hover, &[aria-disabled='true']:hover": {
					cursor: "not-allowed !important",
				},
			},
		},
	},
});

export const a11yFocus = style([
	{
		"@layer": {
			[themeLayer]: {
				selectors: {
					"&:focus:not(:focus-visible)": {
						outline: "none",
					},

					"&:not(:is([disabled], [readonly])):focus-visible": {
						...a11yFocusStyleRule,
					},
				},
			},
		},
	},
]);

/** -----------------------------------------------------------------------------
 * GLOBAL STYLESHEET
 * ------------------------------------------------------------------------------- */

/**
 * Based on Eric Meyer's Reset CSS https://meyerweb.com/eric/tools/css/reset/
 *
 * The original rule for `blockquote:before, blockquote:after, q:before, q:after`
 * contains fallback for `content` which is not possible with vanilla-extract.
 */

globalStyle(
	`html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed, 
figure, figcaption, footer, header, hgroup, 
menu, nav, output, ruby, section, summary,
time, mark, audio, video`,
	{
		"@layer": {
			[resetLayer]: {
				border: 0,
				font: "inherit",
				fontSize: "100%",
				margin: 0,
				padding: 0,
				verticalAlign: "baseline",
			},
		},
	},
);

globalStyle(
	"article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section",
	{
		"@layer": {
			[resetLayer]: {
				display: "block",
			},
		},
	},
);

globalStyle("body", {
	"@layer": {
		[resetLayer]: {
			lineHeight: 1.5,
		},
	},
});

globalStyle("blockquote, q", {
	"@layer": {
		[resetLayer]: {
			quotes: "none",
		},
	},
});

globalStyle(
	`blockquote:before, blockquote:after,
    q:before, q:after`,
	{
		"@layer": {
			[resetLayer]: {
				// NOTE: The original also has `content: "''"` but that is not possible
				// to have duplicate rules with vanilla-extract.
				content: "none",
			},
		},
	},
);

globalStyle("button", {
	"@layer": {
		[resetLayer]: {
			appearance: "none",
			background: "none",
			border: "none",
			display: "block",
			padding: 0,
			textDecoration: "none",
		},
	},
});

globalStyle("button[disabled], button[aria-disabled='true']", {
	"@layer": {
		[resetLayer]: {
			opacity: 0.5,
		},
	},
});

globalStyle("button[disabled]:hover, button[aria-disabled='true']:hover", {
	"@layer": {
		[resetLayer]: {
			cursor: "not-allowed !important",
		},
	},
});

globalStyle("img, picture, video, canvas, svg", {
	"@layer": {
		[resetLayer]: {
			display: "block",
			maxWidth: "100%",
		},
	},
});

globalStyle("input, button, textarea, select", {
	"@layer": {
		[resetLayer]: {
			font: "inherit",
		},
	},
});

globalStyle(`input[type="search"]`, {
	"@layer": {
		[resetLayer]: {
			appearance: "none",
		},
	},
});

globalStyle(
	`input[type="search"]::-webkit-search-decoration,
input[type="search"]::-webkit-search-cancel-button,
input[type="search"]::-webkit-search-results-button,
input[type="search"]::-webkit-search-results-decoration`,
	{
		"@layer": {
			[resetLayer]: {
				display: "none",
			},
		},
	},
);

globalStyle("input[type=search]::-ms-clear, input[type=search]::-ms-reveal", {
	"@layer": {
		[resetLayer]: {
			display: "none",
			height: 0,
			width: 0,
		},
	},
});

// INPUT DATE STYLES

globalStyle("input[type='date']::-webkit-calendar-picker-indicator", {
	display: "none",
});

// UNUSED: Styles the background of the input date field
// globalStyle(`input::-webkit-datetime-edit`, {});

// UNUSED: Styles the background of the text within the input date field
// globalStyle(`input::-webkit-datetime-edit-fields-wrapper `, {});

// UNUSED: Styles the text within the input date field
// globalStyle(`input::-webkit-datetime-edit-text `, {});

// UNUSED: Styles the month text within the input date field
// globalStyle(`input::-webkit-datetime-edit-month-field`, { color: "blue" });

// UNUSED: Styles the day text within the input date field
// globalStyle(`input::-webkit-datetime-edit-day-field`, {});

// UNUSED: Styles the year text within the input date field
// globalStyle(`input::-webkit-datetime-edit-year-field`, {});

// UNUSED: Styles the year text within the input date field
// globalStyle(`input::-webkit-inner-spin-button`, { display: "none" });

// globalStyle(`input::-webkit-calendar-picker-indicator`, { color: "red" });

globalStyle("button:not([disabled]), input[type='button']:not([disabled])", {
	"@layer": {
		[resetLayer]: {
			cursor: "pointer",
		},
	},
});

globalStyle(":root", {
	"@media": {
		[MEDIA_QUERY_MOBILE]: {
			vars: {
				[vars.fontSize.h1]: "2.5rem",
				[vars.fontSize.h2]: "2rem",
				[vars.fontSize.h3]: "1.625rem",
				[vars.fontSize.h4]: "1.375rem",
				[vars.fontSize.h5]: "1.125rem",
				[vars.fontSize.h6]: "1rem",
			},
		},
		[MEDIA_QUERY_DARK]: {
			vars: {
				...assignVars(vars.color, {
					black: slateDark.slate1,
					white: slateDark.slate12,

					text_low_contrast: slateDark.slate11,
					text_high_contrast: slateDark.slate12,

					background: blueDark.blue2,
					background_raised: blueDark.blue3,
					backdrop: slateA.slateA11,
					shadow: slateA.slateA2,

					border_1: slateDark.slate4,
					border_2: slateDark.slate5,
					border_3: slateDark.slate6,
					border_4: slateDark.slate7,

					button_tint: blueDark.blue5,
					button_default: blueDark.blue9,
					button_hover: blueDark.blue8,
					button_active: blueDark.blue7,

					tint_1: slateDark.slate2,
					tint_2: slateDark.slate3,
					tint_3: slateDark.slate4,
					tint_4: slateDark.slate5,

					focus_ring: blueDark.blue7,
				}),

				// [vars.boxShadow.lg]: `0 8px 24px ${slateDarkA.slateA2}`,
				// [vars.boxShadow.md]: `0 3px 6px ${slateDarkA.slateA2}`,
				// [vars.boxShadow.sm]: `0 1px 0 ${slateDarkA.slateA2}`,
			},
		},
	},
});

globalStyle("*", {
	"@layer": {
		[baseLayer]: { boxSizing: "border-box", margin: 0 },
	},
});

globalStyle("html", {
	"@layer": {
		[baseLayer]: {
			accentColor: vars.color.button_default,
			background: vars.color.background,
			fontSize: vars.fontSize.root,
		},
	},
});

globalStyle("html, body", {
	"@layer": {
		[baseLayer]: {
			fontFamily: vars.fontFamily.body,
			fontSize: vars.fontSize.root,
			height: "100%",
		},
	},
});

globalStyle("body", {
	"@layer": {
		[baseLayer]: {
			color: vars.color.text_high_contrast,
			lineHeight: vars.lineHeight.bodyMd,
			WebkitFontSmoothing: "antialiased",
			scrollbarColor: `${vars.color.tint_2} ${vars.color.background_raised}`,
		},
	},
});

globalStyle("body", {
	"@layer": {
		[baseLayer]: {
			color: vars.color.text_high_contrast,
			lineHeight: vars.lineHeight.bodyMd,
			WebkitFontSmoothing: "antialiased",
			scrollbarColor: `${vars.color.tint_2} ${vars.color.background_raised}`,
		},
	},
});

globalStyle("a", {
	"@layer": {
		[baseLayer]: {
			color: vars.color.button_default,
			margin: 0,
			padding: 0,
			textDecoration: "none",
		},
	},
});

globalStyle("a:hover, a:focus, a:focus-visible", {
	"@layer": {
		[baseLayer]: {
			color: vars.color.button_active,
			textDecoration: "underline",
		},
	},
});

globalStyle("a:focus-visible", {
	"@layer": {
		[baseLayer]: {
			...a11yFocusStyleRule,
		},
	},
});

globalStyle("button", {
	"@layer": {
		[baseLayer]: {
			background: "none",
			border: "none",
			textDecoration: "none",
			WebkitAppearance: "none",
		},
	},
});

globalStyle("input[type=checkbox]", {
	"@layer": {
		[baseLayer]: {
			accentColor: vars.color.button_default,
			cursor: "pointer",
			height: vars.spacing.space_4,
			width: vars.spacing.space_4,
			...withPrefersMotion({
				transition: `all ${vars.transitionDuration.long} ease`,
			}),
		},
	},
});

globalStyle("code", {
	"@layer": {
		[baseLayer]: {
			color: "inherit",
			fontFamily: "monospace",
			fontWeight: vars.fontWeight.normal,
		},
	},
});

globalStyle("pre:has(code)", {
	"@layer": {
		[baseLayer]: {
			background: vars.color.tint_2,
			borderRadius: vars.borderRadius.md,
			marginBottom: vars.spacing.space_6,
			marginTop: vars.spacing.space_6,
			overflow: "auto",
			padding: vars.spacing.space_6,
		},
	},
});

globalStyle("h1, h2, h3, h4, h5, h6", {
	"@layer": {
		[baseLayer]: {
			display: "block",
			fontWeight: vars.fontWeight.medium,
			lineHeight: 1.4,
			marginBottom: vars.spacing.space_2,
			overflowWrap: "break-word",
		},
	},
});

globalStyle("h1", {
	"@layer": {
		[baseLayer]: {
			fontSize: vars.fontSize.h1,
			fontWeight: vars.fontWeight.bold,
		},
	},
});

globalStyle("h2", {
	"@layer": {
		[baseLayer]: {
			fontSize: vars.fontSize.h2,
			fontWeight: vars.fontWeight.semibold,
		},
	},
});

globalStyle("h3", {
	"@layer": {
		[baseLayer]: {
			fontSize: vars.fontSize.h3,
			fontWeight: vars.fontWeight.semibold,
		},
	},
});

globalStyle("h4", {
	"@layer": {
		[baseLayer]: {
			fontSize: vars.fontSize.h4,
			fontWeight: vars.fontWeight.semibold,
		},
	},
});

globalStyle("h5", {
	"@layer": {
		[baseLayer]: {
			fontSize: vars.fontSize.h5,
			fontWeight: vars.fontWeight.semibold,
		},
	},
});

globalStyle("h6", {
	"@layer": {
		[baseLayer]: {
			fontSize: vars.fontSize.h6,
			fontWeight: vars.fontWeight.semibold,
		},
	},
});

globalStyle("hr", {
	"@layer": {
		[baseLayer]: {
			borderBottom: "none",
			borderColor: `${vars.color.border_1} !important`,
			borderTop: "1px solid",
			marginBottom: vars.spacing.space_6,
			marginTop: vars.spacing.space_6,
		},
	},
});

export const textFieldStyleRule: StyleRule = {
	background: vars.color.tint_1,
	border: `1px solid ${vars.color.border_1}`,
	borderRadius: vars.borderRadius.md,
	color: vars.color.text_high_contrast,
	fontWeight: vars.fontWeight.normal,
	padding: `${vars.spacing.space_2} ${vars.spacing.space_4}`,
	...withPrefersMotion({
		transition: `ease ${vars.transitionDuration.short} ease`,
		transitionProperty: "color, background-color, border-color",
	}),
};

globalStyle("textarea", {
	"@layer": {
		[baseLayer]: {
			...textFieldStyleRule,
		},
	},
});

globalStyle("select", {
	"@layer": {
		[baseLayer]: {
			...textFieldStyleRule,
		},
	},
});

globalStyle("textarea[readonly]", {
	"@layer": {
		[baseLayer]: {
			background: vars.color.tint_2,
		},
	},
});

globalStyle(
	"input::-webkit-outer-spin-button, input::-webkit-inner-spin-button",
	{
		"@layer": {
			[baseLayer]: {
				margin: 0,
				WebkitAppearance: "none",
			},
		},
	},
);

globalStyle("input[type=number]", {
	"@layer": {
		[baseLayer]: {
			MozAppearance: "textfield",
		},
	},
});

globalStyle("input::placeholder, textarea::placeholder", {
	"@layer": {
		[baseLayer]: {
			color: vars.color.text_low_contrast,
		},
	},
});

globalStyle(
	"input:not([disabled]):is(:hover), textarea:not([disabled]):is(:hover)",
	{
		"@layer": {
			[baseLayer]: {
				// background: vars.color.tint_2,
				// borderColor: vars.color.border_2,
			},
		},
	},
);

globalStyle(
	"input:not([disabled]):is(:focus-visible), textarea:not([disabled]):is(:focus-visible)",
	{
		"@layer": {
			[baseLayer]: {
				// ...a11yFocusStyleRule,
			},
		},
	},
);

globalStyle(
	"input[disabled]:is(:focus-visible, :focus), textarea[disabled]:is(:focus-visible, :focus)",
	{
		"@layer": {
			[baseLayer]: {
				outline: "none",
			},
		},
	},
);

globalStyle("ul, ol", {
	"@layer": {
		[baseLayer]: {
			marginBlockEnd: 0,
			marginBlockStart: 0,
			paddingInlineStart: 0,
		},
	},
});

globalStyle("ul li, ol li", {
	"@layer": {
		[baseLayer]: {
			listStylePosition: "inside",
			marginBottom: vars.spacing.space_2,
		},
	},
});

globalStyle("ul li::marker, ol li::marker", {
	"@layer": {
		[baseLayer]: {
			color: vars.color.button_default,
			fontWeight: vars.fontWeight.semibold,
		},
	},
});

globalStyle("menu", {
	"@layer": {
		[baseLayer]: {
			listStyleType: "none",
			margin: 0,
			padding: 0,
		},
	},
});

globalStyle("p", {
	"@layer": {
		[baseLayer]: {
			marginBottom: vars.spacing.space_2,
			overflowWrap: "break-word",
		},
	},
});

/**
 * Scrollbars
 */

// Table

const tableStyleRule: StyleRule = {
	borderCollapse: "collapse",
	borderSpacing: 0,
	tableLayout: "fixed",
	width: "100%",
};

globalStyle("table", {
	"@layer": {
		[baseLayer]: {
			...tableStyleRule,
		},
	},
});

export const tableStyles = style({
	display: "table",
	...tableStyleRule,
});

// Table head cell styles

const tHeadStyleRule: StyleRule = {
	fontSize: vars.fontSize.bodySm,
	fontWeight: vars.fontWeight.semibold,
};

globalStyle("thead", {
	"@layer": {
		[baseLayer]: {
			...tHeadStyleRule,
		},
	},
});

export const tHeadStyles = style({
	display: "table-header-group",
	...tHeadStyleRule,
});

// Table cells

const tableCellStyleRule: StyleRule = {
	fontSize: vars.fontSize.bodyMd,
	padding: `${vars.spacing.space_2} ${vars.spacing.space_4}`,
	// textAlign: "left",
	verticalAlign: "middle",
};

globalStyle("th, td", {
	"@layer": {
		[baseLayer]: {
			...tableCellStyleRule,
		},
	},
});
globalStyle("th, td", {
	"@layer": {
		[baseLayer]: {
			textOverflow: "ellipsis",
			whiteSpace: "nowrap",
			overflow: "hidden",
		},
	},
});

export const thStyles = style({
	display: "table-cell",
	...tableCellStyleRule,
});

export const tdStyles = style({
	display: "table-cell",
	textOverflow: "ellipsis",
	whiteSpace: "nowrap",
	overflow: "hidden",
	...tableCellStyleRule,
});

globalStyle("thead th", {
	"@layer": {
		[baseLayer]: {
			whiteSpace: "nowrap",
		},
	},
});

globalStyle(`${tHeadStyles} ${thStyles}`, {
	"@layer": {
		[baseLayer]: {
			whiteSpace: "nowrap",
		},
	},
});

// Display table classes

export const tBodyStyles = style({
	display: "table-row-group",
});

export const tRowStyles = style({
	display: "table-row",
});

// Ensure that table cells have border bottom, unless they are the last row

const tableCellBorderStyleRule: StyleRule = {
	borderBottom: `1px solid ${vars.color.border_1}`,
};

globalStyle(
	`${tHeadStyles}:not(:last-child) ${thStyles}, ${tRowStyles}:not(:last-of-type) ${tdStyles}`,
	{
		"@layer": {
			[baseLayer]: {
				...tableCellBorderStyleRule,
			},
		},
	},
);

globalStyle("thead:not(:last-child) th, tr:not(:last-of-type) td", {
	"@layer": {
		[baseLayer]: {
			...tableCellBorderStyleRule,
		},
	},
});

/** -----------------------------------------------------------------------------
 * SCROLL BAR
 * ------------------------------------------------------------------------------- */

globalStyle("::-webkit-scrollbar", {
	"@layer": {
		[baseLayer]: {
			background: vars.color.background,
			width: vars.spacing.space_2,
		},
	},
});
globalStyle("::-webkit-scrollbar-thumb", {
	"@layer": {
		[baseLayer]: {
			background: vars.color.tint_2,
			borderRadius: vars.borderRadius.pill,
		},
	},
});

/** -----------------------------------------------------------------------------
 * ELEMENT SIZING
 * ------------------------------------------------------------------------------- */

export const elementHeight = {
	lg: vars.spacing.space_12,
	md: vars.spacing.space_10,
	sm: vars.spacing.space_8,
};

export const elementPaddingRaw = {
	lg: {
		x: vars.spacing.space_6,
		y: vars.spacing.space_3,
	},
	md: {
		x: vars.spacing.space_4,
		y: vars.spacing.space_2,
	},
	sm: {
		x: vars.spacing.space_3,
		y: vars.spacing.space_1,
	},
};

export const elementPadding = styleVariants({
	lg: {
		padding: `${elementPaddingRaw.lg.y} ${elementPaddingRaw.lg.x}`,
	},
	md: {
		padding: `${elementPaddingRaw.md.y} ${elementPaddingRaw.md.x}`,
	},
	sm: {
		padding: `${elementPaddingRaw.sm.y} ${elementPaddingRaw.sm.x}`,
	},
});

export type ElementSizeEnum = "lg" | "md" | "sm";
