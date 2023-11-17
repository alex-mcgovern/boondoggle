import {
	ColumnFiltersState,
	Row,
	createColumnHelper,
	getCoreRowModel,
	getFacetedMinMaxValues,
	getFacetedRowModel,
	getFacetedUniqueValues,
	getFilteredRowModel,
	getPaginationRowModel,
	getSortedRowModel,
	useReactTable,
} from "@tanstack/react-table";
import type {
	ColumnDef,
	RowData,
	RowSelectionState,
	SortingState,
	Updater,
} from "@tanstack/react-table";
import { useCallback, useMemo, useState } from "react";
import { Skeleton } from "../../skeleton";
import { TableSelectableCell } from "../_components/layout/TableSelectableCell";
import { TDataTableRowActions } from "../types";
import { dataTableFuzzyFilter } from "./dataTableFuzzyFilter";
import { arrayHasLength } from "../../_lib/array-has-length";

function dataTableFilterFnMultiSelect<TRowData extends RowData>(
	row: Row<TRowData>,
	column_id: string,
	// biome-ignore lint/suspicious/noExplicitAny: required by react-table
	filter_value: any,
) {
	const cell_value = row.getValue(column_id);

	if (!arrayHasLength(filter_value)) {
		return false;
	}

	return filter_value.includes(cell_value as string);
}

type UseDataTableStateProps<TData extends RowData> = {
	RowActions?: TDataTableRowActions<TData>;
	data: Array<TData> | undefined;
	enableMultiRowSelection: boolean | undefined;
	// biome-ignore lint/suspicious/noExplicitAny: This is a generic type.
	initColumns: Array<ColumnDef<TData, any>>;
	initialSorting: SortingState | undefined;
	isFilterable: boolean | undefined;
	isLoading: boolean | undefined;
	isPaginated: boolean | undefined;
	isSelectable: boolean | undefined;
	isSortable: boolean | undefined;
	onSelect: ((selection: TData[] | undefined) => void) | undefined;
};

export function useDataTableState<TData extends RowData>({
	RowActions,
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
}: UseDataTableStateProps<TData>) {
	const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
	const [globalFilter, setGlobalFilter] = useState("");
	const [rowSelection, setRowSelection] = useState({});

	const onRowSelectionChange = useCallback(
		(updater: Updater<RowSelectionState>) => {
			if (!isSelectable) {
				return null;
			}

			setRowSelection(updater);

			if (typeof updater === "function") {
				return onSelect?.(
					data?.reduce<TData[]>((acc, row, index) => {
						if (updater({})[index]) {
							acc.push(row);
						}
						return acc;
					}, []),
				);
			}

			return onSelect?.(undefined);
		},
		[data, onSelect, isSelectable],
	);

	const columnHelper = createColumnHelper<TData>();

	const columns = useMemo(() => {
		return [
			// If the table is selectable, add a column for
			// the checkbox at the start of the columns array
			...(isSelectable
				? [
						columnHelper.display({
							cell: TableSelectableCell,
							enableSorting: false,
							id: "select",
						}),
				  ]
				: []),

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
							getUniqueValues: () => [],
							header: () => null,
							enableColumnFilter: false,
							enableGlobalFilter: false,
							enableGrouping: false,
							enableMultiSort: false,
							enableSorting: false,
							enableHiding: false,
							enablePinning: false,
							enableResizing: false,
							filterFn: () => true,
						}),
				  ]
				: []),
		];
	}, [RowActions, columnHelper, initColumns, isLoading, isSelectable]);

	const tableData = useMemo(() => {
		return isLoading ? Array(10).fill({}) : data;
	}, [isLoading, data]);

	const table = useReactTable<TData>({
		columns,
		data: tableData || [],
		getCoreRowModel: getCoreRowModel(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		getFacetedMinMaxValues: getFacetedMinMaxValues(),
		getFilteredRowModel: getFilteredRowModel(),
		...(isFilterable && {
			globalFilterFn: dataTableFuzzyFilter,
			onGlobalFilterChange: setGlobalFilter,
		}),
		filterFns: {
			multiSelect: dataTableFilterFnMultiSelect,
		},
		...(isPaginated && {
			getPaginationRowModel: getPaginationRowModel(),
		}),
		...(isSortable && { getSortedRowModel: getSortedRowModel() }),
		...(isSelectable && {
			enableMultiRowSelection,
			onRowSelectionChange,
		}),
		onColumnFiltersChange: setColumnFilters,

		initialState: {
			sorting: initialSorting,
		},
		defaultColumn: {
			enableColumnFilter: false,
		},
		filterFromLeafRows: false,
		state: {
			columnFilters,
			...(isFilterable && {
				globalFilter,
			}),
			...(isSelectable && {
				rowSelection,
			}),
		},
	});

	return {
		globalFilter,
		setGlobalFilter,
		table,
		setColumnFilters,
	};
}
