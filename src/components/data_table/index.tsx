import { arrayHasLength } from "../../lib/array_has_length";
import { useDataTableState } from "../../lib/use_data_table_state";
import { Box } from "../box";
import { Card } from "../card";
import { DataTableActionsWrapper } from "../data_table_actions_wrapper";
import { DataTableFilterInput } from "../data_table_filter_input";
import { DataTableInfoNoResults } from "../data_table_info_no_results";
import { DataTableLayoutBody } from "../data_table_layout_body";
import { DataTableLayoutHead } from "../data_table_layout_head";
import { DataTablePaginationWrapper } from "../data_table_pagination_wrapper";

import type {
    TDataTableRowActions,
    WithTableOptionalFiltering,
    WithTableOptionalPagination,
    WithTableOptionalSelectableRows,
} from "../../common-types";
import type { ColumnDef, RowData } from "@tanstack/react-table";
import type { ReactNode } from "react";

export type DataTableProps<TData extends RowData> = WithTableOptionalPagination &
    WithTableOptionalSelectableRows<TData> &
    WithTableOptionalFiltering & {
        /**
         * React component to render a list of actions on each row
         */
        RowActions?: TDataTableRowActions<TData>;

        /**
         * Up to 2 react nodes to render as actions for the table
         */
        actions?: ReactNode | [ReactNode?, ReactNode?];

        /**
         * Column definitions for the tabular data
         */
        columns: Array<ColumnDef<TData, any>>;

        /**
         * An array of objects describing each row in the table
         */
        data: Array<TData> | undefined;

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
export function DataTable<TData extends RowData>({
    RowActions,
    actions,
    columns: initColumns,
    data,
    enableMultiRowSelection = false,
    isFilterable,
    isPaginated,
    isSelectable,
    isSortable,
    onSelect,
    strClearAllFilters,
    strFilterPlaceholder,
    strNext,
    strNoResults,
    strPage,
    strPrev,
    strResults,
}: DataTableProps<TData>) {
    const { globalFilter, setGlobalFilter, table } = useDataTableState({
        data,
        enableMultiRowSelection,
        initColumns,
        isFilterable,
        isPaginated,
        isSelectable,
        isSortable,
        onSelect,
        RowActions,
    });

    const hasData = arrayHasLength(table.getFilteredRowModel().rows);

    return (
        <Card hasPadding={false}>
            <DataTableActionsWrapper
                leftAction={
                    isFilterable && arrayHasLength(data) ? (
                        <DataTableFilterInput
                            globalFilter={globalFilter}
                            placeholder={strFilterPlaceholder}
                            setGlobalFilter={setGlobalFilter}
                        />
                    ) : null
                }
                rightActions={actions}
            />

            <Box
                // overflow="auto"
                width="100%"
            >
                {hasData && (
                    <Box
                        as="table"
                        width="100%"
                    >
                        <DataTableLayoutHead<TData>
                            isSortable={isSortable}
                            table={table}
                        />
                        <DataTableLayoutBody<TData> table={table} />
                    </Box>
                )}

                {!hasData && (
                    <DataTableInfoNoResults
                        globalFilter={globalFilter}
                        setGlobalFilter={setGlobalFilter}
                        strClearAllFilters={strClearAllFilters as string}
                        strNoResults={strNoResults}
                    />
                )}
            </Box>

            {isPaginated && hasData && table.getFilteredRowModel().rows.length > 10 && (
                <DataTablePaginationWrapper
                    strNext={strNext}
                    strPage={strPage}
                    strPrev={strPrev}
                    strResults={strResults}
                    table={table}
                />
            )}
        </Card>
    );
}
