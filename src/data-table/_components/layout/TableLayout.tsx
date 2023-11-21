import { flexRender } from "@tanstack/react-table";
import type { Table } from "@tanstack/react-table";
import { Box } from "../../../box";
import { tdStyles } from "../../../index.css";
import { getBodyStyle, rowStyles } from "./TableLayout.css";

export function TableLayout<TRowData>({
	table,
	isSelectable,
	hasRowActions,
}: {
	isSelectable: boolean | undefined;
	hasRowActions: boolean | undefined;
	table: Table<TRowData>;
}) {
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
