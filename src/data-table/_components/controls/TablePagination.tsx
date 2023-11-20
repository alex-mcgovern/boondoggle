import type { RowData, Table } from "@tanstack/react-table";
import { Box } from "../../../box";
import { Button } from "../../../button";
import { PaginationOptions } from "../../types";

export function TablePagination<TRowData extends RowData>({
	table,
	paginationOptions,
}: {
	table: Table<TRowData>;
	paginationOptions: PaginationOptions | undefined;
}) {
	if (!paginationOptions) {
		return null;
	}

	const { strNext, strPage, strPrev, strResults } = paginationOptions;

	return (
		<Box
			alignItems="center"
			borderTop="border_default"
			display="flex"
			gap="space_2"
			marginBottom="space_2"
			paddingTop="space_2"
			paddingX="space_4"
		>
			<Box
				alignItems="center"
				as="span"
				display="flex"
				fontSize="bodyMd"
				gap="space_1"
				marginRight="auto"
				marginY="space_1"
			>
				<Box fontWeight="semibold">
					{table.getPrePaginationRowModel().rows.length}
				</Box>
				<Box>{strResults}.</Box>

				{!!table.getPageCount() && (
					<>
						<Box>{strPage}</Box>
						<Box fontWeight="semibold" whiteSpace="nowrap">
							{table.getState().pagination.pageIndex + 1} of{" "}
							{table.getPageCount()}
						</Box>
					</>
				)}
			</Box>

			<Box alignItems="center" display="flex" gap="space_2">
				<Button
					size="sm"
					appearance="secondary"
					disabled={!table.getCanPreviousPage()}
					name="button_previous_page"
					onClick={() => table.previousPage()}
				>
					{strPrev}
				</Button>
				<Button
					size="sm"
					appearance="secondary"
					disabled={!table.getCanNextPage()}
					name="button_next_page"
					onClick={() => table.nextPage()}
				>
					{strNext}
				</Button>
			</Box>
		</Box>
	);
}
