"use client";

import type { ColumnDef, RowData, SortingState } from "@tanstack/react-table";
import type { ReactNode } from "react";
import type {
	TDataTableRowActions,
	WithTableOptionalFiltering,
	WithTableOptionalPagination,
	WithTableOptionalSelectableRows,
} from "../../common-types";
import { arrayHasLength } from "../../lib/array_has_length";
import { useDataTableState } from "../../lib/use_data_table_state";
import { tableStyles } from "../../styles/stylesheet.css";
import { Box } from "../box";
import { DataTableActionsWrapper } from "./_components/data_table_actions_wrapper";
import { DataTableFilterInput } from "./_components/data_table_filter_input";
import { DataTableInfoNoResults } from "./_components/data_table_info_no_results";
import { DataTableLayoutBody } from "./_components/data_table_layout_body";
import { DataTableLayoutHead } from "./_components/data_table_layout_head";
import { DataTablePaginationWrapper } from "./_components/data_table_pagination_wrapper";

export type DataTableProps<TRowData extends RowData> =
	WithTableOptionalPagination &
		WithTableOptionalSelectableRows<TRowData> &
		WithTableOptionalFiltering<TRowData> & {
			/**
			 * React component to render a list of actions on each row
			 */
			RowActions?: TDataTableRowActions<TRowData>;

			/**
			 * Up to 2 react nodes to render as actions for the table
			 */
			actions?: ReactNode | [ReactNode?, ReactNode?];

			/**
			 * Column definitions for the tabular data
			 */
			// biome-ignore lint/suspicious/noExplicitAny: required to be this way
			columns: Array<ColumnDef<TRowData, any>>;

			/**
			 * An array of objects describing each row in the table
			 */
			data: Array<TRowData> | undefined;

			/**
			 * The initial sorting state of the table
			 */
			initialSorting?: SortingState;

			/**
			 * Whether the data is loading or not.
			 */
			isLoading?: boolean;

			/**
			 * Whether the table should be sortable and show sorting controls
			 */
			isSortable?: boolean;

			/**
			 * The title of the no results message
			 */
			strNoResults: string;
		};

/**
 * Component to render tabular data with filtering/sorting controls.
 * Uses the `@tanstack/react-table` library to manage state and render the table.
 */
export function DataTable<TRowData extends RowData>({
	actions,
	columns: initColumns,
	data,
	enableMultiRowSelection = false,
	initialSorting,
	isFilterable,
	isLoading,
	isPaginated,
	isSelectable,
	isSortable,
	onSelect,
	RowActions,
	strApplyFilter,
	strClearAllFilters,
	strClearFilterInput,
	strFilterPlaceholder,
	strNext,
	strNoResults,
	strMapFilterMode,
	filterColumnStrMap,
	strPage,
	strPrev,
	strResults,
}: DataTableProps<TRowData>) {
	const { globalFilter, setGlobalFilter, table } = useDataTableState({
		data,
		enableMultiRowSelection,
		initColumns,
		initialSorting,
		isFilterable,
		isLoading,
		isPaginated,
		isSelectable,
		isSortable,
		onSelect,
		RowActions,
	});

	const hasData = arrayHasLength(table.getFilteredRowModel().rows);

	return (
		<Box>
			<DataTableActionsWrapper<TRowData>
				table={table}
				strApplyFilter={strApplyFilter}
				filterColumnStrMap={filterColumnStrMap}
				strMapFilterMode={strMapFilterMode}
				isFilterable={isFilterable}
				leftAction={
					isFilterable && strClearAllFilters ? (
						<DataTableFilterInput
							disabled={isLoading}
							globalFilter={globalFilter}
							placeholder={strFilterPlaceholder}
							setGlobalFilter={setGlobalFilter}
							strClearFilterInput={strClearFilterInput}
						/>
					) : null
				}
				rightActions={actions}
			/>

			{hasData && (
				<Box className={tableStyles}>
					<DataTableLayoutHead<TRowData>
						isSortable={isSortable}
						isSelectable={isSelectable}
						hasRowActions={!!RowActions}
						table={table}
					/>
					<DataTableLayoutBody<TRowData>
						isSelectable={isSelectable}
						hasRowActions={!!RowActions}
						table={table}
					/>
				</Box>
			)}

			{!hasData && (
				<DataTableInfoNoResults
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
					strClearAllFilters={strClearAllFilters as string}
					strNoResults={strNoResults}
				/>
			)}

			{isPaginated && table.getFilteredRowModel().rows.length > 10 && (
				<DataTablePaginationWrapper
					strNext={strNext}
					strPage={strPage}
					strPrev={strPrev}
					strResults={strResults}
					table={table}
				/>
			)}
		</Box>
	);
}
