import { Box } from "../../box";
import type { Row, RowData } from "@tanstack/react-table";

/**
 * Renders a checkbox for use in a DataTable cell.
 */
export function DataTableCellSelectable<TData extends RowData>({
	row,
}: {
	/**
	 * The `react-table` row that is being controlled.
	 */
	row: Row<TData>;
}) {
	return (
		<Box alignItems="center" display="flex">
			<input
				defaultChecked={row.getIsSelected()}
				onChange={row.getToggleSelectedHandler()}
				type="checkbox"
			/>
		</Box>
	);
}
