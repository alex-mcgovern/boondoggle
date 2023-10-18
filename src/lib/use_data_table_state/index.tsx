import {
	createColumnHelper,
	getCoreRowModel,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import type { ColumnDef, RowData, SortingState } from "@tanstack/react-table";
import { useMemo, useState } from "react";
import type { TDataTableRowActions } from "../../common-types";
import { Skeleton } from "../../components/skeleton";
import { dataTableFuzzyFilter } from "../data_table_fuzzy_filter";

type UseDataTableStateProps<TData extends RowData> = {
	/**
	 * React component to render a list of actions on each row
	 */
	RowActions?: TDataTableRowActions<TData>;

	/**
	 * An array of objects describing each row in the table
	 */
	data: Array<TData> | undefined;

	/**
	 * Column definitions for the tabular data
	 */
	// biome-ignore lint/suspicious/noExplicitAny: This is a generic type.
	initColumns: Array<ColumnDef<TData, any>>;

	/**
	 * The initial sorting state of the table
	 */
	initialSorting: SortingState | undefined;

	/**
	 * Whether the table should be filterable
	 */
	isFilterable: boolean | undefined;

	/**
	 * Whether the data is loading or not.
	 */
	isLoading: boolean | undefined;

	/**
	 * Whether to show pagination
	 */
	isPaginated: boolean | undefined;

	/**
	 * Whether the table should be sortable and show sorting controls
	 */
	isSortable: boolean | undefined;
};

export function useDataTableState<TData extends RowData>({
	RowActions,
	data,
	initColumns,
	initialSorting,
	isFilterable,
	isLoading,
	isPaginated,
	isSortable,
}: UseDataTableStateProps<TData>) {
	const [globalFilter, setGlobalFilter] = useState("");

	const columnHelper = createColumnHelper<TData>();

	const columns = useMemo(() => {
		return [
			// The original columns array
			...(isLoading
				? initColumns.map((initColumn) => {
						return {
							...initColumn,
							cell: () => {
								return <Skeleton />;
							},
						};
				  })
				: initColumns),

			// If the table has row action items, add a column for
			// the dropdown menu at the end of the columns array
			...(RowActions
				? [
						columnHelper.display({
							cell: ({ row }) => {
								return <RowActions row_data={row.original} />;
							},
							id: "actions",
						}),
				  ]
				: []),
		];
	}, [RowActions, columnHelper, initColumns, isLoading]);

	const tableData = useMemo(() => {
		return isLoading ? Array(10).fill({}) : data;
	}, [isLoading, data]);

	const table = useReactTable<TData>({
		columns,
		data: tableData || [],
		getCoreRowModel: getCoreRowModel(),
		...(isFilterable && {
			getFilteredRowModel: getFilteredRowModel(),
			globalFilterFn: dataTableFuzzyFilter,
			onGlobalFilterChange: setGlobalFilter,
		}),
		...(isPaginated && { getPaginationRowModel: getPaginationRowModel() }),
		...(isSortable && { getSortedRowModel: getSortedRowModel() }),
		initialState: {
			sorting: initialSorting,
		},
		state: {
			...(isFilterable && {
				globalFilter,
			}),
		},
	});

	return {
		globalFilter,
		setGlobalFilter,
		table,
	};
}
