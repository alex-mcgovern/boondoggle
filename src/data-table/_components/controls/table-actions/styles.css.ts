import { createContainer, style } from "@vanilla-extract/css";
import {
	CONTAINER_LG,
	CONTAINER_MD,
	CONTAINER_SM,
	vars,
} from "../../../../index.css";
import { sprinkles } from "../../../../sprinkles/index.css";

const tableActionsContainer = createContainer();

export const tableActionsContainerCSS = style({
	containerName: tableActionsContainer,
	containerType: "inline-size",
	marginTop: "space_2",
	paddingBottom: "space_2",
	borderBottom: "border_default",
});

export const tableActionsCSS = style([
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
				gridTemplateRows: "min-content min-content",
			},
			[CONTAINER_MD]: {
				gridTemplateAreas: `
				"globalFilter actions"
				"columnFilters columnFilters"`,
				gridTemplateColumns: "1fr 1fr",
			},
			[CONTAINER_LG]: {
				gridTemplateAreas: `"globalFilter columnFilters actions"`,
				gridTemplateColumns: "12rem 1fr 1fr",
			},
		},
	},
]);

export const globalFilterCSS = style({
	gridArea: "globalFilter",
});

export const columnFiltersCSS = style([
	sprinkles({
		display: "flex",
		gap: "space_2",
		alignItems: "center",
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
				borderBottom: `1px solid ${vars.color.border_default}`,
			},
		},
	},
]);
