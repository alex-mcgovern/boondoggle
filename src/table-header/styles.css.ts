import { createContainer, style } from "@vanilla-extract/css";

import { css } from "../css/index.css";
import { CONTAINER_LG, CONTAINER_MD, CONTAINER_SM, vars } from "../index.css";

const TableHeader = createContainer();

export const tableHeaderContainerCSS = style([
    css({
        marginY: "space_3",
    }),
    {
        containerName: TableHeader,
        containerType: "inline-size",
    },
]);

export const tableHeaderGridCSS = style([
    css({
        alignItems: "start",
        display: "grid",
        gap: "space_2",
    }),
    {
        "@container": {
            [CONTAINER_LG]: {
                gridTemplateAreas: '"globalFilter columnFilters actions"',
                gridTemplateColumns: "12rem 1fr min-content",
            },
            [CONTAINER_MD]: {
                gridTemplateAreas: `
				"globalFilter actions"
				"columnFilters columnFilters"`,
                gridTemplateColumns: "1fr 1fr",
            },
            [CONTAINER_SM]: {
                gridTemplateAreas: `
				"actions"
				"globalFilter"
				"columnFilters"`,
                gridTemplateColumns: "1fr",
            },
        },

        selectors: {
            "&:empty": {
                display: "none",
            },
        },
    },
]);

export const searchContainerCSS = style({
    gridArea: "globalFilter",
});

export const filtersContainerCSS = style([
    css({
        alignItems: "center",
        display: "flex",
        flexWrap: "wrap",
        gap: "space_2",
    }),
    {
        gridArea: "columnFilters",
    },
]);

export const actionsContainerCSS = style([
    css({
        alignItems: "center",
        display: "flex",
        gap: "space_2",
        justifyContent: "end",
    }),
    {
        "@container": {
            [CONTAINER_SM]: {
                borderBottom: `1px solid ${vars.color.border_rule}`,
                paddingBottom: vars.spacing.space_2,
            },
        },
        gridArea: "actions",
    },
]);
