import {
	amber,
	amberA,
	blackA,
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
	// slateDarkA,
	yellowDark,
	yellowDarkA,
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
import { calc } from "@vanilla-extract/css-utils";
import { makeDarkTheme, makeLightTheme, withPrefersMotion } from "./css-utils";

/** -----------------------------------------------------------------------------
 * MEDIA QUERIES
 * ------------------------------------------------------------------------------- */

export const MQ_DARK_MODE = "(prefers-color-scheme: dark)";

const BP = {
	xl: 1400,
	lg: 992,
	md: 768,
	sm: 576,
	xs: 0,
};

export const MQ_XL = `(min-width: ${BP.xl}px)`;
export const MQ_LG = `(min-width: ${BP.lg}px)`;
export const MQ_MD = `(min-width: ${BP.md}px)`;
export const MQ_SM = `(min-width: ${BP.sm}px)`;
export const MQ_XS = `(max-width: ${BP.xs}px)`;

export const MQ_SHOW_MOBILE_NAV = `(max-width: ${BP.md - 1}px)`;

export const CONTAINER_LG = `(width > ${BP.xl}px)`;
export const CONTAINER_MD = `(width >= ${BP.sm}px)`;
export const CONTAINER_SM = `(width < ${BP.sm - 1}px)`;

/** -----------------------------------------------------------------------------
 * SELECTORS
 * ------------------------------------------------------------------------------- */

const SELECTOR_IS_LINK_BUTTON_INPUT = ":is(a,button,input)";

export const DISABLED = ":is([disabled], [aria-disabled='true'])";
export const NOT_DISABLED = `:not(${DISABLED})`;

export const HOVER = ":is(:hover,[data-hovered])";
export const FOCUS = ":is(:focus,[data-focused])";

export const SELECTOR_IS_FOCUS = ":is(:focus-visible)";

const SELECTOR_IS_HOVER_FOCUS = ":is(:hover, :focus-visible)";

const SELECTOR_IS_ACTIVE = `:is(:active, [data-active='true'])`;

/**
 * Button/link/input: hover
 */
const hoverSelectorArray = [
	"&",
	SELECTOR_IS_LINK_BUTTON_INPUT,
	NOT_DISABLED,
	HOVER,
];

export const SELECTOR_LINK_BUTTON_INPUT_HOVER = hoverSelectorArray.join("");

/**
 * Button/link/input: focus
 */
const focusSelectorArray = [
	"&",
	SELECTOR_IS_LINK_BUTTON_INPUT,
	NOT_DISABLED,
	SELECTOR_IS_FOCUS,
];

export const SELECTOR_LINK_BUTTON_INPUT_FOCUS = focusSelectorArray.join("");

/**
 * Button/link/input: hover/focus
 */
const hoverFocusSelectorArray = [
	"&",
	SELECTOR_IS_LINK_BUTTON_INPUT,
	NOT_DISABLED,
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
	NOT_DISABLED,
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
	color: makeLightTheme({
		primary: blue,
		secondary: slate,
		alpha: slateA,
		isColorOverlay: false,
	}),
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
		md: `${blackA.blackA1} 0px 3px 12px`,
		sm: `${blackA.blackA1} 0px 1px 4px`,
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
		header: "3rem",
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

export const animateFadeInLong = style([
	withPrefersMotion({
		animation: `${fadeInKeyframes} ${vars.transitionDuration.long} ease forwards`,
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
				vars: assignVars(
					vars.color,
					makeLightTheme({
						primary: amber,
						secondary: amber,
						alpha: amberA,
						isColorOverlay: true,
					}),
				),

				"@media": {
					[MQ_DARK_MODE]: {
						vars: assignVars(
							vars.color,
							makeDarkTheme({
								primary: yellowDark,
								secondary: yellowDark,
								alpha: yellowDarkA,
								isColorOverlay: true,
							}),
						),
					},
				},
			},
		},
	},
	blue: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(
					vars.color,
					makeLightTheme({
						primary: blue,
						secondary: blue,
						alpha: blueA,
						isColorOverlay: true,
					}),
				),

				"@media": {
					[MQ_DARK_MODE]: {
						vars: assignVars(
							vars.color,
							makeDarkTheme({
								primary: blueDark,
								secondary: blueDark,
								alpha: blueDarkA,
								isColorOverlay: true,
							}),
						),
					},
				},
			},
		},
	},
	default: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(
					vars.color,
					makeLightTheme({
						primary: blue,
						secondary: slate,
						alpha: slateA,
						isColorOverlay: false,
					}),
				),

				"@media": {
					[MQ_DARK_MODE]: {
						vars: assignVars(
							vars.color,
							makeDarkTheme({
								primary: blueDark,
								secondary: slateDark,
								alpha: slateA,
								isColorOverlay: false,
							}),
						),
					},
				},
			},
		},
	},
	green: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(
					vars.color,
					makeLightTheme({
						primary: green,
						secondary: green,
						alpha: greenA,
						isColorOverlay: true,
					}),
				),

				"@media": {
					[MQ_DARK_MODE]: {
						vars: assignVars(
							vars.color,
							makeDarkTheme({
								primary: greenDark,
								secondary: greenDark,
								alpha: greenDarkA,
								isColorOverlay: true,
							}),
						),
					},
				},
			},
		},
	},
	grey: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(
					vars.color,
					makeLightTheme({
						primary: slate,
						secondary: slate,
						alpha: slateA,
						isColorOverlay: true,
					}),
				),

				"@media": {
					[MQ_DARK_MODE]: {
						vars: assignVars(
							vars.color,
							makeDarkTheme({
								primary: slateDark,
								secondary: slateDark,
								alpha: slateA,
								isColorOverlay: true,
							}),
						),
					},
				},
			},
		},
	},
	red: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(
					vars.color,
					makeLightTheme({
						primary: red,
						secondary: red,
						alpha: redA,
						isColorOverlay: true,
					}),
				),

				"@media": {
					[MQ_DARK_MODE]: {
						vars: assignVars(
							vars.color,
							makeDarkTheme({
								primary: redDark,
								secondary: redDark,
								alpha: redDarkA,
								isColorOverlay: true,
							}),
						),
					},
				},
			},
		},
	},
	purple: {
		"@layer": {
			[themeLayer]: {
				vars: makeLightTheme({
					primary: iris,
					secondary: iris,
					alpha: irisA,
					isColorOverlay: true,
				}),

				"@media": {
					[MQ_DARK_MODE]: {
						vars: assignVars(
							vars.color,
							makeDarkTheme({
								primary: irisDark,
								secondary: irisDark,
								alpha: irisDarkA,
								isColorOverlay: true,
							}),
						),
					},
				},
			},
		},
	},
});

