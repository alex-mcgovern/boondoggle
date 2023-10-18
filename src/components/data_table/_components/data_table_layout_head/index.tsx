import { tRowStyles } from "../../../../styles/stylesheet.css";
import { Box } from "../../../box";
import { DataTableLayoutColumnHeaderCell } from "../data_table_layout_column_header_cell";

import type { Table } from "@tanstack/react-table";
import type { UtilCssArgs } from "../../../../styles/utils/util_css.css";
import { getHeadStyle } from "./styles.css";

type DataTableLayoutHeadProps<TTableData> = {
	/**
	 * Whether column is sortable.
	 */
	isSortable: boolean | undefined;

	/**
	 * Whether the table head is sticky
	 */
	isSticky?: boolean;

	/**
	 * Whether the row contains an actions button.
	 */
	hasRowActions: boolean | undefined;

	/**
	 * The `react-table` instance to control.
	 */
	table: Table<TTableData>;
} & UtilCssArgs;

/**
 * Renders the table head for the DataTable.
 */
export function DataTableLayoutHead<TTableData>({
	isSortable,
	isSticky,
	table,
	hasRowActions,
	...rest
}: DataTableLayoutHeadProps<TTableData>) {
	return (
		<Box className={getHeadStyle({ hasRowActions })} {...rest}>
			{table.getHeaderGroups().map((header_group) => {
				return (
					<div className={tRowStyles} key={header_group.id}>
						{header_group.headers.map((header) => {
							return (
								<DataTableLayoutColumnHeaderCell<TTableData>
									header={header}
									isSortable={isSortable}
									isSticky={isSticky}
									key={header.id}
								/>
							);
						})}
					</div>
				);
			})}
		</Box>
	);
}
