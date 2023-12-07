import {
	ColumnDef,
	FilterFn,
	RowData,
	SortingState,
	VisibilityState,
	flexRender,
} from "@tanstack/react-table";
import * as React from "react";
import { arrayHasLength } from "../_lib/array-has-length";
import { Box } from "../box";
import { TDataTableRowActions } from "../data-table-row-actions";
import { TableColumnFilters } from "./_components/column-filters";
import { TablePagination } from "./_components/controls/TablePagination";
import { TableSortButton } from "./_components/controls/TableSortButton";
import { TableActions } from "./_components/controls/table-actions";
import { TableGlobalFilter } from "./_components/controls/table-global-filter";
import { TableNoResults } from "./_components/layout/TableNoResults";
import { useDataTableState } from "./_lib/useDataTableState";
import { tableCellCSS, tableHeaderCellCSS } from "./styles.css";
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
		actions?: React.ReactNode | [React.ReactNode?, React.ReactNode?];

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

		/**
		 * Grid template columns
		 */
		gridTemplateColumns: string;
	};

/**
 * Component to render tabular data with filtering/sorting controls.
 * Uses the `@tanstack/react-table` library to manage state and render the table.
 */
export function DataTable<TRowData extends RowData>({
	actions,
	columns,
	data,
	enableMultiRowSelection = false,
	initialSorting,
	isSelectable,
	gridTemplateColumns,
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
		columns,
		initialSorting,
		filteringOptions,
		columnVisibility,
		paginationOptions,
		isSelectable,
		isSortable,
		onSelect,
	});

	const hasData = arrayHasLength(table.getFilteredRowModel().rows);

	return (
		<Box>
			<TableActions
				globalFilter={
					<TableGlobalFilter<TRowData>
						table={table}
						filteringOptions={filteringOptions}
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
				<Box
					display="grid"
					borderTop="border_default"
					__gridTemplateColumns={
						RowActions
							? `${gridTemplateColumns} max-content`
							: gridTemplateColumns
					}
				>
					{table.getHeaderGroups().map((hg) =>
						hg.headers.map((h) => {
							const headerContent = h.isPlaceholder
								? null
								: flexRender(
										h.column.columnDef.header,
										h.getContext(),
								  );

							if (isSortable) {
								return (
									<div
										key={h.id}
										className={tableHeaderCellCSS}
									>
										<TableSortButton header={h}>
											{headerContent}
										</TableSortButton>
									</div>
								);
							}

							return (
								<div key={h.id} className={tableHeaderCellCSS}>
									{headerContent}
								</div>
							);
						}),
					)}
					{RowActions ? <div /> : null}

					{table.getRowModel().rows.map((row) => (
						<React.Fragment key={row.id}>
							{row.getVisibleCells().map((cell) => (
								<div className={tableCellCSS} key={cell.id}>
									{flexRender(
										cell.column.columnDef.cell,
										cell.getContext(),
									)}
								</div>
							))}
							{RowActions ? (
								<div className={tableCellCSS}>
									<RowActions row_data={row.original} />
								</div>
							) : null}
						</React.Fragment>
					))}
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
				table.getFilteredRowModel().rows.length > 25 && (
					<TablePagination
						paginationOptions={paginationOptions}
						table={table}
					/>
				)}
		</Box>
	);
}
