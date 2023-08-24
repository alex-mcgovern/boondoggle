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
import { dataTableFuzzyFilter } from "../data_table_fuzzy_filter";

import type {
  ColumnDef,
  RowData,
  RowSelectionState,
  Updater,
} from "@tanstack/react-table";

type UseDataTableStateProps<TData extends RowData> = {
  /** An array of objects describing each row in the table */
  data: Array<TData>;
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
}: UseDataTableStateProps<TData>) {
  const [globalFilter, setGlobalFilter] = useState("");

  /** --------------------------------------------- */

  const [rowSelection, setRowSelection] = useState({});

  const onRowSelectionChange = useCallback(
    (updater: Updater<RowSelectionState>) => {
      setRowSelection(updater);

      if (typeof updater === "function") {
        return onSelect?.(
          data.reduce<TData[]>((acc, row, index) => {
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

  /** --------------------------------------------- */

  // const selectedRows = table.getSelectedRowModel().rows;

  // useEffect(() => {
  //   if (isSelectable && onSelect) {
  //     onSelect(
  //       selectedRows.map((row) => {
  //         return row.original;
  //       })
  //     );
  //   }
  // }, [isSelectable, onSelect, selectedRows]);

  return {
    setGlobalFilter,
    table,
  };
}
