import * as RadixCollapsible from "@radix-ui/react-collapsible";
import {
	ColumnDef,
	FilterFn,
	RowData,
	SortingState,
	Table,
	VisibilityState,
	flexRender,
} from "@tanstack/react-table";

import { faBarsFilter, faTimes } from "@fortawesome/pro-solid-svg-icons";
import {
	ReactNode,
	createContext,
	useContext,
	useLayoutEffect,
	useState,
} from "react";
import { arrayHasLength } from "../_lib/array-has-length";
import { Box } from "../box";
import { Button } from "../button";
import { collapsibleContentAnimation } from "../collapsible/styles.css";
import { TDataTableRowActions } from "../data-table-row-actions";
import { Icon } from "../icon";
import { TableColumnFilters } from "./_components/column-filters";
import { TablePagination } from "./_components/controls/TablePagination";
import { TableActions } from "./_components/controls/table-actions";
import { TableGlobalFilter } from "./_components/controls/table-global-filter";
import { TableHeaderCell } from "./_components/layout/TableHeaderCell";
import { TableNoResults } from "./_components/layout/TableNoResults";
import { useDataTableState } from "./_lib/useDataGridState";
import { tableCellCSS } from "./styles.css";
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

		/**
		 * Grid template columns
		 */
		gridTemplateColumns?: string;
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
						strClearFilterInput={
							filteringOptions?.strClearFilterInput
						}
						strFilterPlaceholder={
							filteringOptions?.strFilterPlaceholder
						}
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
				<Box display="grid" __gridTemplateColumns={gridTemplateColumns}>
					{table
						.getHeaderGroups()
						.map((hg) =>
							hg.headers.map((h) => (
								<TableHeaderCell<TRowData>
									header={h}
									isSortable={isSortable}
									key={h.id}
								/>
							)),
						)}

					{table.getRowModel().rows.map((row) =>
						row.getVisibleCells().map((cell) => (
							<div className={tableCellCSS} key={cell.id}>
								{flexRender(
									cell.column.columnDef.cell,
									cell.getContext(),
								)}
							</div>
						)),
					)}
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
/** -----------------------------------------------------------------------------
 * CONTEXT PROVIDER FOR DATA GRID
 * ------------------------------------------------------------------------------- */

export const DataGridContext = createContext<
	| [
			Table<RowData> | undefined,
			React.Dispatch<React.SetStateAction<Table<RowData> | undefined>>,
	  ]
	| undefined
>(undefined);

const DataTableContext = createContext<Table<RowData> | undefined>(undefined);

export function V2DataGridProvider({
	children,
}: { children: React.ReactNode }) {
	return (
		<DataGridContext.Provider
			value={useState<Table<RowData> | undefined>(undefined)}
		>
			<DataGridFilterToggleProvider>
				{children}
			</DataGridFilterToggleProvider>
		</DataGridContext.Provider>
	);
}

function useDataGrid<TRowData extends RowData>() {
	const context = useContext(DataGridContext);

	if (context == null) {
		throw new Error(
			"NumericFilterModeContext must be used within a NumericFilterModeProvider",
		);
	}

	return context as [
		Table<TRowData> | undefined,
		React.Dispatch<React.SetStateAction<Table<TRowData> | undefined>>,
	];
}

/** -----------------------------------------------------------------------------
 * CONTEXT FOR MANAGING TABLE FILTER VISIBILITY
 * ------------------------------------------------------------------------------- */

export const DataGridFilterToggle = createContext<
	[boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export function DataGridFilterToggleProvider({
	children,
}: { children: React.ReactNode }) {
	return (
		<DataGridFilterToggle.Provider value={useState<boolean>(false)}>
			{children}
		</DataGridFilterToggle.Provider>
	);
}

function useDataGridFilterToggle() {
	const context = useContext(DataGridFilterToggle);

	if (context == null) {
		throw new Error(
			"useDataGridFilterToggle must be used within a DataGridFilterToggle",
		);
	}

	return context;
}

export function DataGridFilterToggleButton({
	strFilter,
}: {
	strFilter: React.ReactNode;
}) {
	const [isOpen, setIsOpen] = useDataGridFilterToggle();

	return (
		<Button
			// marginX="space_2"
			size="sm"
			appearance="secondary"
			name="filter"
			slotLeft={<Icon icon={isOpen ? faTimes : faBarsFilter} />}
			onClick={() => {
				setIsOpen((c) => !c);
			}}
		>
			{strFilter}
		</Button>
	);
}

/** -----------------------------------------------------------------------------
 * DATA GRID COLUMN FILTERS
 * ------------------------------------------------------------------------------- */

export function DataGridColumnFilters<TRowData>({
	filteringOptions,
}: {
	filteringOptions: FilteringOptions<TRowData> | undefined;
}) {
	const [table] = useDataGrid<TRowData>();

	const [isColumnFilterOpen, setIsColumnFilterOpen] =
		useDataGridFilterToggle();

	return (
		<RadixCollapsible.Root
			onOpenChange={setIsColumnFilterOpen}
			open={isColumnFilterOpen}
		>
			<RadixCollapsible.Content className={collapsibleContentAnimation}>
				<Box
					display="flex"
					alignItems="center"
					gap="space_2"
					borderBottom="border_1"
					paddingY="space_2"
					paddingX="space_4"
				>
					<TableColumnFilters<TRowData>
						table={table}
						filteringOptions={filteringOptions}
					/>
				</Box>
			</RadixCollapsible.Content>
		</RadixCollapsible.Root>
	);
}

/** -----------------------------------------------------------------------------
 * DATA GRID
 * ------------------------------------------------------------------------------- */

export function DataGrid<TRowData extends RowData>({
	columns: initColumns,
	data,
	enableMultiRowSelection = false,
	initialSorting,
	isLoading,
	isSelectable,
	gridTemplateColumns,
	isSortable,
	onSelect,
	RowActions,
	columnVisibility,
	paginationOptions,
	filteringOptions,
}: DataTableProps<TRowData> & { children: React.ReactNode }) {
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

	const [_, setTable] = useDataGrid<TRowData>();

	useLayoutEffect(() => {
		setTable(table);
	}, [table, setTable]);

	return (
		<DataTableContext.Provider value={table as Table<RowData>}>
			<DataGridColumnFilters<TRowData>
				filteringOptions={filteringOptions}
			/>
			<Box display="grid" __gridTemplateColumns={gridTemplateColumns}>
				{table
					.getHeaderGroups()
					.map((hg) =>
						hg.headers.map((h) => (
							<TableHeaderCell<TRowData>
								header={h}
								isSortable={isSortable}
								key={h.id}
							/>
						)),
					)}

				{table.getRowModel().rows.map((row) =>
					row.getVisibleCells().map((cell) => (
						<div className={tableCellCSS} key={cell.id}>
							{flexRender(
								cell.column.columnDef.cell,
								cell.getContext(),
							)}
						</div>
					)),
				)}
			</Box>
		</DataTableContext.Provider>
	);
}

export function DataGridGlobalFilter<TRowData extends RowData>({
	className,
	strClearFilterInput,
	strFilterPlaceholder,
}: {
	className?: string;
	strClearFilterInput: string | undefined;
	strFilterPlaceholder: string | undefined;
}) {
	const [table] = useDataGrid<TRowData>();

	return (
		<div className={className}>
			<TableGlobalFilter<TRowData>
				strClearFilterInput={strClearFilterInput}
				strFilterPlaceholder={strFilterPlaceholder}
				table={table}
			/>
		</div>
	);
}
