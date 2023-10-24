import { Box } from "../../box/Box";
import { Button } from "../../button/Button";
import type { Table } from "@tanstack/react-table";

/**
 * A control for navigating a table's pages.
 */
export function DataTableControlPagination<TTableData>({
	strNext,
	strPrev,
	table,
}: {
	/**
	 * String to use for the next button
	 */
	strNext: string;

	/**
	 * String to use for the previous button
	 */
	strPrev: string;

	/**
	 * The `react-table` instance to control.
	 */
	table: Table<TTableData>;
}) {
	return (
		<Box alignItems="center" display="flex" gap="space_2">
			<Button
				variant="secondary"
				disabled={!table.getCanPreviousPage()}
				name="btn_previous_page"
				onClick={() => table.previousPage()}
			>
				{strPrev}
			</Button>
			<Button
				variant="secondary"
				disabled={!table.getCanNextPage()}
				name="btn_next_page"
				onClick={() => table.nextPage()}
			>
				{strNext}
			</Button>
		</Box>
	);
}
