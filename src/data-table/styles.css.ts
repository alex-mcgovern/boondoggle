import { style } from "@vanilla-extract/css";

import { sprinkles } from "../sprinkles/index.css";

/** -----------------------------------------------------------------------------
 * TABLE CELLS
 * ------------------------------------------------------------------------------- */

const commonCellCSS = style([
    sprinkles({
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
    sprinkles({
        minHeight: "space_8",
    }),
]);

export const tableHeaderCellCSS = style([
    commonCellCSS,
    sprinkles({
        height: "space_8",
    }),
]);