export type ColorOverlay = keyof typeof variantColorOverlay;

/** -----------------------------------------------------------------------------
 * DARK MODE OVERRIDES
 * ------------------------------------------------------------------------------- */

export const variantDarkMode = styleVariants({
	true: {
		vars: assignVars(
			vars.color,
			makeDarkTheme({
				primary: blueDark,
				secondary: slateDark,
				alpha: slateA,
				isColorOverlay: false,
			}),
		),
	},
	false: {
		vars: assignVars(
			vars.color,
			makeLightTheme({
				primary: blue,
				secondary: slate,
				alpha: slateA,
				isColorOverlay: false,
			}),
		),
	},
});

globalStyle(`${variantDarkMode.true} ${variantColorOverlay.amber}`, {
	vars: assignVars(
		vars.color,
		makeDarkTheme({
			primary: yellowDark,
			secondary: yellowDark,
			alpha: yellowDarkA,
			isColorOverlay: true,
		}),
	),
});
globalStyle(`${variantDarkMode.true} ${variantColorOverlay.blue}`, {
	vars: assignVars(
		vars.color,
		makeDarkTheme({
			primary: blueDark,
			secondary: blueDark,
			alpha: blueDarkA,
			isColorOverlay: true,
		}),
	),
});
globalStyle(`${variantDarkMode.true} ${variantColorOverlay.default}`, {
	vars: assignVars(
		vars.color,
		makeDarkTheme({
			primary: blueDark,
			secondary: slateDark,
			alpha: slateA,
			isColorOverlay: false,
		}),
	),
});
globalStyle(`${variantDarkMode.true} ${variantColorOverlay.green}`, {
	vars: assignVars(
		vars.color,
		makeDarkTheme({
			primary: greenDark,
			secondary: greenDark,
			alpha: greenDarkA,
			isColorOverlay: true,
		}),
	),
});
globalStyle(`${variantDarkMode.true} ${variantColorOverlay.grey}`, {
	vars: assignVars(
		vars.color,
		makeDarkTheme({
			primary: slateDark,
			secondary: slateDark,
			alpha: slateA,
			isColorOverlay: true,
		}),
	),
});
globalStyle(`${variantDarkMode.true} ${variantColorOverlay.red}`, {
	vars: assignVars(
		vars.color,
		makeDarkTheme({
			primary: redDark,
			secondary: redDark,
			alpha: redDarkA,
			isColorOverlay: true,
		}),
	),
});
globalStyle(`${variantDarkMode.true} ${variantColorOverlay.purple}`, {
	vars: assignVars(
		vars.color,
		makeDarkTheme({
			primary: irisDark,
			secondary: irisDark,
			alpha: irisDarkA,
			isColorOverlay: true,
		}),
	),
});

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
				[`&${DISABLED}`]: {
					opacity: 0.5,
				},
				[`&${DISABLED}:hover`]: {
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

/**
 * Override the user-agent autofill color.
 * Especially problematic in dark mode.
 */
globalStyle(
	`input:-webkit-autofill,\
	input:autofill,\
	textarea:-webkit-autofill,\
	textarea:autofill`,
	{
		"@layer": {
			[resetLayer]: {
				boxShadow: `0 0 0px 30px ${vars.color.tint_1} inset`,
				WebkitTextFillColor: vars.color.text_high_contrast,
				caretColor: vars.color.text_high_contrast,
				fontSize: `${vars.fontSize.bodyMd} !important`,
			},
		},
	},
);

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
			cursor: "default",
		},
	},
});

