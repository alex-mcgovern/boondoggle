import type { RowData, Table } from "@tanstack/react-table";
import { Box } from "../../../box";
import { Button } from "../../../button";

export function TablePagination<TData extends RowData>({
	strNext,
	strPage,
	strPrev,
	strResults,
	table,
}: {
	strNext: string;
	strPage: string;
	strPrev: string;
	strResults: string;
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
			)}

			<Box alignItems="center" display="flex" gap="space_2">
				<Button
					appearance="secondary"
					disabled={!table.getCanPreviousPage()}
					name="button_previous_page"
					onClick={() => table.previousPage()}
				>
					{strPrev}
				</Button>
				<Button
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
