import { useCallback } from "react";

import { Box } from "../../../box";
import { Button } from "../../../button";

import type { Table } from "@tanstack/react-table";
import type { BoxProps } from "../../../box";

type DataTableControlPaginationProps<TTableData> = {
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
} & BoxProps;

/**
 * A control for navigating a table's pages.
 */
export function DataTableControlPagination<TTableData>({
	strNext,
	strPrev,
	table,
	...rest
}: DataTableControlPaginationProps<TTableData>) {
	const goToPrevious = useCallback(() => {
		return table.previousPage();
	}, [table]);

	const goToNext = useCallback(() => {
		return table.nextPage();
	}, [table]);

	return (
		<Box alignItems="center" display="flex" gap="space_2" {...rest}>
			<Button
				appearance="secondary"
				disabled={!table.getCanPreviousPage()}
				name="button_previous_page"
				onClick={goToPrevious}
			>
				{strPrev}
			</Button>
			<Button
				appearance="secondary"
				disabled={!table.getCanNextPage()}
				name="button_next_page"
				onClick={goToNext}
			>
				{strNext}
			</Button>
		</Box>
	);
}
