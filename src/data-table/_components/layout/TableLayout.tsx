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
		<>
			{table.getRowModel().rows.map((row) => {
				return (
					<>
						{row.getVisibleCells().map((cell) => {
							return (
								<Box
									borderBottom="border_1"
									paddingY="space_1"
									paddingX="space_4"
									display="flex"
									alignItems="center"
									justifyContent="start"
									fontStyle="bodyMd"
									// className={tdStyles}
									key={cell.id}
								>
									{flexRender(
										cell.column.columnDef.cell,
										cell.getContext(),
									)}
								</Box>
							);
						})}
					</>
				);
			})}
		</>
	);
}
