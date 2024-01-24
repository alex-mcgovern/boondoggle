import type {
    ColumnDef,
    FilterFn,
    Row,
    RowData,
    SortingState,
    VisibilityState,
} from "@tanstack/react-table";
import type { JSXElementConstructor, ReactNode } from "react";

import { faEllipsis } from "@fortawesome/pro-solid-svg-icons/faEllipsis";
import {
    getCoreRowModel,
    getFacetedMinMaxValues,
    getFacetedRowModel,
    getFacetedUniqueValues,
    getFilteredRowModel,
    getPaginationRowModel,
    getSortedRowModel,
} from "@tanstack/react-table";
import { useReactTable } from "@tanstack/react-table";
import { flexRender } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { useMemo } from "react";
import { Fragment } from "react";

import type { MenuButtonProps } from "../menu-button";
import type { PaginationOptions } from "./types";

import { arrayHasLength } from "../_lib/array-has-length";
import { Box } from "../box";
import { Button } from "../button";
import { DataTableMultiFilter } from "../data-table-multi-filter";
import { Icon } from "../icon";
import { MenuButton } from "../menu-button";
import {
    TableActionsContainer,
    TableFiltersContainer,
    TableHeader,
    TableSearchContainer,
} from "../table-header";
import { TablePagination } from "./_components/controls/TablePagination";
import { TableSortButton } from "./_components/controls/TableSortButton";
import { TableGlobalFilter } from "./_components/controls/table-global-filter";
import { TableNoResults } from "./_components/layout/TableNoResults";
import { dataTableFuzzyFilter } from "./_lib/dataTableFuzzyFilter";
import { tableCellCSS, tableHeaderCellCSS } from "./styles.css";

/** -----------------------------------------------------------------------------
 * Extend the `@tanstack/react-table` library to add a new filter function:
 * ------------------------------------------------------------------------------- */

function dataTableFilterFnMultiSelect<TRowData extends RowData>(
    row: Row<TRowData>,
    column_id: string,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    filter_value: any,
) {
    const cell_value = row.getValue(column_id);

    if (!arrayHasLength(filter_value)) {
        return false;
    }

    return filter_value.includes(cell_value as string);
}

declare module "@tanstack/table-core" {
    interface FilterFns {
        multiSelect: FilterFn<unknown>;
    }
}

/** -----------------------------------------------------------------------------
 * TableRowMenuButton
 * ------------------------------------------------------------------------------- */

export type TV2DataTableRowActions<TData extends RowData> =
    JSXElementConstructor<{
        /**
         * The raw data for the DataTable row.
         */
        row_data: TData;
    }>;

export function TableRowMenuButton<TActionId extends string>(
    props: MenuButtonProps<TActionId>,
) {
    return (
        <MenuButton
            {...props}
            placement="bottom end"
        >
            <Button
                appearance="secondary"
                name="row_actions"
                size="square_sm"
            >
                <Icon icon={faEllipsis} />
            </Button>
        </MenuButton>
    );
}

/** -----------------------------------------------------------------------------
 * DataTable
 * ------------------------------------------------------------------------------- */

export type DataTableProps<TRowData extends RowData> = {
    /**
     * React component to render a list of actions on each row
     */
    RowActions?: TV2DataTableRowActions<TRowData>;

    /**
     * Up to 2 react nodes to render as actions for the table
     */
    actions?: [ReactNode?, ReactNode?] | ReactNode;

    /**
     * Column definitions for the tabular data
     */
    /**
     * Options related to column visibility.
     */
    columnVisibility?: VisibilityState;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    columns: Array<ColumnDef<TRowData, any>>;

    /**
     * An array of objects describing each row in the table
     */
    data: Array<TRowData> | undefined;

    /**
     * Grid template columns
     */
    gridTemplateColumns: string;

    /**
     * The initial sorting state of the table
     */
    initialSorting?: SortingState;

    /**
     * Whether to enable fuzzy searching
     */
    isFuzzySearchable?: boolean;

    /**
     * Options related to pagination.
     */
    paginationOptions?: PaginationOptions;

    /**
     * A string to fuzzy search rows in the table
     */
    strFuzzyFilter?: string;
};

