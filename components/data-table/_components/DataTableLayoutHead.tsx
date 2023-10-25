import { Box } from "../../box/Box"; import { DataTableLayoutColumnHeaderCell } from "./DataTableLayoutColumnHeaderCell"; import type { Table } from "@tanstack/react-table"; import type { UtilCssArgs } from "../../../src/styles/utils/util_css.css"; import { getHeadStyle } from "./DataTableLayoutHead.css"; import { tRow } from "../../../style.css";
/**
 * Renders the table head for the DataTable.
 */

export function DataTableLayoutHead<TTableData>({
	isSortable,
	isSticky,
	table,
	isSelectable,
	hasRowActions,
	...rest
}: {
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
} & UtilCssArgs) {
	return (
		<Box
			className={getHeadStyle({ isSelectable, hasRowActions })}
			{...rest}
		>
			{table.getHeaderGroups().map((header_group) => {
				return (
					<div className={tRow} key={header_group.id}>
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
