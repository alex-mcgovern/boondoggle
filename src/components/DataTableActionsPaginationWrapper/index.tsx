import { Box } from "../Box";
import { DataTableControlPageSize } from "../DataTableControlPageSize";
import { DataTableControlPagination } from "../DataTableControlPagination";
import { DataTableInfoPageCount } from "../DataTableInfoPageCount";
import { dataTablePaginationWrapperStyle } from "./styles.css";

import type { RowData, Table } from "@tanstack/react-table";

type DataTablePaginationWrapperProps<TData extends RowData> = {
  /** String to use for the page label */
  strPage: string;
  /** String to use for the results label */
  strResults: string;
  /** String to use for the show label */
  strShow: string;
  /** The `react-table` instance to control. */
  table: Table<TData>;
};

/**
 * Wraps actions for a data table.
 */
export function DataTablePaginationWrapper<TData extends RowData>({
  strPage,
  strResults,
  strShow,
  table,
}: DataTablePaginationWrapperProps<TData>) {
  return (
    <Box className={dataTablePaginationWrapperStyle}>
      {strPage && strResults && (
        <DataTableInfoPageCount<TData>
          strPage={strPage}
          strResults={strResults}
          table={table}
        />
      )}

      {strShow && (
        <DataTableControlPageSize<TData> strShow={strShow} table={table} />
      )}
      <DataTableControlPagination<TData> table={table} />
    </Box>
  );
}
