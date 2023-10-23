import { Box } from "../../box/Box";
import { DataTableControlPagination } from "./DataTableControlPagination";
import { DataTableInfoPageCount } from "./DataTableInfoPageCount";
import type { RowData, Table } from "@tanstack/react-table";

/**
 * Wraps actions for a data table.
 */
export function DataTablePaginationWrapper<TData extends RowData>({
	strNext,
	strPage,
	strPrev,
	strResults,
	table,
}: {
	/**
	 * String to use for the next button
	 */
	strNext: string;

	/**
	 * String to use for the page label
	 */
	strPage: string;

	/**
	 * String to use for the previous button
	 */
	strPrev: string;

	/**
	 * String to use for the results label
	 */
	strResults: string;

	/**
	 * The `react-table` instance to control.
	 */
	table: Table<TData>;
}) {
	return (
		<Box
			alignItems="center"
			borderTop="border_default"
			display="flex"
			gap="space_2"
			marginBottom="space_4"
			paddingTop="space_4"
			paddingX="space_6"
		>
			{strPage && strResults && (
				<DataTableInfoPageCount<TData>
					strPage={strPage}
					strResults={strResults}
					table={table}
				/>
			)}

			<DataTableControlPagination<TData>
				strNext={strNext}
				strPrev={strPrev}
				table={table}
			/>
		</Box>
	);
}
