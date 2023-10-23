import { flexRender } from "@tanstack/react-table";
import { tdStyles } from "../../../src/styles/stylesheet.css";
import { Box } from "../../box/Box";
import { getBodyStyle, rowStyles } from "./DataTableLayoutBody.css";
import type { Table } from "@tanstack/react-table";

/**
 * The body for a DataTable, comprising of <tbody>, <tr> & <td> elements.
 */
export function DataTableLayoutBody<TRowData>({
	table,
	isSelectable,
}: {
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
	table: Table<TRowData>;
}) {
	return (
		<div className={getBodyStyle({ isSelectable })}>
			{table.getRowModel().rows.map((row) => {
				return (
					<Box className={rowStyles} key={row.id}>
						{row.getVisibleCells().map((cell) => {
							return (
								<div className={tdStyles} key={cell.id}>
									{flexRender(
										cell.column.columnDef.cell,
										cell.getContext(),
									)}
								</div>
							);
						})}
					</Box>
				);
			})}
		</div>
	);
}
