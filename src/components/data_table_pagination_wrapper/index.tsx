import { Box } from "../box";
import { DataTableControlPagination } from "../data_table_control_pagination";
import { DataTableInfoPageCount } from "../data_table_info_page_count";

import type { RowData, Table } from "@tanstack/react-table";

type DataTablePaginationWrapperProps<TData extends RowData> = {
    /**
     * String to use for the next button
     */
    strNext: string;

    /**
     * String to use for the page label
     */
    strPage: string;

    /**
     * String to use for the previous button
     */
    strPrev: string;

    /**
     * String to use for the results label
     */
    strResults: string;

    /**
     * The `react-table` instance to control.
     */
    table: Table<TData>;
};

/**
 * Wraps actions for a data table.
 */
export function DataTablePaginationWrapper<TData extends RowData>({
    strNext,
    strPage,
    strPrev,
    strResults,
    table,
}: DataTablePaginationWrapperProps<TData>) {
    return (
        <Box
            alignItems="center"
            borderTop="border_default"
            display="flex"
            gap="space_2"
            padding="space_4"
        >
            {strPage && strResults && (
                <DataTableInfoPageCount<TData>
                    strPage={strPage}
                    strResults={strResults}
                    table={table}
                />
            )}

            <DataTableControlPagination<TData>
                strNext={strNext}
                strPrev={strPrev}
                table={table}
            />
        </Box>
    );
}
