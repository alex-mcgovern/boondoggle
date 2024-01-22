import type {
    ColumnDef,
    FilterFn,
    RowData,
    SortingState,
    VisibilityState,
} from "@tanstack/react-table";
import type { JSXElementConstructor, ReactNode } from "react";

import { faEllipsis } from "@fortawesome/pro-solid-svg-icons/faEllipsis";
import { flexRender } from "@tanstack/react-table";
import { Fragment } from "react";

import type { MenuButtonProps } from "../menu-button";
import type {
    FilteringOptions,
    PaginationOptions,
    WithTableOptionalSelectableRows,
} from "./types";

import { arrayHasLength } from "../_lib/array-has-length";
import { Box } from "../box";
import { Button } from "../button";
import { Icon } from "../icon";
import { MenuButton } from "../menu-button";
import { TableColumnFilters } from "./_components/column-filters";
import { TablePagination } from "./_components/controls/TablePagination";
import { TableSortButton } from "./_components/controls/TableSortButton";
import { TableActions } from "./_components/controls/table-actions";
import { TableGlobalFilter } from "./_components/controls/table-global-filter";
import { TableNoResults } from "./_components/layout/TableNoResults";
import { useDataTableState } from "./_lib/useDataTableState";
import { tableCellCSS, tableHeaderCellCSS } from "./styles.css";
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

export type DataTableProps<TRowData extends RowData> =
    WithTableOptionalSelectableRows<TRowData> & {
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
         * Options related to filtering.
         */
        filteringOptions?: FilteringOptions<TRowData>;

        /**
         * Grid template columns
         */
        gridTemplateColumns: string;

        /**
         * The initial sorting state of the table
         */
        initialSorting?: SortingState;

        /**
         * Whether the table should be sortable and show sorting controls
         */
        isSortable?: boolean;

        /**
         * Options related to pagination.
         */
        paginationOptions?: PaginationOptions;

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
    columns,
    columnVisibility,
    data,
    enableMultiRowSelection = false,
    filteringOptions,
    gridTemplateColumns,
    initialSorting,
    isSelectable,
    isSortable,
    onSelect,
    paginationOptions,
    RowActions,
    strNoResults,
}: DataTableProps<TRowData>) {
    const { table } = useDataTableState({
        columns,
        columnVisibility,
        data,
        enableMultiRowSelection,
        filteringOptions,
        initialSorting,
        isSelectable,
        isSortable,
        onSelect,
        paginationOptions,
    });

    const hasData = arrayHasLength(table.getFilteredRowModel().rows);

    return (
        <Box>
            {actions || filteringOptions ? (
                <TableActions
                    actions={actions}
                    columnFilters={
                        <TableColumnFilters<TRowData>
                            filteringOptions={filteringOptions}
                            table={table}
                        />
                    }
                    globalFilter={
                        <TableGlobalFilter<TRowData>
                            filteringOptions={filteringOptions}
                            table={table}
                        />
                    }
                />
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
                            const headerContent = h.isPlaceholder
                                ? null
                                : flexRender(
                                      h.column.columnDef.header,
                                      h.getContext(),
                                  );

                            if (isSortable) {
                                return (
                                    <div
                                        className={tableHeaderCellCSS}
                                        key={h.id}
                                    >
                                        <TableSortButton header={h}>
                                            {headerContent}
                                        </TableSortButton>
                                    </div>
                                );
                            }

                            return (
                                <div
                                    className={tableHeaderCellCSS}
                                    key={h.id}
                                >
                                    {headerContent}
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

            {!hasData && (
                <TableNoResults
                    filteringOptions={filteringOptions}
                    strNoResults={strNoResults}
                    table={table}
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
