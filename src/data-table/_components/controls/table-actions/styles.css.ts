import { style } from "@vanilla-extract/css";
import {
	MEDIA_QUERY_DESKTOP,
	MEDIA_QUERY_MOBILE,
	MEDIA_QUERY_TABLET,
	vars,
} from "../../../../index.css";
import { sprinkles } from "../../../../sprinkles/index.css";

export const tableActionsCSS = style([
	sprinkles({
		display: "grid",
		gap: "space_2",
		marginTop: "space_2",
		paddingBottom: "space_2",
		borderBottom: "border_default",
		alignItems: "start",
	}),
	{
		"@media": {
			[MEDIA_QUERY_MOBILE]: {
				gridTemplateAreas: `
                "actions"
                "globalFilter"
                "columnFilters"`,
				gridTemplateColumns: "1fr",
				gridTemplateRows: "min-content min-content",
			},
			[MEDIA_QUERY_TABLET]: {
				gridTemplateAreas: `
                "globalFilter actions"
                "columnFilters columnFilters"`,
				gridTemplateColumns: "1fr 1fr",
			},
			[MEDIA_QUERY_DESKTOP]: {
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
		"@media": {
			[MEDIA_QUERY_MOBILE]: {
				paddingBottom: vars.spacing.space_2,
				borderBottom: `1px solid ${vars.color.border_default}`,
			},
		},
	},
]);
