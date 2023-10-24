import {
	StyleRule,
	assignVars,
	createGlobalTheme,
	globalLayer,
	globalStyle,
	keyframes,
	style,
	styleVariants,
} from "@vanilla-extract/css";
import {
	amber,
	amberA,
	blue,
	blueA,
	green,
	greenA,
	red,
	redA,
	slate,
	slateA,
} from "@radix-ui/colors";

/** -----------------------------------------------------------------------------
 * BREAKPOINTS
 * ------------------------------------------------------------------------------- */

export const DESKTOP = "only screen and (min-width: 1024px)";
export const TABLET = "only screen and (min-width: 768px)";
export const MOBILE = "only screen and (max-width: 767px)";

/** -----------------------------------------------------------------------------
 * CSS LAYERS
 * ------------------------------------------------------------------------------- */

export const resetLayer = globalLayer("reset");
export const baseLayer = globalLayer("base");
export const themeLayer = globalLayer("theme");
export const utilCssLayer = globalLayer("sprinkles");

/** -----------------------------------------------------------------------------
 * GLOBAL CSS VARIABLES
 * ------------------------------------------------------------------------------- */

export const v = createGlobalTheme(":root", {
	color: {
		backdrop: slateA.slateA11,
		background: slate.slate1,
		black: slate.slate12,
		border_active: slate.slate9,
		border_default: slate.slate7,
		border_hover: slate.slate8,
		btn_active: blue.blue11,
		btn_default: blue.blue9,
		btn_hover: blue.blue10,
		btn_tint: blue.blue5,
		focus_ring: blue.blue8,
		shadow: slateA.slateA5,
		text_high_contrast: slate.slate12,
		text_low_contrast: slate.slate11,
		tint_active: slate.slate5,
		tint_default: slate.slate3,
		tint_hover: slate.slate4,
		white: slate.slate1,
	},

	aspectRatio: {
		extraWide: "10 / 3",
		square: "1 / 1",
		tall: "9 / 16",
		wide: "16 / 9",
	},
	border: {
		border_default: `1px solid ${slate.slate7}`,
		border_hover: `1px solid ${slate.slate8}`,
	},
	radius: {
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
		light: "300",
		regular: "400",
		medium: "500",
		semibold: "600",
		bold: "700",
		extrabold: "800",
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
	},
	duration: {
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
		main_lg: "76rem",
		main_md: "48rem",
		main_sm: "30rem",
		"max-content": "max-content",
		"min-content": "min-content",
	},
});

/** -----------------------------------------------------------------------------
 * UTILITIES
 * ------------------------------------------------------------------------------- */

export function motion(styleRule: StyleRule): StyleRule {
	return {
		"@media": {
			"(prefers-reduced-motion: no-preference)": styleRule,
		},
	};
}

/** -----------------------------------------------------------------------------
 * A11Y
 * ------------------------------------------------------------------------------- */

export const focusStyleRule: StyleRule = {
	borderColor: v.color.btn_default,
	outline: `2px solid ${v.color.focus_ring} `,
	outlineOffset: "-2px",
	// outline: "none",
};

export const a11yError = style([
	{
		"@layer": {
			[themeLayer]: {
				borderColor: v.color.btn_default,
				selectors: {
					"&:is(&:focus, &:focus-visible), &:focus-within": {
						...focusStyleRule,
					},
				},
			},
		},
	},
]);

