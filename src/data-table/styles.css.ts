import { style } from "@vanilla-extract/css";

import { css } from "../css/index.css";

/** -----------------------------------------------------------------------------
 * TABLE CELLS
 * ------------------------------------------------------------------------------- */

const commonCellCSS = style([
    css({
        alignItems: "center",
        borderBottom: "border_rule",
        display: "flex",

        fontStyle: "bodyMd",
        justifyContent: "start",
        paddingX: "space_4",

        paddingY: "space_2",
    }),
    {
        minWidth: "0", // Ensure that children with class `overflowEllipsis` work correctly
    },
]);

export const tableCellCSS = style([
    commonCellCSS,
    css({
        minHeight: "space_8",
    }),
]);

export const tableHeaderCellCSS = style([
    commonCellCSS,
    css({
        height: "space_8",
    }),
]);
