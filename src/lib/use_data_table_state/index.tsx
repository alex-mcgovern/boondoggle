import {
    createColumnHelper,
    getCoreRowModel,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
    useReactTable,
} from "@tanstack/react-table";
import { useCallback, useMemo, useState } from "react";

import { DataTableCellSelectable } from "../../components/data_table/_components/data_table_cell_selectable";
import { dataTableFuzzyFilter } from "../data_table_fuzzy_filter";

import type { TDataTableRowActions } from "../../common-types";
import type { ColumnDef, Row, RowData, RowSelectionState, Updater } from "@tanstack/react-table";

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
     * Boolean to enable multi-row selection.
     */
    enableMultiRowSelection: boolean | undefined;

    /**
     * Column definitions for the tabular data
     */
    initColumns: Array<ColumnDef<TData, any>>;

    /**
     * Whether the table should be filterable
     */
    isFilterable: boolean | undefined;

    /**
     * Whether to show pagination
     */
    isPaginated: boolean | undefined;

    /**
     * Whether the entire row should be clickable
     */
    isRowClickable?: boolean;

    /**
     * Whether the table should allow rows to be selectable
     */
    isSelectable: boolean | undefined;

    /**
     * Whether the table should be sortable and show sorting controls
     */
    isSortable: boolean | undefined;

    /**
     * Function called on a new selection, with the current selection
     */
    onSelect: ((selection: TData[] | undefined) => void) | undefined;
};

export function useDataTableState<TData extends RowData>({
    RowActions,
    data,
    enableMultiRowSelection,
    initColumns,
    isFilterable,
    isPaginated,
    isRowClickable,
    isSelectable,
    isSortable,
    onSelect,
}: UseDataTableStateProps<TData>) {
    const [globalFilter, setGlobalFilter] = useState("");

    const [rowSelection, setRowSelection] = useState({});

    const onRowSelectionChange = useCallback(
        (updater: Updater<RowSelectionState>) => {
            setRowSelection(updater);

            if (typeof updater === "function") {
                return onSelect?.(
                    data?.reduce<TData[]>((acc, row, index) => {
                        if (updater({})[index]) {
                            acc.push(row);
                        }
                        return acc;
                    }, [])
                );
            }

            return onSelect?.(undefined);
        },
        [data, onSelect]
    );

    const columnHelper = createColumnHelper<TData>();

    const CellSelectable = useCallback(
        ({ row }: { row: Row<TData> }) => {
            return (
                <DataTableCellSelectable
                    isRowClickable={isRowClickable}
                    row={row}
                />
            );
        },
        [isRowClickable]
    );

    const columns = useMemo(() => {
        return [
            // If the table is selectable, add a column for
            // the checkbox at the start of the columns array
            ...(isSelectable
                ? [
                      columnHelper.display({
                          cell: CellSelectable,
                          enableSorting: false,
                          id: "select",
                          size: 16,
                      }),
                  ]
                : []),

            // The original columns array
            ...initColumns,

            // If the table has row action items, add a column for
            // the dropdown menu at the end of the columns array
            ...(RowActions
                ? [
                      columnHelper.display({
                          cell: ({ row }) => {
                              return <RowActions row_data={row.original} />;
                          },
                          id: "actions",
                          size: 300,
                      }),
                  ]
                : []),
        ];
    }, [CellSelectable, RowActions, columnHelper, initColumns, isSelectable]);

    const table = useReactTable<TData>({
        columns,
        data: data || [],
        getCoreRowModel: getCoreRowModel(),
        ...(isFilterable && {
            getFilteredRowModel: getFilteredRowModel(),
            globalFilterFn: dataTableFuzzyFilter,
            onGlobalFilterChange: setGlobalFilter,
        }),
        ...(isPaginated && { getPaginationRowModel: getPaginationRowModel() }),
        ...(isSortable && { getSortedRowModel: getSortedRowModel() }),
        ...(isSelectable && {
            enableMultiRowSelection,
            onRowSelectionChange,
        }),
        // defaultColumn: {
        //     maxSize: 10,
        //     minSize: 0,
        // },
        state: {
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
    };
}
