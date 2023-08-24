import { type ReactNode } from "react";

import { useDataTableState } from "../../lib/use_data_table_state";
import { Box } from "../box";
import { Card } from "../card";
import { DataTableActionsWrapper } from "../data_table_actions_wrapper";
import { DataTableFilterInput } from "../data_table_filter_input";
import { DataTableLayoutBody } from "../data_table_layout_body";
import { DataTableLayoutHead } from "../data_table_layout_head";
import { DataTablePaginationWrapper } from "../data_table_pagination_wrapper";

import type {
  WithTableOptionalFiltering,
  WithTableOptionalPagination,
  WithTableOptionalSelectableRows,
} from "../../types";
import type { ColumnDef, RowData } from "@tanstack/react-table";

/** ----------------------------------------------------------------------------- */

export type DataTableProps<TData extends RowData> =
  WithTableOptionalPagination &
    WithTableOptionalSelectableRows<TData> &
    WithTableOptionalFiltering & {
      /** Up to 2 react nodes to render as actions for the table */
      actions?: ReactNode | [ReactNode?, ReactNode?];
      /** Column definitions for the tabular data */
      columns: Array<ColumnDef<TData, any>>;
      /** An array of objects describing each row in the table */
      data: Array<TData> | undefined;
      /** Whether the table should be sortable and show sorting controls */
      isSortable?: boolean;
    };

/**
 * Component to render tabular data with filtering/sorting controls.
 * Uses the `@tanstack/react-table` library to manage state and render the table.
 */
export function DataTable<TData extends RowData>({
  actions,
  columns: initColumns,
  data,
  enableMultiRowSelection = false,
  isFilterable,
  isPaginated,
  isSelectable,
  isSortable,
  onSelect,
  strFilterPlaceholder,
  strNext,
  strPage,
  strPrev,
  strResults,
  strShow,
}: DataTableProps<TData>) {
  const { setGlobalFilter, table } = useDataTableState({
    data,
    enableMultiRowSelection,
    initColumns,
    isFilterable,
    isPaginated,
    isSelectable,
    isSortable,
    onSelect,
  });

  return (
    <Card hasPadding={false}>
      <DataTableActionsWrapper
        leftAction={
          isFilterable ? (
            <DataTableFilterInput
              placeholder={strFilterPlaceholder}
              setGlobalFilter={setGlobalFilter}
            />
          ) : null
        }
        rightActions={actions}
      />

      <Box overflow="auto" width="100%">
        <Box as="table" width="100%">
          <DataTableLayoutHead<TData> isSortable={isSortable} table={table} />
          <DataTableLayoutBody<TData> table={table} />
        </Box>
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

      {isPaginated && (
        <DataTablePaginationWrapper
          strNext={strNext}
          strPage={strPage}
          strPrev={strPrev}
          strResults={strResults}
          strShow={strShow}
          table={table}
        />
      )}
    </Card>
  );
}
