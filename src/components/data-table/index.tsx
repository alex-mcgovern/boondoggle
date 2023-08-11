import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { type ReactNode, useState } from "react";

import { Box } from "../box_comp";
import { Input } from "../input_comp";
import { DataTableActionsWrapper } from "./components/data_table_actions_wrapper";
import { DataTableControlPageSize } from "./components/data_table_control_page_size";
import { DataTableControlPagination } from "./components/data_table_control_pagination";
import { DataTableInfoPageCount } from "./components/data_table_info_page_count";
import { DataTableLayoutBody } from "./components/data_table_layout_body";
import { DataTableLayoutHead } from "./components/data_table_layout_head";
import { dataTableFuzzyFilter } from "./lib/data_table_fuzzy_filter";
import { IsFilterable } from "./stories";
import { dataTableStyle } from "./styles.css";

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

type WithOptionalFiltering<TData extends RowData> =
  | {
      /** The column IDs to allow filtering on */
      filterableColumns: Array<keyof TData>;
      /** Whether to allow filtering */
      isFilterable: true;
    }
  | {
      /** The column IDs to allow filtering on */
      filterableColumns?: never;
      /** Whether to allow filtering */
      isFilterable?: false;
    };

/** ----------------------------------------------------------------------------- */

export type DataTableProps<TData extends RowData> = WithOptionalPagination &
  WithOptionalFiltering<TData> & {
    /** Up to 2 react nodes to render as actions for the table */
    actions?: ReactNode | [ReactNode?, ReactNode?];
    /** Column definitions for the tabular data */
    columns: Array<ColumnDef<any, any>>;
    /** An array of objects describing each row in the table */
    data: Array<TData>;
    /** Whether the table should be paginated and show pagination controls */
    isPaginated?: boolean;
    /** Whether the table should be sortable and show sorting controls */
    isSortable?: boolean;
  };

/**
 * Component to render tabular data with filtering/sorting controls.
 * Uses the `@tanstack/react-table` library to manage state and render the table.
 */
export function DataTable<TData extends RowData>({
  actions,
  columns,
  data,
  isPaginated,
  isSortable,
  strPage,
  strResults,
  strShow,
}: DataTableProps<TData>) {
  //   const { columnFilters, setColumnFilters } = useDataTableColumnFilterState();

  const [globalFilter, setGlobalFilter] = useState("");

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    ...(IsFilterable && {
      getFilteredRowModel: getFilteredRowModel(),
      globalFilterFn: dataTableFuzzyFilter,
      onGlobalFilterChange: setGlobalFilter,
    }),
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
    state: {
      ...(IsFilterable && {
        globalFilter,
      }),
    },
  });

  return (
    <Box width="100%">
      {/* <DataTableInfoFilterPills
        columnFilters={columnFilters}
        columnIdToString={defaultToStringFn}
        filterValueToString={defaultToStringFn}
        setColumnFilters={setColumnFilters}
        strClearAllFilters="clear all filters"
      /> */}

      <DataTableActionsWrapper
        leftAction={
          IsFilterable ? (
            <Input
              name="filter"
              onChange={(e) => {
                return setGlobalFilter(String(e.target.value));
              }}
              placeholder="Search"
              value={globalFilter ?? ""}
            />
          ) : null
        }
        rightActions={actions}
      />

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
    </Box>
  );
}
