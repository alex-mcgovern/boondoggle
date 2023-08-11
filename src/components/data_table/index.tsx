import {
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { type ReactNode, useState } from "react";

import { dataTableFuzzyFilter } from "../../lib/data_table_fuzzy_filter";
import { Box } from "../box";
import { DataTableActionsWrapper } from "../data_table_actions_wrapper";
import { DataTableFilterInput } from "../data_table_filter_input";
import { DataTableLayoutBody } from "../data_table_layout_body";
import { DataTableLayoutHead } from "../data_table_layout_head";
import { DataTablePaginationWrapper } from "../data_table_pagination_wrapper";
import { getDataTableStyle } from "./styles.css";

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

type WithOptionalFiltering =
  /** If `isFilterable` is `false` or `undefined`, `strFilterPlaceholder`  should not be passed. */
  | {
      /** Whether the table should be filterable */
      isFilterable?: boolean;
      /** String to use for filter field placeholder */
      strFilterPlaceholder: string;
    }
  /** If `isPaginated` is `false` or `undefined`, `strPage` and `strResults` should not be passed. */
  | {
      /** Whether the table should be filterable */
      isFilterable?: false;
      /** String to use for filter field placeholder */
      strFilterPlaceholder?: never;
    };

/** ----------------------------------------------------------------------------- */

type DataTableProps<TData extends RowData> = WithOptionalPagination &
  WithOptionalFiltering & {
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
  isFilterable,
  isPaginated,
  isSortable,
  strPage,
  strResults,
  strShow,
}: DataTableProps<TData>) {
  //   const { columnFilters, setColumnFilters } = useDataTableColumnFilterState();

  const [globalFilter, setGlobalFilter] = useState("");

  const hasActionsBar = !!actions || isFilterable;

  const table = useReactTable({
    columns,
    data,
    getCoreRowModel: getCoreRowModel(),
    ...(isFilterable && {
      getFilteredRowModel: getFilteredRowModel(),
      globalFilterFn: dataTableFuzzyFilter,
      onGlobalFilterChange: setGlobalFilter,
    }),
    ...(isPaginated && { getPaginationRowModel: getPaginationRowModel() }),
    ...(isSortable && { getSortedRowModel: getSortedRowModel() }),
    state: {
      ...(isFilterable && {
        globalFilter,
      }),
    },
  });

  return (
    <Box width="100%">
      <DataTableActionsWrapper
        leftAction={
          isFilterable ? (
            <DataTableFilterInput
              placeholder="Filter"
              setGlobalFilter={setGlobalFilter}
            />
          ) : null
        }
        rightActions={actions}
      />

      <table className={getDataTableStyle({ hasActionsBar, isPaginated })}>
        <DataTableLayoutHead<TData> isSortable={isSortable} table={table} />
        <DataTableLayoutBody<TData> table={table} />
      </table>

      {isPaginated && (
        <DataTablePaginationWrapper
          strPage={strPage}
          strResults={strResults}
          strShow={strShow}
          table={table}
        />
      )}

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
