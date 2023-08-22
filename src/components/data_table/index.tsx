import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { type ReactNode, useEffect, useMemo, useState } from "react";

import { dataTableFuzzyFilter } from "../../lib/data_table_fuzzy_filter";
import { Box } from "../box";
import { DataTableActionsWrapper } from "../data_table_actions_wrapper";
import { DataTableCellSelectable } from "../data_table_cell_selectable";
import { DataTableFilterInput } from "../data_table_filter_input";
import { DataTableLayoutBody } from "../data_table_layout_body";
import { DataTableLayoutHead } from "../data_table_layout_head";
import { DataTablePaginationWrapper } from "../data_table_pagination_wrapper";

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
  /** If `isFilterable` is `false` or `undefined`, `strFilterPlaceholder` should not be passed. */
  | {
      /** Whether the table should be filterable */
      isFilterable: true;
      /** String to use for filter field placeholder */
      strFilterPlaceholder: string;
    }
  /** If `isFilterable` is `false` or `undefined`, `strFilterPlaceholder` should not be passed. */
  | {
      /** Whether the table should be filterable */
      isFilterable?: false;
      /** String to use for filter field placeholder */
      strFilterPlaceholder?: never;
    };

/** ----------------------------------------------------------------------------- */

type WithOptionalSelectableRows<TData extends RowData> =
  /** If `isSelectable` is `true`, `enableMultiRowSelection` can be passed. */
  | {
      /** Boolean to enable multi-row selection. */
      enableMultiRowSelection?: boolean;
      /** Whether the table should allow rows to be selectable */
      isSelectable: true;
      /** Function called on a new selection, with the current selection */
      onSelect: (selectedRows: Array<TData>) => unknown;
    }
  /** If `isSelectable` is `false` or `undefined`, `enableMultiRowSelection` should not be passed. */
  | {
      /** Boolean to enable multi-row selection. */
      enableMultiRowSelection?: never;
      /** Whether the table should allow rows to be selectable */
      isSelectable?: false | undefined;
      /** Function called on a new selection, with the current selection */
      onSelect?: never;
    };

/** ----------------------------------------------------------------------------- */

export type DataTableProps<TData extends RowData> = WithOptionalPagination &
  WithOptionalSelectableRows<TData> &
  WithOptionalFiltering & {
    /** Up to 2 react nodes to render as actions for the table */
    actions?: ReactNode | [ReactNode?, ReactNode?];
    /** Column definitions for the tabular data */
    columns: Array<ColumnDef<TData, any>>;
    /** An array of objects describing each row in the table */
    data: Array<TData>;
    /** Whether the table should be borderless. */
    isBorderless?: boolean;
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
  columns: initColumns,
  data,
  enableMultiRowSelection = false,
  isBorderless,
  isFilterable,
  isPaginated,
  isSelectable,
  isSortable,
  onSelect,
  strFilterPlaceholder,
  strPage,
  strResults,
  strShow,
}: DataTableProps<TData>) {
  const [globalFilter, setGlobalFilter] = useState("");

  /** --------------------------------------------- */

  const [rowSelection, setRowSelection] = useState({});

  /** --------------------------------------------- */

  const columnHelper = createColumnHelper<TData>();

  const columns = useMemo(() => {
    if (isSelectable) {
      return [
        columnHelper.display({
          cell: DataTableCellSelectable,
          enableSorting: false,
          header: () => {
            return null;
          },
          id: "select",
        }),
        ...initColumns,
      ];
    }

    return initColumns;
  }, [columnHelper, initColumns, isSelectable]);

  /** --------------------------------------------- */

  const table = useReactTable<TData>({
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
    ...(isSelectable && {
      enableMultiRowSelection,
      onRowSelectionChange: setRowSelection,
    }),
    state: {
      ...(isFilterable && {
        globalFilter,
      }),
      ...(isSelectable && {
        rowSelection,
      }),
    },
  });

  /** --------------------------------------------- */

  const selectedRows = table.getSelectedRowModel().rows;

  useEffect(() => {
    if (isSelectable && onSelect) {
      onSelect(
        selectedRows.map((row) => {
          return row.original;
        })
      );
    }
  }, [isSelectable, onSelect, selectedRows]);

  /** --------------------------------------------- */

  return (
    <>
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

      <Box
        border={isBorderless ? undefined : "border_default"}
        borderRadius={isBorderless ? undefined : "md"}
      >
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
      </Box>

      {isPaginated && (
        <DataTablePaginationWrapper
          strPage={strPage}
          strResults={strResults}
          strShow={strShow}
          table={table}
        />
      )}
    </>
  );
}