export const disabled = style({
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

export const focus = style([
	{
		"@layer": {
			[themeLayer]: {
				selectors: {
					"&:focus:not(:focus-visible)": {
						outline: "none",
					},

					"&:not(:is([disabled], [readonly])):focus-visible": {
						...focusStyleRule,
					},
				},
			},
		},
	},
]);

/** -----------------------------------------------------------------------------
 * ANIMATIONS
 * ------------------------------------------------------------------------------- */

export const fadeInBackdropKeyframes = keyframes({
	"0%": { background: "transparent" },
	"100%": { background: v.color.backdrop },
});

const fadeInKeyframes = keyframes({
	"0%": { opacity: 0 },
	"100%": { opacity: 1 },
});

export const animateFadeIn = style([
	motion({
		animation: `${fadeInKeyframes} ${v.duration.short} ease forwards`,
	}),
]);

const slideUpKeyframes = keyframes({
	"0%": { opacity: 0, transform: `translateY(${v.spacing.space_10})` },
	"100%": { opacity: 1 },
});

export const slideUp = style([
	motion({
		animation: `${slideUpKeyframes} ${v.duration.medium} ease forwards`,
	}),
]);

/** -----------------------------------------------------------------------------
 * CSS RESET
 *
 * Based on Eric Meyer's Reset CSS https://meyerweb.com/eric/tools/css/reset/
 *
 * @note The original rule for `blockquote:before, blockquote:after, q:before, q:after`
 * contains fallback for `content` which is not possible with vanilla-extract.
 * ------------------------------------------------------------------------------- */

globalStyle(
	`html,body,div,span,applet,object,iframe,
	 h1,h2,h3,h4,h5,h6,p,blockquote,pre,
	 a,abbr,acronym,address,big,cite,code,
	 del,dfn,em,img,ins,kbd,q,s,samp,
	 small,strike,strong,sub,sup,tt,var,
	 b,u,i,center,
	 dl,dt,dd,ol,ul,li,
	 fieldset,form,label,legend,
	 table,caption,tbody,tfoot,thead,tr,th,td,
	 article,aside,canvas,details,embed,figure,
	 figcaption,footer,header,hgroup,menu,nav,output,ruby,section,summary,
	 time,mark,audio,video`,
	{
		"@layer": {
			[resetLayer]: {
				boxSizing: "border-box",
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
	"article,\
	 aside,\
	 details,\
	 figcaption,\
	 figure,\
	 footer,\
	 header,\
	 hgroup,\
	 menu,\
	 nav,\
	 section",
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
	`blockquote:before,\
	 blockquote:after,\
     q:before,\
	 q:after`,
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
			WebkitAppearance: "none",
		},
	},
});

globalStyle("button:not([disabled]), input[type='button']:not([disabled])", {
	"@layer": {
		[resetLayer]: {
			cursor: "pointer",
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

globalStyle(
	`input[type=search]::-ms-clear,\
	 input[type=search]::-ms-reveal`,
	{
		"@layer": {
			[resetLayer]: {
				display: "none",
				height: 0,
				width: 0,
			},
		},
	},
);

/** -----------------------------------------------------------------------------
 * OVERRIDES
 * ------------------------------------------------------------------------------- */

export const hideLastpassStyle = style({});

globalStyle(`${hideLastpassStyle} div[data-lastpass-icon-root]`, {
	"@layer": {
		[resetLayer]: {
			display: "none !important",
			visibility: "hidden",
		},
	},
});

/** -----------------------------------------------------------------------------
 * RESPONSIVE VARS
 * ------------------------------------------------------------------------------- */

globalStyle(":root", {
	"@media": {
		[MOBILE]: {
			vars: {
				[v.fontSize.h1]: "2.5rem",
				[v.fontSize.h2]: "2rem",
				[v.fontSize.h3]: "1.625rem",
				[v.fontSize.h4]: "1.375rem",
				[v.fontSize.h5]: "1.125rem",
				[v.fontSize.h6]: "1rem",
			},
		},
	},
});

/** -----------------------------------------------------------------------------
 * GLOBAL STYLES
 * ------------------------------------------------------------------------------- */

globalStyle("html", {
	"@layer": {
		[baseLayer]: {
			accentColor: v.color.btn_default,
			background: v.color.background,
			fontSize: v.fontSize.root,
		},
	},
});

globalStyle("html, body", {
	"@layer": {
		[baseLayer]: {
			fontFamily: v.fontFamily.body,
			fontSize: v.fontSize.root,
			height: "100%",
		},
	},
});

globalStyle("body", {
	"@layer": {
		[baseLayer]: {
			color: v.color.text_high_contrast,
			lineHeight: v.lineHeight.bodyMd,
			WebkitFontSmoothing: "antialiased",
		},
	},
});

/** ---------------------------------------------
 * ANCHOR TAGS
 * ----------------------------------------------- */

globalStyle("a", {
	"@layer": {
		[baseLayer]: {
			color: v.color.btn_default,
			margin: 0,
			padding: 0,
			textDecoration: "none",
		},
	},
});

globalStyle("a:hover, a:focus, a:focus-visible", {
	"@layer": {
		[baseLayer]: {
			color: v.color.btn_active,
			textDecoration: "underline",
		},
	},
});

globalStyle("a:focus-visible", {
	"@layer": {
		[baseLayer]: {
			...focusStyleRule,
		},
	},
});

globalStyle("code", {
	"@layer": {
		[baseLayer]: {
			color: "inherit",
			fontFamily: "monospace",
			fontWeight: v.fontWeight.regular,
		},
	},
});

globalStyle("pre:has(code)", {
	"@layer": {
		[baseLayer]: {
			background: v.color.tint_default,
			borderRadius: v.radius.md,
			marginBottom: v.spacing.space_6,
			marginTop: v.spacing.space_6,
			overflow: "auto",
			padding: v.spacing.space_6,
		},
	},
});

/** ---------------------------------------------
 * HEADINGS
 * ----------------------------------------------- */

globalStyle("h1, h2, h3, h4, h5, h6", {
	"@layer": {
		[baseLayer]: {
			display: "block",
			fontWeight: v.fontWeight.medium,
			lineHeight: 1.4,
			marginBottom: v.spacing.space_2,
			overflowWrap: "break-word",
		},
	},
});

globalStyle("h1", {
	"@layer": {
		[baseLayer]: {
			fontSize: v.fontSize.h1,
			fontWeight: v.fontWeight.bold,
		},
	},
});

globalStyle("h2", {
	"@layer": {
		[baseLayer]: {
			fontSize: v.fontSize.h2,
			fontWeight: v.fontWeight.semibold,
		},
	},
});

globalStyle("h3", {
	"@layer": {
		[baseLayer]: {
			fontSize: v.fontSize.h3,
			fontWeight: v.fontWeight.semibold,
		},
	},
});

globalStyle("h4", {
	"@layer": {
		[baseLayer]: {
			fontSize: v.fontSize.h4,
			fontWeight: v.fontWeight.semibold,
		},
	},
});

globalStyle("h5", {
	"@layer": {
		[baseLayer]: {
			fontSize: v.fontSize.h5,
			fontWeight: v.fontWeight.semibold,
		},
	},
});

globalStyle("h6", {
	"@layer": {
		[baseLayer]: {
			fontSize: v.fontSize.h6,
			fontWeight: v.fontWeight.semibold,
		},
	},
});

globalStyle("hr", {
	"@layer": {
		[baseLayer]: {
			borderBottom: "none",
			borderColor: `${v.color.border_default} !important`,
			borderTop: "1px solid",
			marginBottom: v.spacing.space_6,
			marginTop: v.spacing.space_6,
		},
	},
});

/** ---------------------------------------------
 * INPUT / TEXTAREA
 * ----------------------------------------------- */

export const textFieldStyleRule: StyleRule = {
	background: v.color.background,
	border: `1px solid ${v.color.border_default}`,
	borderRadius: v.radius.md,
	color: v.color.text_high_contrast,
	fontWeight: v.fontWeight.regular,
	padding: `${v.spacing.space_2} ${v.spacing.space_4}`,
	...motion({
		transition: `ease ${v.duration.short} ease`,
		transitionProperty: "color, background-color, border-color",
	}),
};

globalStyle("input[type=checkbox]", {
	"@layer": {
		[baseLayer]: {
			accentColor: v.color.btn_default,
			cursor: "pointer",
			height: v.spacing.space_4,
			width: v.spacing.space_4,
		},
	},
});

globalStyle("textarea", {
	"@layer": {
		[baseLayer]: {
			...textFieldStyleRule,
		},
	},
});

globalStyle("textarea[readonly]", {
	"@layer": {
		[baseLayer]: {
			background: v.color.tint_default,
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
			color: v.color.text_low_contrast,
		},
	},
});

globalStyle(
	"input:not([disabled]):is(:hover), textarea:not([disabled]):is(:hover)",
	{
		"@layer": {
			[baseLayer]: {
				// background: v.color.tint_default,
				// borderColor: v.color.border_hover,
			},
		},
	},
);

globalStyle(
	"input:not([disabled]):is(:focus-visible), textarea:not([disabled]):is(:focus-visible)",
	{
		"@layer": {
			[baseLayer]: {
				// ...focusStyleRule,
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

/** ---------------------------------------------
 * LIST
 * ----------------------------------------------- */

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
			marginBottom: v.spacing.space_2,
		},
	},
});

globalStyle("ul li::marker, ol li::marker", {
	"@layer": {
		[baseLayer]: {
			color: v.color.btn_default,
			fontWeight: v.fontWeight.semibold,
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
			marginBottom: v.spacing.space_2,
			overflowWrap: "break-word",
		},
	},
});

/** ---------------------------------------------
 * TABLE
 * ----------------------------------------------- */

const tableStyleRule: StyleRule = {
	borderCollapse: "collapse",
	borderSpacing: 0,
	tableLayout: "auto",
	width: "100%",
};

globalStyle("table", {
	"@layer": {
		[baseLayer]: {
			...tableStyleRule,
		},
	},
});

export const table = style({
	display: "table",
	...tableStyleRule,
});

// Table head cell styles

const tHeadStyleRule: StyleRule = {
	fontSize: v.fontSize.bodySm,
	fontWeight: v.fontWeight.semibold,
};

globalStyle("thead", {
	"@layer": {
		[baseLayer]: {
			...tHeadStyleRule,
		},
	},
});

export const tHead = style({
	display: "table-header-group",
	...tHeadStyleRule,
});

// Table cells

const tableCellStyleRule: StyleRule = {
	fontSize: v.fontSize.bodyMd,
	padding: `${v.spacing.space_2} ${v.spacing.space_6}`,
	textAlign: "left",
	verticalAlign: "middle",
};

globalStyle("th, td", {
	"@layer": {
		[baseLayer]: {
			...tableCellStyleRule,
		},
	},
});

export const th = style({
	display: "table-cell",
	...tableCellStyleRule,
});

export const td = style({
	display: "table-cell",
	...tableCellStyleRule,
});

globalStyle("thead th", {
	"@layer": {
		[baseLayer]: {
			whiteSpace: "nowrap",
		},
	},
});

globalStyle(`${tHead} ${th}`, {
	"@layer": {
		[baseLayer]: {
			whiteSpace: "nowrap",
		},
	},
});

// Display table classes

export const tBody = style({
	display: "table-row-group",
});

export const tRow = style({
	display: "table-row",
});

// Ensure that table cells have border bottom, unless they are the last row

const tableCellBorderStyleRule: StyleRule = {
	borderBottom: `1px solid ${v.color.border_default}`,
};

globalStyle(
	`${tHead}:not(:last-child) ${th}, ${tRow}:not(:last-of-type) ${td}`,
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
 * COLOR OVERLAY
 * ------------------------------------------------------------------------------- */

export const theme = styleVariants({
	amber: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(v.color, {
					backdrop: amberA.amberA11,
					background: amber.amber1,
					black: amber.amber12,
					border_active: amber.amber9,
					border_default: amber.amber7,
					border_hover: amber.amber8,
					btn_active: amber.amber11,
					btn_default: amber.amber9,
					btn_hover: amber.amber10,
					btn_tint: amber.amber5,
					focus_ring: amber.amber8,
					shadow: amberA.amberA5,
					text_high_contrast: amber.amber12,
					text_low_contrast: amber.amber11,
					tint_active: amber.amber5,
					tint_default: amber.amber3,
					tint_hover: amber.amber4,
					white: amber.amber1,
				}),
			},
		},
	},
	blue: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(v.color, {
					backdrop: blueA.blueA11,
					background: blue.blue1,
					black: blue.blue12,
					border_active: blue.blue9,
					border_default: blue.blue7,
					border_hover: blue.blue8,
					btn_active: blue.blue11,
					btn_default: blue.blue9,
					btn_hover: blue.blue10,
					btn_tint: blue.blue5,
					focus_ring: blue.blue8,
					shadow: blueA.blueA5,
					text_high_contrast: blue.blue12,
					text_low_contrast: blue.blue11,
					tint_active: blue.blue5,
					tint_default: blue.blue3,
					tint_hover: blue.blue4,
					white: blue.blue1,
				}),
			},
		},
	},
	/**
	 * @note This is provided as an escape hatch to override variables
	 * inherited from a parent that already has a color overlay.
	 */
	default: {
		"@layer": {
			[themeLayer]: {
				backdrop: slateA.slateA11,
				background: slate.slate1,
				black: slate.slate12,
				border_active: slate.slate9,
				border_default: slate.slate7,
				border_hover: slate.slate8,
				btn_active: blue.blue11,
				btn_default: blue.blue9,
				btn_hover: blue.blue10,
				btn_tint: blue.blue5,
				focus_ring: blue.blue8,
				shadow: slateA.slateA5,
				text_high_contrast: slate.slate12,
				text_low_contrast: slate.slate11,
				tint_active: slate.slate5,
				tint_default: slate.slate3,
				tint_hover: slate.slate4,
				white: slate.slate1,
			},
		},
	},
	green: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(v.color, {
					backdrop: greenA.greenA11,
					background: green.green1,
					black: green.green12,
					border_active: green.green9,
					border_default: green.green7,
					border_hover: green.green8,
					btn_active: green.green11,
					btn_default: green.green9,
					btn_hover: green.green10,
					btn_tint: green.green5,
					focus_ring: green.green8,
					shadow: greenA.greenA5,
					text_high_contrast: green.green12,
					text_low_contrast: green.green11,
					tint_active: green.green5,
					tint_default: green.green3,
					tint_hover: green.green4,
					white: green.green1,
				}),
			},
		},
	},
	grey: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(v.color, {
					backdrop: redA.redA11,
					background: red.red1,
					black: red.red12,
					border_active: red.red9,
					border_default: red.red7,
					border_hover: red.red8,
					btn_active: red.red11,
					btn_default: red.red9,
					btn_hover: red.red10,
					btn_tint: red.red5,
					focus_ring: red.red8,
					shadow: redA.redA5,
					text_high_contrast: red.red12,
					text_low_contrast: red.red11,
					tint_active: red.red5,
					tint_default: red.red3,
					tint_hover: red.red4,
					white: red.red1,
				}),
			},
		},
	},
	red: {
		"@layer": {
			[themeLayer]: {
				vars: assignVars(v.color, {
					backdrop: redA.redA11,
					background: red.red1,
					black: red.red12,
					border_active: red.red9,
					border_default: red.red7,
					border_hover: red.red8,
					btn_active: red.red11,
					btn_default: red.red9,
					btn_hover: red.red10,
					btn_tint: red.red5,
					focus_ring: red.red8,
					shadow: redA.redA5,
					text_high_contrast: red.red12,
					text_low_contrast: red.red11,
					tint_active: red.red5,
					tint_default: red.red3,
					tint_hover: red.red4,
					white: red.red1,
				}),
			},
		},
	},
});

export type Theme = keyof typeof theme;
