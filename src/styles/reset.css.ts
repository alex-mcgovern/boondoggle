/**
 * Unchanged* Eric Meyer's Reset CSS implemented with vanilla-extract:
 * https://meyerweb.com/eric/tools/css/reset/
 *
 * The original rule for `blockquote:before, blockquote:after, q:before, q:after`
 * contains fallback for `content` which is not possible with vanilla-extract.
 */
import { globalStyle } from "@vanilla-extract/css";

import { resetLayer } from "./layers.css";

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
  `article, aside, details, figcaption, figure, 
footer, header, hgroup, menu, nav, section`,
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

globalStyle("table", {
  "@layer": {
    [resetLayer]: {
      // borderCollapse: "collapse",
      borderSpacing: 0,
    },
  },
});

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

globalStyle(`input[type="search"]`, {
  "@layer": {
    [resetLayer]: {
      appearance: "none",
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
