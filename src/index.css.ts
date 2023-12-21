import {
	amber,
	amberA,
	blackA,
	blue,
	blueA,
	green,
	greenA,
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
import { calc } from "@vanilla-extract/css-utils";
import { makeTheme, withPrefersMotion } from "./css-utils";

/** -----------------------------------------------------------------------------
 * MEDIA QUERIES
 * ------------------------------------------------------------------------------- */

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

export const DISABLED =
	":is([disabled], [aria-disabled='true'], [data-disabled])";
export const NOT_DISABLED = `:not(${DISABLED})`;

export const HOVER = ":is(:hover,[data-hovered])";
export const ACTIVE = ":is(:active,[data-pressed])";
export const FOCUS = ":is(:focus,[data-focused])";
export const FOCUS_VISIBLE = ":is(:focus-visible,[data-focus-visible])";

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
	color: makeTheme({
		primary: blue,
		secondary: slate,
		alpha: slateA,
		isOverlay: false,
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
		lg: `${blackA.blackA3} 0px 5px 40px`,
		md: `${blackA.blackA2} 0px 5px 20px`,
		sm: `${blackA.blackA1} 0px 5px 10px`,
		xs: `${blackA.blackA1} 0px 5px 5px`,
		inset_xs: `inset ${blackA.blackA1} 0px 2px 5px`,
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
	ease: {
		quart_in_out: "cubic-bezier(0.76, 0, 0.24, 1)",
	},
	fontSize: {
		bodyLg: "1rem", // 16px
		bodyMd: "0.875rem", // 14px
		bodySm: "0.8125rem", // 13px
		h1: "2.5rem", // 40px
		h2: "2rem", // 32 px
		h3: "1.75rem", // 28px
		h4: "1.5rem", // 24px
		h5: "1.25rem", // 20px
		h6: "1.125rem", // 18px
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
		"25dvh": "25dvh",
		"50%": "50%",
		"50dvh": "50dvh",
		"75%": "75%",
		"75dvh": "75dvh",
		"90dvh": "90dvh",
		"100%": "100%",
		"100dvh": "100dvh",
		auto: "auto",
		"min-content": "min-content",
		topBar: "3rem",
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
	},
	transitionDuration: {
		long: "600ms",
		medium: "400ms",
		short: "200ms",

		// Bespoke durations

		sideBarShowHide: "800ms",
	},
	width: {
		"": "0",
		"25%": "25%",
		"50%": "50%",
		"100%": "100%",
		"100vw": "100vw",
		auto: "auto",
		sideBar: "15rem",
		main_lg: "75rem",
		main_md: "55.5rem",
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
		animation: `${fadeInKeyframes} ${vars.transitionDuration.short} ${vars.ease.quart_in_out} forwards`,
	}),
]);

const slideUpKeyframes = keyframes({
	"0%": { opacity: 0, transform: `translateY(${vars.spacing.space_10})` },
	"100%": { opacity: 1 },
});

export const animateSlideUp = style([
	withPrefersMotion({
		animation: `${slideUpKeyframes} ${vars.transitionDuration.medium} ${vars.ease.quart_in_out} forwards`,
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
					makeTheme({
						primary: amber,
						secondary: amber,
						alpha: amberA,
						isOverlay: true,
					}),
				),
			},
		},
	},
	blue: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(
					vars.color,
					makeTheme({
						primary: blue,
						secondary: blue,
						alpha: blueA,
						isOverlay: true,
					}),
				),
			},
		},
	},
	default: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(
					vars.color,
					makeTheme({
						primary: blue,
						secondary: slate,
						alpha: slateA,
						isOverlay: false,
					}),
				),
			},
		},
	},
	green: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(
					vars.color,
					makeTheme({
						primary: green,
						secondary: green,
						alpha: greenA,
						isOverlay: true,
					}),
				),
			},
		},
	},
	grey: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(
					vars.color,
					makeTheme({
						primary: slate,
						secondary: slate,
						alpha: slateA,
						isOverlay: true,
					}),
				),
			},
		},
	},
	red: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(
					vars.color,
					makeTheme({
						primary: red,
						secondary: red,
						alpha: redA,
						isOverlay: true,
					}),
				),
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
	// outlineOffset: "-2px",
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
					[`&${FOCUS}:not(${FOCUS_VISIBLE})`]: {
						outline: "none",
					},

					[`&:not(${DISABLED})${FOCUS_VISIBLE}`]: {
						...a11yFocusStyleRule,
					},
				},
			},
		},
	},
]);

export const overflowEllipsis = style([
	{
		"@layer": {
			[themeLayer]: {
				textOverflow: "ellipsis",
				whiteSpace: "nowrap",
				overflow: "hidden",
			},
		},
	},
]);

export const hideScrollbar = style([
	{
		msOverflowStyle: "none",
		scrollbarGutter: "none",
		scrollbarWidth: "none",
		selectors: {
			"&::-webkit-scrollbar": {
				display: "none",
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
			border: "none",
			borderColor: `${vars.color.border_rule} !important`,
			borderTop: "1px solid",
			margin: "0",
			marginBottom: vars.spacing.space_6,
			marginTop: vars.spacing.space_6,
		},
	},
});

export const textFieldStyleRule: StyleRule = {
	background: vars.color.background,
	border: `1px solid ${vars.color.border_rule}`,
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
				// borderColor: vars.color.border_element_active,
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
			fontSize: vars.fontSize.bodyMd,
			lineHeight: vars.lineHeight.bodyMd,
			marginBottom: 0,
		},
	},
});

globalStyle("ul li::marker, ol li::marker", {
	"@layer": {
		[baseLayer]: {
			color: vars.color.text_low_contrast,
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
			fontSize: vars.fontSize.bodyMd,
			lineHeight: vars.lineHeight.bodyMd,
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
	fontWeight: vars.fontWeight.semibold,
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
	borderBottom: `1px solid ${vars.color.border_rule}`,
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
 * REUSABLE: UNSTYLED INPUT
 * ------------------------------------------------------------------------------- */

export const unstyledInput = style([
	{
		appearance: "none",
		background: "none",
		border: "none",
		color: "inherit",
		font: "inherit",
		margin: 0,

		selectors: {
			"&:focus": {
				outline: "none",
			},
			"&::-webkit-search-decoration, &::-webkit-search-cancel-button, &::-webkit-search-results-button, &::-webkit-search-results-decoration":
				{
					display: "none",
				},
			"&::-webkit-inner-spin-button, &::-webkit-outer-spin-button": {
				display: "none",
			},
		},
	},
]);

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
 * LAYOUT: FLOATING MENU
 * ------------------------------------------------------------------------------- */

const FM_PADDING = vars.spacing.space_1;
const FM_RADIUS = vars.borderRadius.md;

export const floatingMenu = createGlobalTheme(":root, ::backdrop", {
	container: {
		radius: FM_RADIUS,
		padding: FM_PADDING,
	},
	item: {
		height: elementHeight.sm,
		paddingX: calc.subtract(elementPaddingRaw.sm.x, FM_PADDING),
		radius: calc.subtract(FM_RADIUS, FM_PADDING),
	},
});
