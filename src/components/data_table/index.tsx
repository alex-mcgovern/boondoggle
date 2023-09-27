import { arrayHasLength } from "../../lib/array_has_length";
import { useDataTableState } from "../../lib/use_data_table_state";
import { tableStyles } from "../../styles/stylesheet.css";
import { Box } from "../box";
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
import type { BoxProps } from "../box";
import type { ColumnDef, RowData } from "@tanstack/react-table";
import type { ReactNode } from "react";

export type DataTableProps<TRowData extends RowData> = WithTableOptionalPagination &
    WithTableOptionalSelectableRows<TRowData> &
    WithTableOptionalFiltering & {
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
        columns: Array<ColumnDef<TRowData, any>>;

        /**
         * An array of objects describing each row in the table
         */
        data: Array<TRowData> | undefined;

        /**
         * A function that returns props for the row.
         */
        getRowProps?: (row_data: TRowData) => BoxProps;

        /**
         * Whether the entire row should be clickable
         */
        isRowClickable?: boolean;

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
export function DataTable<TRowData extends RowData>({
    RowActions,
    actions,
    columns: initColumns,
    data,
    enableMultiRowSelection = false,
    getRowProps,
    isFilterable,
    isPaginated,
    isRowClickable,
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
}: DataTableProps<TRowData>) {
    const { globalFilter, setGlobalFilter, table } = useDataTableState({
        data,
        enableMultiRowSelection,
        initColumns,
        isFilterable,
        isPaginated,
        isRowClickable,
        isSelectable,
        isSortable,
        onSelect,
        RowActions,
    });

    const hasData = arrayHasLength(table.getFilteredRowModel().rows);

    return (
        <Box>
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

            {hasData && (
                <Box className={tableStyles}>
                    <DataTableLayoutHead<TRowData>
                        isSortable={isSortable}
                        table={table}
                    />
                    <DataTableLayoutBody<TRowData>
                        getRowProps={getRowProps}
                        isRowClickable={isRowClickable}
                        isSelectable={isSelectable}
                        table={table}
                    />
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

            {isPaginated && hasData && table.getFilteredRowModel().rows.length > 10 && (
                <DataTablePaginationWrapper
                    strNext={strNext}
                    strPage={strPage}
                    strPrev={strPrev}
                    strResults={strResults}
                    table={table}
                />
            )}
        </Box>
    );
}