/**
 * Component to render tabular data with filtering/sorting controls.
 * Uses the `@tanstack/react-table` library to manage state and render the table.
 */
export function DataTable<TRowData extends RowData>({
    actions,
    columns,
    columnVisibility,
    data,
    gridTemplateColumns,
    initialSorting,
    isFuzzySearchable,
    paginationOptions,
    RowActions,
    strFuzzyFilter,
}: DataTableProps<TRowData>) {
    const [globalFilter, setGlobalFilter] = useState<string | undefined>(
        strFuzzyFilter,
    );

    useEffect(() => {
        if (strFuzzyFilter && strFuzzyFilter !== globalFilter) {
            setGlobalFilter(strFuzzyFilter);
        }
    }, [globalFilter, strFuzzyFilter]);

    const table = useReactTable<TRowData>({
        columns,
        data: data || [],
        defaultColumn: {
            enableColumnFilter: false,
        },
        filterFns: {
            multiSelect: dataTableFilterFnMultiSelect,
        },
        filterFromLeafRows: false,
        getCoreRowModel: getCoreRowModel(),
        getFacetedMinMaxValues: getFacetedMinMaxValues(),
        getFacetedRowModel: getFacetedRowModel(),
        getFacetedUniqueValues: getFacetedUniqueValues(),
        getFilteredRowModel: getFilteredRowModel(),
        getPaginationRowModel: getPaginationRowModel(),
        getSortedRowModel: getSortedRowModel(),
        globalFilterFn: dataTableFuzzyFilter,
        initialState: {
            columnVisibility,
            globalFilter,
            pagination: {
                pageSize: 25,
            },
            sorting: initialSorting,
        },
        onGlobalFilterChange: setGlobalFilter,
        state: {
            globalFilter,
        },
    });

    const hasData = arrayHasLength(table.getFilteredRowModel().rows);

    const filterableColumns = useMemo(
        () => table.getAllColumns().filter((c) => c.getCanFilter()),
        [table],
    );

    return (
        <Box>
            {actions ||
            isFuzzySearchable ||
            arrayHasLength(filterableColumns) ? (
                <TableHeader>
                    <TableSearchContainer>
                        <TableGlobalFilter<TRowData> table={table} />
                    </TableSearchContainer>

                    {arrayHasLength(filterableColumns) && (
                        <TableFiltersContainer>
                            {filterableColumns.map((c) => (
                                <DataTableMultiFilter<TRowData>
                                    column={c}
                                    key={c.id}
                                />
                            ))}
                        </TableFiltersContainer>
                    )}

                    {actions && (
                        <TableActionsContainer>{actions}</TableActionsContainer>
                    )}
                </TableHeader>
            ) : null}

            {hasData && (
                <Box
                    __gridTemplateColumns={
                        RowActions
                            ? `${gridTemplateColumns} max-content`
                            : gridTemplateColumns
                    }
                    borderTop="border_rule"
                    display="grid"
                >
                    {table.getHeaderGroups().map((hg) =>
                        hg.headers.map((h) => {
                            return (
                                <div
                                    className={tableHeaderCellCSS}
                                    key={h.id}
                                >
                                    <TableSortButton header={h}>
                                        {h.isPlaceholder
                                            ? null
                                            : flexRender(
                                                  h.column.columnDef.header,
                                                  h.getContext(),
                                              )}
                                    </TableSortButton>
                                </div>
                            );
                        }),
                    )}
                    {RowActions ? <div className={tableHeaderCellCSS} /> : null}

                    {table.getRowModel().rows.map((row) => (
                        <Fragment key={row.id}>
                            {row.getVisibleCells().map((cell) => (
                                <div
                                    className={tableCellCSS}
                                    key={cell.id}
                                >
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
                        </Fragment>
                    ))}
                </Box>
            )}

            {!hasData && <TableNoResults table={table} />}

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
