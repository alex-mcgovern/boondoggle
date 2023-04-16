/**
 * Unchanged* Eric Meyer's Reset CSS implemented with vanilla-extract:
 * https://meyerweb.com/eric/tools/css/reset/
 *
 * The original rule for `blockquote:before, blockquote:after, q:before, q:after`
 * contains fallback for `content` which is not possible with vanilla-extract.
 */
import { globalStyle, style } from "@vanilla-extract/css";

export const testStyle = style({ color: "red" });

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
        margin: 0,
        padding: 0,
        border: 0,
        fontSize: "100%",
        font: "inherit",
        verticalAlign: "baseline",
    }
);

globalStyle(
    `article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section`,
    {
        display: "block",
    }
);

globalStyle("body", {
    lineHeight: 1,
});

globalStyle("blockquote, q", {
    quotes: "none",
});

globalStyle(
    `blockquote:before, blockquote:after,
    q:before, q:after`,
    {
        // NOTE: The original also has `content: "''"` but that is not possible
        // to have duplicate rules with vanilla-extract.
        content: "none",
    }
);

globalStyle("table", {
    borderCollapse: "collapse",
    borderSpacing: 0,
});

globalStyle("button", {
    display: "block",
    appearance: "none",
    padding: 0,
    background: "none",
    border: "none",
    textDecoration: "none",
});

globalStyle(`input[type="search"]`, {
    appearance: "none",
});

globalStyle("button:not([disabled])", {
    cursor: "pointer",
});