globalStyle(":root", {
	"@media": {
		[MQ_XS]: {
			vars: {
				[vars.fontSize.h1]: "2.5rem",
				[vars.fontSize.h2]: "2rem",
				[vars.fontSize.h3]: "1.625rem",
				[vars.fontSize.h4]: "1.375rem",
				[vars.fontSize.h5]: "1.125rem",
				[vars.fontSize.h6]: "1rem",
			},
		},
		[MQ_DARK_MODE]: {
			vars: {
				...assignVars(
					vars.color,
					makeDarkTheme({
						primary: blueDark,
						secondary: slateDark,
						alpha: slateA,
						isColorOverlay: false,
					}),
				),

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
			scrollbarColor: `${vars.color.scrollbar_handle} ${vars.color.scrollbar_background}`,
		},
	},
});

// msOverflowStyle: "none",
// 		overflowX: "scroll",
// 		scrollbarGutter: "none",
// 		scrollbarWidth: "none",
// 		selectors: {
// 			"&::-webkit-scrollbar": {
// 				display: "none",
// 			},
// 		},

globalStyle("a", {
	"@layer": {
		[baseLayer]: {
			color: vars.color.button_default,
			margin: 0,
			padding: 0,
			textDecoration: "none",
			cursor: "default",
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
			cursor: "default",
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

/** -----------------------------------------------------------------------------
 * LIST ELEMENTS
 * ------------------------------------------------------------------------------- */

globalStyle("ul, ol", {
	"@layer": {
		[baseLayer]: {
			marginBlockEnd: 0,
			marginBlockStart: 0,
			paddingInlineStart: 0,
			marginInlineStart: vars.spacing.space_3,
		},
	},
});

globalStyle("ul li, ol li", {
	"@layer": {
		[baseLayer]: {
			marginBottom: 0,
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

/** -----------------------------------------------------------------------------
 * TABLE ELEMENTS
 * ------------------------------------------------------------------------------- */

/**
 * Some re-usable style rules that can apply table styling to different elements.
 */

const tableStyleRule: StyleRule = {
	borderCollapse: "collapse",
	borderSpacing: 0,
	tableLayout: "fixed",
	width: "100%",
};
const tHeadStyleRule: StyleRule = {
	fontSize: vars.fontSize.bodySm,
	fontWeight: vars.fontWeight.normal,
};

/**
 * Styles for outer table element.
 */
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
/**
 * Table head cell styles
 */
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

/**
 * Table cell styles
 */
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
globalStyle("td", {
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
			background: vars.color.scrollbar_background,
			width: vars.spacing.space_2,
		},
	},
});
globalStyle("::-webkit-scrollbar-thumb", {
	"@layer": {
		[baseLayer]: {
			background: vars.color.scrollbar_handle,
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

/** -----------------------------------------------------------------------------
 * FLOATING MENU VARS
 * ------------------------------------------------------------------------------- */

const menuRadius = vars.borderRadius.md;
const menuPadding = vars.spacing.space_1;

const itemInset = calc.multiply(menuPadding, 2);
const itemRadius = calc.subtract(menuRadius, menuPadding);

const itemHeightLg = calc.subtract(elementHeight.lg, itemInset);
const itemHeightMd = calc.subtract(elementHeight.md, itemInset);
const itemHeightSm = calc.subtract(elementHeight.sm, itemInset);

const itemPaddingXLg = calc.subtract(elementPaddingRaw.lg.x, itemInset);
const itemPaddingXMd = calc.subtract(elementPaddingRaw.md.x, itemInset);
const itemPaddingXSm = calc.subtract(elementPaddingRaw.sm.x, itemInset);

const itemPaddingYLg = calc.subtract(elementPaddingRaw.lg.y, itemInset);
const itemPaddingYMd = calc.subtract(elementPaddingRaw.md.y, itemInset);
const itemPaddingYSm = calc.subtract(elementPaddingRaw.sm.y, itemInset);

export const floatingMenuVars = createGlobalTheme(":root", {
	menuRadius,
	menuPadding,
	itemInset,
	itemRadius,
	itemHeightLg,
	itemHeightMd,
	itemHeightSm,
	itemPaddingXLg,
	itemPaddingXMd,
	itemPaddingXSm,
	itemPaddingYLg,
	itemPaddingYMd,
	itemPaddingYSm,
});
