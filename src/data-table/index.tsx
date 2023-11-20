import type {
	ColumnDef,
	FilterFn,
	RowData,
	SortingState,
	VisibilityState,
} from "@tanstack/react-table";
import type { ReactNode } from "react";
import { arrayHasLength } from "../_lib/array-has-length";
import { Box } from "../box";
import { TDataTableRowActions } from "../data-table-row-actions";
import { tableStyles } from "../index.css";
import { TableColumnFilters } from "./_components/column-filters";
import { TablePagination } from "./_components/controls/TablePagination";
import { TableActions } from "./_components/controls/table-actions";
import { TableGlobalFilter } from "./_components/controls/table-global-filter";
import { TableHead } from "./_components/layout/TableHead";
import { TableLayout } from "./_components/layout/TableLayout";
import { TableNoResults } from "./_components/layout/TableNoResults";
import { useDataTableState } from "./_lib/useDataTableState";
import {
	FilteringOptions,
	PaginationOptions,
	WithTableOptionalSelectableRows,
} from "./types";

declare module "@tanstack/table-core" {
	interface FilterFns {
		multiSelect: FilterFn<unknown>;
	}
}

export type DataTableProps<TRowData extends RowData> =
	WithTableOptionalSelectableRows<TRowData> & {
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

		/**
		 * Options related to pagination.
		 */
		paginationOptions?: PaginationOptions;

		/**
		 * Options related to column visibility.
		 */
		columnVisibility?: VisibilityState;

		/**
		 * Options related to filtering.
		 */
		filteringOptions?: FilteringOptions<TRowData>;
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
	isLoading,
	isSelectable,
	isSortable,
	onSelect,
	RowActions,
	columnVisibility,
	strNoResults,
	paginationOptions,
	filteringOptions,
}: DataTableProps<TRowData>) {
	const { table } = useDataTableState({
		data,
		enableMultiRowSelection,
		initColumns,
		initialSorting,
		filteringOptions,
		isLoading,
		columnVisibility,
		paginationOptions,
		isSelectable,
		isSortable,
		onSelect,
		RowActions,
	});

	const hasData = arrayHasLength(table.getFilteredRowModel().rows);

	return (
		<Box>
			<TableActions
				globalFilter={
					<TableGlobalFilter<TRowData>
						table={table}
						filteringOptions={filteringOptions}
						disabled={isLoading}
					/>
				}
				columnFilters={
					<TableColumnFilters<TRowData>
						table={table}
						filteringOptions={filteringOptions}
					/>
				}
				actions={actions}
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
					table={table}
					filteringOptions={filteringOptions}
					strNoResults={strNoResults}
				/>
			)}

			{paginationOptions &&
				table.getFilteredRowModel().rows.length > 10 && (
					<TablePagination
						paginationOptions={paginationOptions}
						table={table}
					/>
				)}
		</Box>
	);
}
