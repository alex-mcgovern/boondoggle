import { createContainer, style } from "@vanilla-extract/css";
import { recipe } from "@vanilla-extract/recipes";
import {
	CONTAINER_LG,
	CONTAINER_MD,
	CONTAINER_SM,
	vars,
} from "../../../../index.css";
import { sprinkles } from "../../../../sprinkles/index.css";

const tableActionsContainer = createContainer();

export const tableActionsContainerCSS = style([
	sprinkles({
		paddingY: "space_2",
		paddingX: "space_4",
		position: "sticky",
		background: "background",
		borderBottom: "border_1",
	}),
	{
		top: vars.height.header,
		containerName: tableActionsContainer,
		containerType: "inline-size",
	},
]);

export const tableActionsCSS = recipe({
	base: [
		sprinkles({
			display: "grid",
			gap: "space_2",
			alignItems: "start",
		}),
		{
			"@container": {
				[CONTAINER_SM]: {
					gridTemplateAreas: `
					"actions"
					"globalFilter"
					"columnFilters"`,
					gridTemplateColumns: "1fr",
				},
				[CONTAINER_MD]: {
					gridTemplateAreas: `
					"globalFilter actions"
					"columnFilters columnFilters"`,
					gridTemplateColumns: "1fr 1fr",
				},
				[CONTAINER_LG]: {
					gridTemplateAreas: `"actions columnFilters globalFilter"`,
					gridTemplateColumns: "min-content 1fr 12rem",
				},
			},
		},
	],
	variants: {
		withExtraActions: {
			false: {
				"@container": {
					[CONTAINER_SM]: {
						gridTemplateAreas: `
					"globalFilter"
					"columnFilters"`,
						gridTemplateColumns: "1fr",
					},
					[CONTAINER_MD]: {
						gridTemplateAreas: `
					"globalFilter"
					"columnFilters"`,
						gridTemplateColumns: "1fr 1fr",
					},
					[CONTAINER_LG]: {
						gridTemplateAreas: `"columnFilters globalFilter"`,
						gridTemplateColumns: "1fr 12rem",
					},
				},
			},
			true: {
				"@container": {
					[CONTAINER_SM]: {
						gridTemplateAreas: `
					"actions"
					"globalFilter"
					"columnFilters"`,
						gridTemplateColumns: "1fr",
					},
					[CONTAINER_MD]: {
						gridTemplateAreas: `
					"globalFilter actions"
					"columnFilters columnFilters"`,
						gridTemplateColumns: "1fr 1fr",
					},
					[CONTAINER_LG]: {
						gridTemplateAreas: `"actions columnFilters globalFilter"`,
						gridTemplateColumns: "min-content 1fr 12rem",
					},
				},
			},
		},
	},
});

export const globalFilterCSS = style({
	gridArea: "globalFilter",
});

export const columnFiltersCSS = style([
	sprinkles({
		display: "flex",
		gap: "space_2",
		alignItems: "center",
		flexWrap: "wrap",
	}),
	{
		gridArea: "columnFilters",
	},
]);

export const actionsCSS = style([
	sprinkles({
		display: "flex",
		gap: "space_2",
		alignItems: "center",
		justifyContent: "end",
	}),
	{
		gridArea: "actions",
		"@container": {
			[CONTAINER_SM]: {
				paddingBottom: vars.spacing.space_2,
				borderBottom: `1px solid ${vars.color.border_1}`,
			},
		},
	},
]);
