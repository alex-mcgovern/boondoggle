import type {
	ColumnDef,
	Row,
	RowData,
	RowSelectionState,
	SortingState,

	Updater,
	VisibilityState} from "@tanstack/react-table";

import {
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
import { useCallback, useMemo, useState } from "react";

import type { FilteringOptions, PaginationOptions } from "../types";

import { arrayHasLength } from "../../_lib/array-has-length";
import { TableSelectableCell } from "../_components/layout/TableSelectableCell";
import { dataTableFuzzyFilter } from "./dataTableFuzzyFilter";

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

type UseDataTableStateProps<TRowData extends RowData> = {
	columnVisibility: VisibilityState | undefined;
	// biome-ignore lint/suspicious/noExplicitAny: This is a generic type.
	columns: Array<ColumnDef<TRowData, any>>;
	data: Array<TRowData> | undefined;
	enableMultiRowSelection: boolean | undefined;
	// ==== NEW PROPS ====
	filteringOptions: FilteringOptions<TRowData> | undefined;
	initialSorting: SortingState | undefined;
	isSelectable: boolean | undefined;

	isSortable: boolean | undefined;
	onSelect: ((selection: TRowData[] | undefined) => void) | undefined;
	paginationOptions: PaginationOptions | undefined;
};

export function useDataTableState<TRowData extends RowData>({
	columnVisibility,
	columns: initColumns,
	data,
	enableMultiRowSelection,
	filteringOptions,
	initialSorting,
	isSelectable,
	isSortable,
	onSelect,
	paginationOptions,
}: UseDataTableStateProps<TRowData>) {
	const [rowSelection, setRowSelection] = useState({});

	const onRowSelectionChange = useCallback(
		(updater: Updater<RowSelectionState>) => {
			if (!isSelectable) {
				return null;
			}

			setRowSelection(updater);

			if (typeof updater === "function") {
				return onSelect?.(
					data?.reduce<TRowData[]>((acc, row, index) => {
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

	const columnHelper = createColumnHelper<TRowData>();

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

			...initColumns,
		];
	}, [columnHelper, isSelectable, initColumns]);

	const table = useReactTable<TRowData>({
		columns,
		data: data || [],
		getCoreRowModel: getCoreRowModel(),
		getFacetedMinMaxValues: getFacetedMinMaxValues(),
		getFacetedRowModel: getFacetedRowModel(),
		getFacetedUniqueValues: getFacetedUniqueValues(),
		getFilteredRowModel: getFilteredRowModel(),
		...(!!filteringOptions?.columnFilterConfig && {
			globalFilterFn: dataTableFuzzyFilter,
		}),
		filterFns: {
			multiSelect: dataTableFilterFnMultiSelect,
		},
		...(!!paginationOptions && {
			getPaginationRowModel: getPaginationRowModel(),
		}),
		...(isSortable && { getSortedRowModel: getSortedRowModel() }),
		...(isSelectable && {
			enableMultiRowSelection,
			onRowSelectionChange,
		}),

		defaultColumn: {
			enableColumnFilter: false,
		},
		filterFromLeafRows: false,
		initialState: {
			columnVisibility,
			pagination: {
				pageSize: 25,
			},
			sorting: initialSorting,
		},
		state: {
			...(isSelectable && {
				rowSelection,
			}),
		},
	});

	return {
		table,
	};
}
