"use client";

import type {
	ColumnDef,
	FilterFn,
	RowData,
	SortingState,
} from "@tanstack/react-table";
import type { ReactNode } from "react";
import { arrayHasLength } from "../_lib/array-has-length";
import { Box } from "../box";
import { TDataTableRowActions } from "../data-table-row-actions";
import { tableStyles } from "../index.css";
import { TableActionsWrapper } from "./_components/controls/TableActionsWrapper";
import { TableGlobalFilterInput } from "./_components/controls/TableGlobalFilterInput";
import { TablePagination } from "./_components/controls/TablePagination";
import { TableHead } from "./_components/layout/TableHead";
import { TableLayout } from "./_components/layout/TableLayout";
import { TableNoResults } from "./_components/layout/TableNoResults";
import { useDataTableState } from "./_lib/useDataTableState";
import {
	WithTableOptionalFiltering,
	WithTableOptionalPagination,
	WithTableOptionalSelectableRows,
} from "./types";

declare module "@tanstack/table-core" {
	interface FilterFns {
		multiSelect: FilterFn<unknown>;
	}
}

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
			<TableActionsWrapper<TRowData>
				table={table}
				strApplyFilter={strApplyFilter}
				filterColumnStrMap={filterColumnStrMap}
				strMapFilterMode={strMapFilterMode}
				isFilterable={isFilterable}
				leftAction={
					isFilterable && strClearAllFilters ? (
						<TableGlobalFilterInput
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
					<TableHead<TRowData>
						isSortable={isSortable}
						isSelectable={isSelectable}
						hasRowActions={!!RowActions}
						table={table}
					/>
					<TableLayout<TRowData>
						isSelectable={isSelectable}
						hasRowActions={!!RowActions}
						table={table}
					/>
				</Box>
			)}

			{!hasData && (
				<TableNoResults
					globalFilter={globalFilter}
					setGlobalFilter={setGlobalFilter}
					strClearAllFilters={strClearAllFilters as string}
					strNoResults={strNoResults}
				/>
			)}

			{isPaginated && table.getFilteredRowModel().rows.length > 10 && (
				<TablePagination
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
