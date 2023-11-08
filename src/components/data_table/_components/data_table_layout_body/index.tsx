import { flexRender } from "@tanstack/react-table";

import { tdStyles } from "../../../../styles/stylesheet.css";
import { Box } from "../../../box";
import { getBodyStyle, rowStyles } from "./styles.css";

import type { Table } from "@tanstack/react-table";

type DataTableLayoutBodyProps<TRowData> = {
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
};

/**
 * The body for a DataTable, comprising of <tbody>, <tr> & <td> elements.
 */
export function DataTableLayoutBody<TRowData>({
	table,
	isSelectable,
	hasRowActions,
}: DataTableLayoutBodyProps<TRowData>) {
	return (
		<div className={getBodyStyle({ isSelectable, hasRowActions })}>
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
