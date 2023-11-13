import { Children } from "react";

import { Box } from "../../../box";

import { Table } from "@tanstack/react-table";
import type { ReactNode } from "react";
import type { UtilCssArgs } from "../../../../styles/utils/util_css.css";
import { FilterPillMultiSelect } from "../data_table_filter_menu/FilterPillMultiSelect";

type DataTableActionsWrapperProps<TRowData> = {
	/**
	 * Action shown on the left-hand side
	 */
	leftAction?: ReactNode;

	table: Table<TRowData>;

	/**
	 * Action shown on the right-hand side
	 */
	rightActions?: ReactNode | [ReactNode?, ReactNode?];
} & UtilCssArgs;

/**
 * Wraps actions for a data table.
 */
export function DataTableActionsWrapper<TRowData>({
	leftAction,
	rightActions,
	table,
	...rest
}: DataTableActionsWrapperProps<TRowData>) {
	if (!leftAction && !rightActions) {
		return null;
	}

	return (
		<Box
			alignItems="center"
			borderBottom="border_default"
			display="flex"
			gap="space_2"
			marginTop="space_4"
			paddingBottom="space_4"
			{...rest}
		>
			{leftAction && <Box>{leftAction}</Box>}

			{table.getAllColumns().map((column) => {
				return (
					<FilterPillMultiSelect<TRowData>
						column={column}
						strApply="Apply"
						strMenuTitle={column.id}
						strPillText={column.id}
						key={column.id}
					/>
				);
			})}
			{rightActions && (
				<Box
					alignItems="center"
					display="flex"
					gap="space_2"
					marginLeft="auto"
				>
					{Children.map(rightActions, (action) => {
						return action;
					})}
				</Box>
			)}
		</Box>
	);
}
