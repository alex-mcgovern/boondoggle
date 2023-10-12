import { tRowStyles } from "../../../../styles/stylesheet.css";
import { Box } from "../../../box";
import { DataTableLayoutColumnHeaderCell } from "../data_table_layout_column_header_cell";

import type { SprinklesArgs } from "../../../../styles/utils/get_sprinkles.css";
import type { Table } from "@tanstack/react-table";
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
 * Whether the table should allow rows to be selectable
 */
	isSelectable: boolean | undefined;

	/**
	 * Whether the row contains an actions button.
	 */
	hasRowActions: boolean | undefined;

	/**
	 * The `react-table` instance to control.
	 */
	table: Table<TTableData>;
} & SprinklesArgs;

/**
 * Renders the table head for the DataTable.
 */
export function DataTableLayoutHead<TTableData>({
	isSortable,
	isSticky,
	table,
	isSelectable, hasRowActions,
	...rest
}: DataTableLayoutHeadProps<TTableData>) {
	return (
		<Box className={getHeadStyle({ isSelectable, hasRowActions })} {...rest}>
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
