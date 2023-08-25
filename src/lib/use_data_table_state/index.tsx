import {
  createColumnHelper,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useCallback, useMemo, useState } from "react";

import { DataTableCellSelectable } from "../../components/data_table_cell_selectable";
import { DataTableRowActions } from "../../components/data_table_row_actions";
import { dataTableFuzzyFilter } from "../data_table_fuzzy_filter";

import type { SelectItemShape } from "../../components/select/types";
import type {
  ColumnDef,
  RowData,
  RowSelectionState,
  Updater,
} from "@tanstack/react-table";

type UseDataTableStateProps<TData extends RowData> = {
  /** An array of objects describing each row in the table */
  data: Array<TData> | undefined;
  /** Boolean to enable multi-row selection. */
  enableMultiRowSelection: boolean | undefined;
  /** Column definitions for the tabular data */
  initColumns: Array<ColumnDef<TData, any>>;
  /** Whether the table should be filterable */
  isFilterable: boolean | undefined;
  /** Whether to show pagination */
  isPaginated: boolean | undefined;
  /** Whether the table should allow rows to be selectable */
  isSelectable: boolean | undefined;
  /** Whether the table should be sortable and show sorting controls */
  isSortable: boolean | undefined;
  /** Function called on a new selection, with the current selection */
  onSelect: ((selection: TData[] | undefined) => void) | undefined;
  /** Items to appear in the dropdown menu on each row */
  rowActionItems?: Array<SelectItemShape>;
};

export function useDataTableState<TData extends RowData>({
  data,
  enableMultiRowSelection,
  initColumns,
  isFilterable,
  isPaginated,
  isSelectable,
  isSortable,
  onSelect,
  rowActionItems,
}: UseDataTableStateProps<TData>) {
  const [globalFilter, setGlobalFilter] = useState("");

  /** --------------------------------------------- */

  const [rowSelection, setRowSelection] = useState({});

  const onRowSelectionChange = useCallback(
    (updater: Updater<RowSelectionState>) => {
      setRowSelection(updater);

      if (typeof updater === "function") {
        return onSelect?.(
          data?.reduce<TData[]>((acc, row, index) => {
            if (updater({})[index]) {
              acc.push(row);
            }
            return acc;
          }, [])
        );
      }

      return onSelect?.(undefined);
    },
    [data, onSelect]
  );

  /** --------------------------------------------- */

  const columnHelper = createColumnHelper<TData>();

  const columns = useMemo(() => {
    return [
      // If the table is selectable, add a column for
      // the checkbox at the start of the columns array
      ...(isSelectable
        ? [
            columnHelper.display({
              cell: DataTableCellSelectable,
              enableSorting: false,
              id: "select",
              maxSize: 24,
            }),
          ]
        : []),

      // The original columns array
      ...initColumns,

      // If the table has row action items, add a column for
      // the dropdown menu at the end of the columns array
      ...(rowActionItems
        ? [
            columnHelper.display({
              cell: () => {
                return <DataTableRowActions items={rowActionItems} />;
              },
              id: "actions",
              size: 300,
            }),
          ]
        : []),
    ];
  }, [columnHelper, initColumns, isSelectable, rowActionItems]);

  /** --------------------------------------------- */

  const table = useReactTable<TData>({
    columns,
    data: data || [],
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
      onRowSelectionChange,
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

  return {
    setGlobalFilter,
    table,
  };
}
