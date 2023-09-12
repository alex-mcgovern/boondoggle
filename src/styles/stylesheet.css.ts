import { globalStyle, style } from "@vanilla-extract/css";

import { a11yFocusStyleRule } from "./common/a11y.css";
import { MEDIA_QUERY_MOBILE } from "./common/media_queries.css";
import { baseLayer, resetLayer } from "./layers.css";
import { vars } from "./theme.css";
import { createAccessibleTransition } from "./utils/create_accessible_transition";

import type { StyleRule } from "@vanilla-extract/css";

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
    }
);

globalStyle(
    `article, aside, details, figcaption, figure, footer, header, hgroup, menu, nav, section`,
    {
        "@layer": {
            [resetLayer]: {
                display: "block",
            },
        },
    }
);

globalStyle("body", {
    "@layer": {
        [resetLayer]: {
            lineHeight: 1,
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
    }
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

globalStyle(`img, picture, video, canvas, svg`, {
    "@layer": {
        [resetLayer]: {
            display: `block`,
            maxWidth: `100%`,
        },
    },
});

globalStyle(`input, button, textarea, select`, {
    "@layer": {
        [resetLayer]: {
            font: `inherit`,
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

// INPUT DATE STYLES

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
                [vars.fontSize.h0]: "2.5rem",
                [vars.fontSize.h1]: "2rem",
                [vars.fontSize.h2]: "1.625rem",
                [vars.fontSize.h3]: "1.375rem",
                [vars.fontSize.h4]: "1.125rem",
            },
        },
    },
});

globalStyle(`*`, {
    "@layer": {
        [baseLayer]: { boxSizing: `border-box`, margin: 0 },
    },
});

globalStyle(`html`, {
    "@layer": {
        [baseLayer]: {
            accentColor: vars.color.button_default,
            background: vars.color.background,
            fontSize: vars.fontSize.root,
        },
    },
});

globalStyle(`html, body`, {
    "@layer": {
        [baseLayer]: {
            fontFamily: vars.fontFamily.body,
            fontSize: vars.fontSize.body_md,
            height: `100%`,
        },
    },
});

globalStyle(`body`, {
    "@layer": {
        [baseLayer]: {
            color: vars.color.text_high_contrast,
            lineHeight: vars.lineHeight.body_md,
            WebkitFontSmoothing: `antialiased`,
        },
    },
});

globalStyle(`a`, {
    "@layer": {
        [baseLayer]: {
            color: vars.color.button_default,
            margin: 0,
            padding: 0,
            textDecoration: "none",
        },
    },
});

globalStyle(`a:hover, a:focus, a:focus-visible`, {
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

globalStyle(`button`, {
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
            height: vars.spacing.space_5,
            width: vars.spacing.space_5,
        },
    },
});

globalStyle(`code`, {
    "@layer": {
        [baseLayer]: {
            color: "inherit",
            fontWeight: vars.fontWeight.normal,
        },
    },
});

globalStyle(`h1, h2, h3, h4, h5, h6`, {
    "@layer": {
        [baseLayer]: {
            display: "block",
            fontWeight: vars.fontWeight.medium,
            lineHeight: 1.4,
            marginBottom: vars.spacing.space_2,
            overflowWrap: `break-word`,
        },
    },
});

globalStyle(`h1`, {
    "@layer": {
        [baseLayer]: {
            fontSize: vars.fontSize.h1,
        },
    },
});

globalStyle(`h2`, {
    "@layer": {
        [baseLayer]: {
            fontSize: vars.fontSize.h2,
        },
    },
});

globalStyle(`h3`, {
    "@layer": {
        [baseLayer]: {
            fontSize: vars.fontSize.h3,
        },
    },
});

globalStyle(`h4`, {
    "@layer": {
        [baseLayer]: {
            fontSize: vars.fontSize.h4,
        },
    },
});

globalStyle(`h5`, {
    "@layer": {
        [baseLayer]: {
            fontSize: vars.fontSize.h5,
        },
    },
});

globalStyle(`h6`, {
    "@layer": {
        [baseLayer]: {
            fontSize: vars.fontSize.h6,
        },
    },
});

globalStyle(`hr`, {
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
    ...createAccessibleTransition({
        transition: `ease ${vars.transitionDuration.short} ease`,
        transitionProperty: "color, background-color, border-color",
    }),
};

globalStyle("input, textarea", {
    "@layer": {
        [baseLayer]: {
            ...textFieldStyleRule,
        },
    },
});

globalStyle("input[readonly], textarea[readonly]", {
    "@layer": {
        [baseLayer]: {
            background: vars.color.tint_default,
        },
    },
});

globalStyle("input::-webkit-outer-spin-button, input::-webkit-inner-spin-button", {
    "@layer": {
        [baseLayer]: {
            margin: 0,
            WebkitAppearance: "none",
        },
    },
});

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

globalStyle("input:not([disabled]):is(:hover), textarea:not([disabled]):is(:hover)", {
    "@layer": {
        [baseLayer]: {
            background: vars.color.tint_default,
            borderColor: vars.color.border_active,
        },
    },
});

globalStyle(
    "input:not([disabled]):is(:focus-visible), textarea:not([disabled]):is(:focus-visible)",
    {
        "@layer": {
            [baseLayer]: {
                ...a11yFocusStyleRule,
            },
        },
    }
);

globalStyle(
    "input[disabled]:is(:focus-visible, :focus), textarea[disabled]:is(:focus-visible, :focus)",
    {
        "@layer": {
            [baseLayer]: {
                outline: "none",
            },
        },
    }
);

globalStyle(`ul, ol`, {
    "@layer": {
        [baseLayer]: {
            marginBlockEnd: 0,
            marginBlockStart: 0,
            paddingInlineStart: 0,
        },
    },
});

globalStyle(`ul li, ol li`, {
    "@layer": {
        [baseLayer]: {
            listStylePosition: "inside",
            marginBottom: vars.spacing.space_2,
        },
    },
});

globalStyle(`ul li::marker, ol li::marker`, {
    "@layer": {
        [baseLayer]: {
            color: vars.color.button_default,
            fontWeight: vars.fontWeight.semibold,
        },
    },
});

globalStyle(`menu`, {
    "@layer": {
        [baseLayer]: {
            listStyleType: "none",
            margin: 0,
            padding: 0,
        },
    },
});

globalStyle(`p`, {
    "@layer": {
        [baseLayer]: {
            marginBottom: vars.spacing.space_2,
            overflowWrap: `break-word`,
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

globalStyle(`table`, {
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
    fontSize: vars.fontSize.body_sm,
    fontWeight: vars.fontWeight.semibold,
};

globalStyle(`thead`, {
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
    fontSize: vars.fontSize.body_sm,
    padding: vars.spacing.space_4,
    textAlign: "left",
    verticalAlign: "middle",
    width: "1px",
};

globalStyle(`th, td`, {
    "@layer": {
        [baseLayer]: {
            ...tableCellStyleRule,
        },
    },
});

export const thStyles = style({
    display: "table-cell",
    ...tableCellStyleRule,
});

export const tdStyles = style({
    display: "table-cell",
    ...tableCellStyleRule,
});

globalStyle(`thead th`, {
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

export const tRowStyles = style({
    display: "table-row",
});

export const tBodyStyles = style({
    display: "table-row-group",
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
    }
);

globalStyle(`thead:not(:last-child) th, tr:not(:last-of-type) td`, {
    "@layer": {
        [baseLayer]: {
            ...tableCellBorderStyleRule,
        },
    },
});
