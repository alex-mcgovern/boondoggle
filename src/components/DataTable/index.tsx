import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";

import { Box } from "../Box";
import { DataTableControlPageSize } from "../DataTableControlPageSize";
import { DataTableControlPagination } from "../DataTableControlPagination";
import { DataTableInfoPageCount } from "../DataTableInfoPageCount";
import { DataTableLayoutBody } from "../DataTableLayoutBody";
import { DataTableLayoutHead } from "../DataTableLayoutHead";
import { dataTableStyle } from "../core.ui.data_table/styles.css";

import type { ColumnDef, RowData } from "@tanstack/react-table";

type WithOptionalPagination =
  /** If `isPaginated` is `false` or `undefined`, `strPage` and `strResults` should not be passed. */
  | {
      /** Whether to show pagination */
      isPaginated: true;
      /** String to use for the page label */
      strPage: string;
      /** String to use for the results label */
      strResults: string;
      /** String to use for the show label */
      strShow: string;
    }
  /** If `isPaginated` is `false` or `undefined`, `strPage` and `strResults` should not be passed. */
  | {
      /** Whether to show pagination */
      isPaginated?: false;
      /** String to use for the page label */
      strPage?: never;
      /** String to use for the results label */
      strResults?: never;
      /** String to use for the show label */
      strShow?: never;
    };

/** ----------------------------------------------------------------------------- */

export type DataTableProps<TData extends RowData> = WithOptionalPagination & {
  columns: Array<ColumnDef<any, any>>;
  data: Array<TData>;
  isPaginated?: boolean;
  isSortable?: boolean;
};

/**
 * Component to render tabular data with filtering/sorting controls.
 * Uses the `@tanstack/react-table` library to manage state and render the table.
 */
export function DataTable<TData extends RowData>({
  columns,
  data,
  isPaginated,
  isSortable,
  strPage,
  strResults,
  strShow,
}: DataTableProps<TData>) {
  //   const { columnFilters, setColumnFilters } = useDataTableColumnFilterState();

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    ...(isPaginated && { getPaginationRowModel: getPaginationRowModel() }),
    ...(isSortable && { getSortedRowModel: getSortedRowModel() }),
    // initialState: {
    //   columnVisibility: {
    //     account_details: false,
    //     available_balance: false,
    //     currency: false,
    //     customer_id: false,
    //     external_id: false,
    //   },
    // },

    // onColumnFiltersChange: setColumnFilters,
    // state: {
    //   columnFilters,
    // },
  });

  return (
    <Box width="100%">
      <Box
        alignItems="end"
        display="flex"
        gap="spacing_2"
        justifyContent="start"
        marginY="spacing_2"
      >
        {isPaginated && strPage && strResults && (
          <DataTableInfoPageCount<TData>
            strPage={strPage}
            strResults={strResults}
            table={table}
          />
        )}
        {/* <DataTableControlColumns<TData>
          columnIdToString={defaultToStringFn}
          placeholder="placeholder"
          strColumnSelected="column selected"
          strColumnsSelected="columns selected"
          table={table}
        /> */}
        {isPaginated && strShow && (
          <DataTableControlPageSize<TData> strShow={strShow} table={table} />
        )}
        {isPaginated && <DataTableControlPagination<TData> table={table} />}
      </Box>

      {/* <DataTableInfoFilterPills
        columnFilters={columnFilters}
        columnIdToString={defaultToStringFn}
        filterValueToString={defaultToStringFn}
        setColumnFilters={setColumnFilters}
        strClearAllFilters="clear all filters"
      /> */}

      <table className={dataTableStyle}>
        <DataTableLayoutHead<TData> isSortable={isSortable} table={table} />
        <DataTableLayoutBody<TData> table={table} />
      </table>
      {/* 
        {table.getFilteredRowModel().rows?.length === 0 && (
          <DataTableInfoNoResults
            columnFilters={columnFilters}
            setColumnFilters={setColumnFilters}
            strClearAllFilters="clear all filters"
            strNoResultsDescription="no results description"
            strNoResultsTitle="no results title"
          />
        )} */}
    </Box>
  );
}
