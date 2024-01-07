import { createContainer, style } from "@vanilla-extract/css";

import { css } from "../../../../css/index.css";
import {
    CONTAINER_LG,
    CONTAINER_MD,
    CONTAINER_SM,
    vars,
} from "../../../../index.css";

const tableActionsContainer = createContainer();

export const tableActionsContainerCSS = style([
    css({
        marginY: "space_3",
    }),
    {
        containerName: tableActionsContainer,
        containerType: "inline-size",
    },
]);

export const tableActionsCSS = style([
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
    },
]);

export const globalFilterCSS = style({
    gridArea: "globalFilter",
});

export const columnFiltersCSS = style([
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

export const actionsCSS = style([
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
