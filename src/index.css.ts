import {
	amber,
	amberA,
	blue,
	blueA,
	green,
	greenA,
	iris,
	irisA,
	red,
	redA,
	slate,
	slateA,
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

export const MEDIA_QUERY_DESKTOP = "only screen and (min-width: 1024px)";

export const MEDIA_QUERY_TABLET = "only screen and (min-width: 512px)";

export const MEDIA_QUERY_MOBILE = "only screen and (max-width: 511x)";

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

export const vars = createGlobalTheme(":root", {
	color: {
		black: slate.slate12,
		white: slate.slate1,

		text_low_contrast: slate.slate11,
		text_high_contrast: slate.slate12,

		background: slate.slate1,
		backdrop: slateA.slateA11,
		shadow: slateA.slateA4,

		border_default: slate.slate6,
		border_active: slate.slate8,
		border_hover: slate.slate7,

		button_tint: blue.blue5,
		button_default: blue.blue9,
		button_hover: blue.blue10,
		button_active: blue.blue11,

		tint_default: slate.slate3,
		tint_hover: slate.slate4,
		tint_active: slate.slate5,

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
		lg: "0 8px 24px rgba(140,149,159,0.2)",
		md: "0 3px 6px rgba(140,149,159,0.15)",
		sm: "0 1px 0 rgba(31,35,40,0.04)",
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
		topBar: "4rem",
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
					text_high_contrast: amber.amber12,

					background: amber.amber1,
					backdrop: amberA.amberA11,
					shadow: amberA.amberA4,

					border_default: amber.amber6,
					border_active: amber.amber8,
					border_hover: amber.amber7,

					button_tint: amber.amber5,
					button_default: amber.amber9,
					button_hover: amber.amber10,
					button_active: amber.amber11,

					tint_default: amber.amber3,
					tint_hover: amber.amber4,
					tint_active: amber.amber5,

					focus_ring: amber.amber7,
				}),
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
					text_high_contrast: blue.blue12,

					background: blue.blue1,
					backdrop: blueA.blueA11,
					shadow: blueA.blueA4,

					border_default: blue.blue6,
					border_active: blue.blue8,
					border_hover: blue.blue7,

					button_tint: blue.blue5,
					button_default: blue.blue9,
					button_hover: blue.blue10,
					button_active: blue.blue11,

					tint_default: blue.blue3,
					tint_hover: blue.blue4,
					tint_active: blue.blue5,

					focus_ring: blue.blue7,
				}),
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
					backdrop: slateA.slateA11,
					shadow: slateA.slateA4,

					border_default: slate.slate6,
					border_active: slate.slate8,
					border_hover: slate.slate7,

					button_tint: blue.blue5,
					button_default: blue.blue9,
					button_hover: blue.blue10,
					button_active: blue.blue11,

					tint_default: slate.slate3,
					tint_hover: slate.slate4,
					tint_active: slate.slate5,

					focus_ring: blue.blue7,
				}),
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
					text_high_contrast: green.green12,

					background: green.green1,
					backdrop: greenA.greenA11,
					shadow: greenA.greenA4,

					border_default: green.green6,
					border_active: green.green8,
					border_hover: green.green7,

					button_tint: green.green5,
					button_default: green.green9,
					button_hover: green.green10,
					button_active: green.green11,

					tint_default: green.green3,
					tint_hover: green.green4,
					tint_active: green.green5,

					focus_ring: green.green7,
				}),
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
					text_high_contrast: slate.slate12,

					background: slate.slate1,
					backdrop: slateA.slateA11,
					shadow: slateA.slateA4,

					border_default: slate.slate6,
					border_active: slate.slate8,
					border_hover: slate.slate7,

					button_tint: slate.slate5,
					button_default: slate.slate9,
					button_hover: slate.slate10,
					button_active: slate.slate11,

					tint_default: slate.slate3,
					tint_hover: slate.slate4,
					tint_active: slate.slate5,

					focus_ring: slate.slate7,
				}),
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
					text_high_contrast: red.red12,

					background: red.red1,
					backdrop: redA.redA11,
					shadow: redA.redA4,

					border_default: red.red6,
					border_active: red.red8,
					border_hover: red.red7,

					button_tint: red.red5,
					button_default: red.red9,
					button_hover: red.red10,
					button_active: red.red11,

					tint_default: red.red3,
					tint_hover: red.red4,
					tint_active: red.red5,

					focus_ring: red.red7,
				}),
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
					text_high_contrast: iris.iris12,

					background: iris.iris1,
					backdrop: irisA.irisA11,
					shadow: irisA.irisA4,

					border_default: iris.iris6,
					border_active: iris.iris8,
					border_hover: iris.iris7,

					button_tint: iris.iris5,
					button_default: iris.iris9,
					button_hover: iris.iris10,
					button_active: iris.iris11,

					tint_default: iris.iris3,
					tint_hover: iris.iris4,
					tint_active: iris.iris5,

					focus_ring: iris.iris7,
				}),
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
			background: vars.color.tint_default,
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
			borderColor: `${vars.color.border_default} !important`,
			borderTop: "1px solid",
			marginBottom: vars.spacing.space_6,
			marginTop: vars.spacing.space_6,
		},
	},
});

export const textFieldStyleRule: StyleRule = {
	background: vars.color.background,
	border: `1px solid ${vars.color.border_default}`,
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
			background: vars.color.tint_default,
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
				// background: vars.color.tint_default,
				// borderColor: vars.color.border_hover,
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
	borderBottom: `1px solid ${vars.color.border_default}`,
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
